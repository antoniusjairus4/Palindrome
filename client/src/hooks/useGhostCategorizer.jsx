import { useState, useEffect, useRef, useCallback } from 'react';

export default function useGhostCategorizer() {
  const [isReady, setIsReady] = useState(false);
  const [isPredicting, setIsPredicting] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [predictedCategory, setPredictedCategory] = useState('');
  const workerRef = useRef(null);

  useEffect(() => {
    // Initialize WebWorker with type: module compatibility in Vite
    const worker = new Worker(
      new URL('../workers/ghostWorker.js', import.meta.url),
      { type: 'module' }
    );
    workerRef.current = worker;

    const handleMessage = (event) => {
      const { type, progress, category, error } = event.data;

      if (type === 'PROGRESS') {
        // Track the current downloading file's progress percentage
        setDownloadProgress(Math.round(progress || 0));
      } else if (type === 'READY') {
        setIsReady(true);
        setDownloadProgress(100);
      } else if (type === 'PREDICTION_RESULT') {
        setPredictedCategory(category);
        setIsPredicting(false);
      } else if (type === 'ERROR') {
        console.error('[Ghost AI Categorizer] Worker error encountered:', error);
        setIsPredicting(false);
      }
    };

    worker.addEventListener('message', handleMessage);

    // Boot model weights downloader
    worker.postMessage({ type: 'INIT' });

    return () => {
      worker.removeEventListener('message', handleMessage);
      worker.terminate();
    };
  }, []);

  const predict = useCallback((text) => {
    if (!text || !isReady || !workerRef.current) return;

    setIsPredicting(true);
    workerRef.current.postMessage({
      type: 'PREDICT',
      text,
      labels: [
        "Food & Dining",
        "Travel & Commute",
        "Software Subscriptions",
        "Entertainment",
        "Utilities",
        "Shopping",
        "Salary & Income",
        "Miscellaneous"
      ]
    });
  }, [isReady]);

  return {
    isReady,
    isPredicting,
    downloadProgress,
    predictedCategory,
    predict
  };
}
