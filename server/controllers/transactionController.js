import Transaction from '../models/Transaction.js';

// @desc    Get all ledger accounts matching active operator scope
// @route   GET /api/transactions
const getTransactions = async (req, res) => {
  try {
    // Verified: Queries using userId to match the updated model layout schema
    const transactions = await Transaction.find({ userId: req.user._id });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Local keyword-based classifier fallback
const localClassify = (desc) => {
  const d = desc.toLowerCase();
  if (d.includes('aws') || d.includes('cloud') || d.includes('host') || d.includes('server') || d.includes('digitalocean') || d.includes('vercel') || d.includes('heroku') || d.includes('netlify')) return 'Bills';
  if (d.includes('bill') || d.includes('electricity') || d.includes('water') || d.includes('gas') || d.includes('rent') || d.includes('phone') || d.includes('internet')) return 'Bills';
  if (d.includes('zomato') || d.includes('swiggy') || d.includes('food') || d.includes('restaurant') || d.includes('cafe') || d.includes('coffee') || d.includes('starbucks') || d.includes('dinner') || d.includes('lunch') || d.includes('breakfast')) return 'Food';
  if (d.includes('amazon') || d.includes('flipkart') || d.includes('shop') || d.includes('store') || d.includes('buy') || d.includes('clothing') || d.includes('grocery') || d.includes('supermarket')) return 'Shopping';
  if (d.includes('uber') || d.includes('ola') || d.includes('cab') || d.includes('flight') || d.includes('train') || d.includes('travel') || d.includes('fuel') || d.includes('petrol') || d.includes('gasoline')) return 'Travel';
  if (d.includes('netflix') || d.includes('spotify') || d.includes('movie') || d.includes('show') || d.includes('entertainment') || d.includes('cinema') || d.includes('game') || d.includes('steam')) return 'Entertainment';
  if (d.includes('salary') || d.includes('paycheck') || d.includes('dividend') || d.includes('interest') || d.includes('bonus')) return 'Salary';
  if (d.includes('income') || d.includes('deposit') || d.includes('refund')) return 'Income';
  return 'Misc';
};

// AI Classification Helper querying Google Gemini API
const classifyDescription = async (description) => {
  const apiKey = process.env.AI_API_KEY;
  const allowedCategories = ['Shopping', 'Food', 'Bills', 'Travel', 'Entertainment', 'Salary', 'Income', 'Misc'];

  if (!apiKey) {
    console.warn('[Palindrome AI] AI_API_KEY not defined in environment. Using local keyword classifier fallback.');
    return localClassify(description);
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    // Set a controller timeout of 4 seconds to avoid stalling the client
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are an AI financial classification assistant. Classify the transaction description: "${description}" into exactly one of these categories: ${JSON.stringify(allowedCategories)}. Return ONLY the category name as a single word (e.g. "Food"), with no markdown, punctuation, or spaces.`
          }]
        }]
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const resultText = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (resultText && allowedCategories.includes(resultText)) {
      return resultText;
    }

    // Fallback: search for category words inside the result text
    for (const cat of allowedCategories) {
      if (resultText && resultText.toLowerCase().includes(cat.toLowerCase())) {
        return cat;
      }
    }

    return localClassify(description);
  } catch (error) {
    console.error('[Palindrome AI] Transaction classification failed. Using local keyword classifier fallback:', error.message);
    return localClassify(description);
  }
};

// @desc    Add new financial mutation ledger item
// @route   POST /api/transactions
const addTransaction = async (req, res) => {
  const { title, amount, type, notes, category, date, hasReceipt, receiptImage, hasImageProof, proofImage, extractedText } = req.body;

  try {
    // Run AI categorization on description if category is not provided
    const finalCategory = category || await classifyDescription(title);

    const transaction = await Transaction.create({
      userId: req.user._id, // Links transaction strictly to active session user
      title,
      amount,
      category: finalCategory,
      type,
      notes,
      date: date || new Date(),
      hasReceipt,
      receiptImage,
      hasImageProof,
      proofImage,
      extractedText
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Purge a specific transaction profile record
// @route   DELETE /api/transactions/:id
const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction element not found inside cluster logs' });
    }

    // Verify ownership security access boundaries before executing deletion
    if (transaction.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Unauthorized operational security clearance mutation' });
    }

    await transaction.deleteOne();
    res.status(200).json({ id: req.params.id, message: 'Transaction successfully purged' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const transactionController = { getTransactions, addTransaction, deleteTransaction };
export default transactionController;