import Tesseract from 'tesseract.js';

/**
 * Perform local OCR on a given image file using tesseract.js.
 * This runs completely client-side in the browser to preserve user privacy.
 * 
 * @param {File|Blob|string} imageSource - The image source (file, blob, or base64)
 * @param {function} [onProgress] - Optional callback for tracking progress percentage
 * @returns {Promise<string>} - Extracted raw text
 */
export async function performLocalOCR(imageSource, onProgress) {
  try {
    const result = await Tesseract.recognize(
      imageSource,
      'eng',
      {
        logger: m => {
          if (onProgress && m.status === 'recognizing') {
            onProgress(Math.round(m.progress * 100));
          }
        }
      }
    );
    return result.data.text || '';
  } catch (error) {
    console.error('[OCR Processor Error]:', error);
    throw new Error('Failed to run local OCR scanning on this receipt image.');
  }
}

/**
 * Advanced Amount Extraction Regex Pipeline.
 * Parses unstructured transaction alerts, UPI chats, text messages and bank notifications.
 * 
 * @param {string} text - The raw OCR text
 * @returns {number|null} - The parsed amount value or null if not found
 */
export function extractAmountFromText(text) {
  if (!text) return null;

  // Replace newlines and excess whitespace with a single space
  const cleanText = text.replace(/\s+/g, ' ');

  const regexes = [
    // 1. Matches: debited/sent/paid/spent/charged Rs 500, INR 1,200.50, $45.00, ₹300
    /(?:debited|sent|paid|spent|charged|amount|total)\s+(?:of|for|to)?\s*(?:[₹$€£¥]|Rs\.?|INR|USD|EUR|GBP)\s*(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?)/i,
    // 2. Matches: Rs. 500, INR 1,200.50, $45.00, ₹300, £20, ¥1500
    /(?:[₹$€£¥]|Rs\.?|INR|USD|EUR|GBP)\s*(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?)/i,
    // 3. Matches: debited/sent/paid/spent 500 (no currency symbol)
    /(?:debited|sent|paid|spent|charged|total)\s+(?:of|for|to)?\s*(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?)/i,
    // 4. Matches: standard decimals like 45.00 or 1,200.50
    /(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2}))/
  ];

  for (const regex of regexes) {
    const match = cleanText.match(regex);
    if (match && match[1]) {
      const valStr = match[1].replace(/,/g, '');
      const val = parseFloat(valStr);
      if (!isNaN(val) && val > 0) {
        return val;
      }
    }
  }

  return null;
}

/**
 * Normalizes and cleans the extracted text block for Ghost AI feeding.
 * 
 * @param {string} text - The raw OCR text
 * @returns {string} - Cleaned single-line text block
 */
export function cleanExtractedTextForAI(text) {
  if (!text) return '';
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}
