import { pipeline, env } from '@xenova/transformers';

// Set HuggingFace CDN fetch mode
env.allowLocalModels = false;

class PipelineSingleton {
  static task = 'zero-shot-classification';
  static model = 'Xenova/mobilebert-uncased-mnli';
  static instance = null;

  static async getInstance(progress_callback = null) {
    if (this.instance === null) {
      this.instance = pipeline(this.task, this.model, { progress_callback });
    }
    return this.instance;
  }
}

// Listen to message calls from React main thread hook
self.addEventListener('message', async (event) => {
  const { type, text, labels } = event.data;

  if (type === 'INIT') {
    try {
      // Pre-warm/initialize singleton instance and report download chunks progress
      await PipelineSingleton.getInstance((data) => {
        if (data.status === 'progress') {
          self.postMessage({
            type: 'PROGRESS',
            file: data.file,
            progress: data.progress
          });
        }
      });
      self.postMessage({ type: 'READY' });
    } catch (error) {
      self.postMessage({ type: 'ERROR', error: error.message });
    }
  } else if (type === 'PREDICT') {
    try {
      const classifier = await PipelineSingleton.getInstance();
      const output = await classifier(text, labels);
      
      // Zero-shot classifier returns labels sorted descending by score.
      const topCategory = output.labels && output.labels[0] ? output.labels[0] : 'Miscellaneous';
      
      self.postMessage({
        type: 'PREDICTION_RESULT',
        category: topCategory
      });
    } catch (error) {
      self.postMessage({ type: 'ERROR', error: error.message });
    }
  }
});
