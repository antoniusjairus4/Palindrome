import React, { useState, useEffect, useRef } from 'react';
import { UploadCloud, FileImage, CheckCircle, RefreshCw, AlertCircle, Sparkles, Trash2, Edit2, Check } from 'lucide-react';
import { performLocalOCR, extractAmountFromText, extractDateFromText, extractMerchantFromText, cleanExtractedTextForAI } from '../utils/ocrProcessor';
import { classifyText } from '../utils/categoryMapper';

// Helper to map 1210 granular categories to the 8 base app categories
function mapToAppCategory(name, group) {
  const cleanName = (name || '').toLowerCase();
  const cleanGroup = (group || '').toLowerCase();

  if (cleanGroup.includes('food') || cleanName.includes('grocery') || cleanName.includes('restaurant') || cleanName.includes('beverage') || cleanName.includes('diet') || cleanName.includes('vegan') || cleanName.includes('dining')) {
    return 'Food';
  }
  if (cleanGroup.includes('travel') || cleanGroup.includes('commute') || cleanGroup.includes('long distance') || cleanGroup.includes('bicycle') || cleanGroup.includes('automotive') || cleanGroup.includes('aviation') || cleanGroup.includes('marine')) {
    return 'Travel';
  }
  if (cleanGroup.includes('utility') || cleanGroup.includes('telecom') || cleanGroup.includes('rent') || cleanGroup.includes('insurance') || cleanGroup.includes('tax') || cleanGroup.includes('bill') || cleanGroup.includes('government') || cleanGroup.includes('legal') || cleanGroup.includes('escrow') || cleanGroup.includes('compliance')) {
    return 'Bills';
  }
  if (cleanGroup.includes('apparel') || cleanGroup.includes('clothing') || cleanGroup.includes('shopping') || cleanGroup.includes('furniture') || cleanGroup.includes('kitchenware') || cleanGroup.includes('office supply') || cleanGroup.includes('cosmetic') || cleanGroup.includes('jewelry') || cleanGroup.includes('luxury') || cleanGroup.includes('e-commerce') || cleanGroup.includes('fasteners') || cleanGroup.includes('hardware') || cleanGroup.includes('woodworking') || cleanGroup.includes('procurement')) {
    return 'Shopping';
  }
  if (cleanGroup.includes('entertainment') || cleanGroup.includes('gaming') || cleanGroup.includes('streaming') || cleanGroup.includes('leisure') || cleanGroup.includes('hobby') || cleanGroup.includes('sport') || cleanGroup.includes('art') || cleanGroup.includes('music') || cleanGroup.includes('pet') || cleanGroup.includes('kids') || cleanGroup.includes('dating') || cleanGroup.includes('toy') || cleanGroup.includes('photography') || cleanGroup.includes('fandom') || cleanGroup.includes('arcade') || cleanGroup.includes('theme park') || cleanGroup.includes('community')) {
    return 'Entertainment';
  }
  if (cleanGroup.includes('salary') || cleanGroup.includes('income') || cleanGroup.includes('investment') || cleanGroup.includes('cashback') || cleanGroup.includes('wealth')) {
    return 'Salary';
  }
  
  return 'Misc';
}

export default function ReceiptScanner({ onScanComplete, onDiscard }) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [ocrProgress, setOcrProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Scanned / Extracted states
  const [extractedData, setExtractedData] = useState(null);
  const [merchant, setMerchant] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Misc');
  const [aiTag, setAiTag] = useState('');
  const [rawText, setRawText] = useState('');

  const fileInputRef = useRef(null);

  // Revoke object URL on unmount or file change to prevent memory leaks
  useEffect(() => {
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processImageFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processImageFile(e.target.files[0]);
    }
  };

  const processImageFile = async (file) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Invalid file type. Please upload a receipt or screenshot image.');
      return;
    }

    setErrorMsg('');
    setSelectedFile(file);
    
    // Revoke previous URL if any
    if (imagePreviewUrl) {
      URL.revokeObjectURL(imagePreviewUrl);
    }

    // Set new preview URL
    const previewUrl = URL.createObjectURL(file);
    setImagePreviewUrl(previewUrl);

    setIsProcessing(true);
    setOcrProgress(0);
    setExtractedData(null);

    try {
      // 1. Run local OCR text extraction
      const text = await performLocalOCR(file, (progress) => {
        setOcrProgress(progress);
      });

      // 2. Extract key attributes using regex pipelines
      const candidateMerchant = extractMerchantFromText(text) || 'Unknown Merchant';
      const candidateAmount = extractAmountFromText(text);
      const candidateDate = extractDateFromText(text) || new Date().toISOString().split('T')[0];
      
      // 3. Classify category using our master regex taxonomy mapper
      const classified = classifyText(text);
      const mappedAppCat = mapToAppCategory(classified.name, classified.group);

      // Save raw text for auditing/AI use
      const cleanedText = cleanExtractedTextForAI(text);
      setRawText(cleanedText);

      // 4. Update state variables for review
      setMerchant(candidateMerchant);
      setAmount(candidateAmount !== null ? candidateAmount.toString() : '');
      setDate(candidateDate);
      setCategory(mappedAppCat);
      setAiTag(classified.group ? `${classified.group} (${classified.name})` : 'Miscellaneous');
      
      setExtractedData({
        merchant: candidateMerchant,
        amount: candidateAmount,
        date: candidateDate,
        category: mappedAppCat,
        aiTag: classified.group ? `${classified.group} (${classified.name})` : 'Miscellaneous',
        rawText: cleanedText
      });

    } catch (err) {
      console.error('[ReceiptScanner Error]:', err);
      setErrorMsg(err.message || 'Error occurred during receipt analysis.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleApply = () => {
    if (!selectedFile) return;

    // Convert file/canvas to compressed base64 representation
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const max_width = 800;
        const max_height = 800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > max_width) {
            height *= max_width / width;
            width = max_width;
          }
        } else {
          if (height > max_height) {
            width *= max_height / height;
            height = max_height;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.65);

        onScanComplete({
          title: merchant,
          amount: amount,
          date: date,
          category: category,
          receiptImage: compressedBase64,
          proofImage: compressedBase64,
          extractedText: rawText,
          hasReceipt: true,
          hasImageProof: true
        });
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleDiscard = () => {
    setSelectedFile(null);
    if (imagePreviewUrl) {
      URL.revokeObjectURL(imagePreviewUrl);
      setImagePreviewUrl('');
    }
    setExtractedData(null);
    setErrorMsg('');
    setMerchant('');
    setAmount('');
    setDate('');
    setCategory('Misc');
    setRawText('');
    if (onDiscard) {
      onDiscard();
    }
  };

  const categoriesList = ['Shopping', 'Food', 'Bills', 'Travel', 'Entertainment', 'Salary', 'Income', 'Misc'];

  return (
    <div className="w-full text-xs font-sans">
      {!selectedFile ? (
        /* Upload Area (Dropzone) */
        <div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-[140px] ${
            dragActive
              ? 'border-indigo-500 bg-indigo-500/10 shadow-[0_0_15px_rgba(99,102,241,0.2)]'
              : 'border-zinc-800 bg-zinc-950/40 hover:border-zinc-700 hover:bg-zinc-900/20'
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <UploadCloud className={`w-8 h-8 mb-2 transition-transform duration-300 ${dragActive ? 'text-indigo-400 scale-110' : 'text-slate-500'}`} />
          <p className="font-semibold text-slate-300 text-[11px] uppercase tracking-wider mb-1">
            Drag & Drop Receipt or Screenshot
          </p>
          <p className="text-slate-500 text-[9px] uppercase tracking-widest">
            or click to browse local files
          </p>
          <span className="mt-3 text-[8px] px-2 py-0.5 rounded bg-zinc-900 text-slate-500 border border-white/5 uppercase tracking-widest">
            Local OCR • 100% Privacy Secure
          </span>
        </div>
      ) : (
        /* Processing / Details Display */
        <div className="bg-zinc-950/60 border border-white/5 rounded-xl p-4 backdrop-blur-md shadow-lg animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Image Preview & Status */}
            <div className="md:col-span-4 flex flex-col gap-3">
              <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black aspect-video md:aspect-[4/3] flex items-center justify-center group">
                <img
                  src={imagePreviewUrl}
                  alt="Receipt Preview"
                  className="w-full h-full object-contain"
                />
                
                {isProcessing && (
                  <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center p-3">
                    <RefreshCw className="w-5 h-5 text-indigo-400 animate-spin mb-3" />
                    <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider mb-1.5">
                      Extracting Text...
                    </span>
                    
                    {/* Progress bar container */}
                    <div className="w-full bg-zinc-900 rounded-full h-1 overflow-hidden border border-white/5">
                      <div
                        className="bg-gradient-to-r from-violet-500 to-indigo-500 h-full shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-300"
                        style={{ width: `${ocrProgress}%` }}
                      />
                    </div>
                    <span className="text-[9px] text-slate-500 font-mono mt-1">
                      {ocrProgress}% Complete
                    </span>
                  </div>
                )}

                {/* Overlays / Edit Controls */}
                {!isProcessing && (
                  <button
                    onClick={handleDiscard}
                    className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-rose-950/80 border border-white/5 hover:border-rose-500/50 rounded-lg text-slate-400 hover:text-rose-400 transition-all cursor-pointer shadow-md"
                    title="Remove Image"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              
              <div className="text-[9px] text-slate-500 leading-relaxed uppercase tracking-wider flex items-center gap-1.5 justify-center">
                <FileImage className="w-3.5 h-3.5 text-slate-400" />
                {selectedFile.name.substring(0, 18)}...
              </div>
            </div>

            {/* Extracted Details Form */}
            <div className="md:col-span-8 flex flex-col gap-3">
              {isProcessing ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-6 text-slate-500 gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-500/60 animate-pulse" />
                  <p className="uppercase tracking-widest text-[9px] font-bold">Initializing Local Tesseract Engine...</p>
                  <p className="text-[8px] text-slate-600 max-w-[200px] leading-normal">
                    This first load parses the compiled categorization dictionary in memory.
                  </p>
                </div>
              ) : errorMsg ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-6 text-rose-450 gap-2">
                  <AlertCircle className="w-5 h-5" />
                  <p className="font-bold uppercase tracking-widest text-[9px]">{errorMsg}</p>
                  <button
                    onClick={handleDiscard}
                    className="px-3 py-1 bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 rounded-lg mt-2 cursor-pointer transition-all text-[9px] uppercase tracking-wider"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase tracking-widest text-[9px]">
                    <CheckCircle className="w-3.5 h-3.5 stroke-[2.5]" />
                    OCR Analysis Complete
                  </div>

                  {/* Attribute Inputs grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Merchant */}
                    <div className="col-span-2 flex flex-col gap-1">
                      <label className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                        Merchant / Title
                      </label>
                      <input
                        type="text"
                        value={merchant}
                        onChange={(e) => setMerchant(e.target.value)}
                        placeholder="Unknown Merchant"
                        className="w-full bg-zinc-900 border border-white/5 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-zinc-900/60 transition-all font-sans"
                      />
                    </div>

                    {/* Amount */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                        Amount (INR ₹)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="w-full bg-zinc-900 border border-white/5 rounded-lg px-2.5 py-1.5 text-white font-mono focus:outline-none focus:border-indigo-500/50 focus:bg-zinc-900/60 transition-all"
                      />
                    </div>

                    {/* Date */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                        Transaction Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/5 rounded-lg px-2.5 py-1.5 text-slate-300 focus:outline-none focus:border-indigo-500/50 focus:bg-zinc-900/60 transition-all"
                      />
                    </div>

                    {/* Category Dropdown */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                        Mapped Category
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/5 rounded-lg px-2.5 py-1.5 text-slate-350 focus:outline-none focus:border-indigo-500/50 focus:bg-zinc-900/60 transition-all cursor-pointer"
                      >
                        {categoriesList.map((cat) => (
                          <option key={cat} value={cat} className="bg-zinc-950 text-white">
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* AI Tag */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                        AI Classifier Taxonomy
                      </label>
                      <div className="w-full bg-zinc-900/40 border border-white/5 rounded-lg px-2.5 py-1.5 text-indigo-400 font-mono text-[9px] truncate flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 flex-shrink-0 text-indigo-500" />
                        {aiTag}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Controls */}
                  <div className="flex justify-end gap-2.5 mt-2 pt-2.5 border-t border-white/5">
                    <button
                      type="button"
                      onClick={handleDiscard}
                      className="px-3 py-1.5 border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white rounded-lg transition-all font-semibold uppercase tracking-wider text-[9px] cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleApply}
                      className="px-4 py-1.5 bg-indigo-650 hover:bg-indigo-600 text-white rounded-lg transition-all font-bold uppercase tracking-wider text-[9px] cursor-pointer flex items-center gap-1 shadow-md shadow-indigo-950/50"
                    >
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      Import To Form
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
