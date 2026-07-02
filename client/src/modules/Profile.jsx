import { useState, useEffect } from 'react';
import axios from 'axios';
import { User, Key, Edit, Camera } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  
  // State for user details
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    residentialAddress: '',
    officeAddress: '',
    jobTitle: '',
    jobDetails: '',
    profilePhoto: ''
  });

  const [editForm, setEditForm] = useState({
    name: '',
    mobileNumber: '',
    residentialAddress: '',
    officeAddress: '',
    jobTitle: '',
    jobDetails: '',
    profilePhoto: ''
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.get('/api/user/profile', config);
      if (response.data) {
        setUser(response.data);
        setEditForm(response.data);
        localStorage.setItem('userName', response.data.name || '');
        localStorage.setItem('profilePhoto', response.data.profilePhoto || '');
        window.dispatchEvent(new Event('profileUpdate'));
      }
    } catch (error) {
      console.error('Failed to fetch user profile:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const max_width = 300;
          const max_height = 300;
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

          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.85);
          setEditForm(prev => ({ ...prev, profilePhoto: compressedBase64 }));
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('File conversion/compression failed:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.put('/api/user/profile', editForm, config);
      if (response.data) {
        setUser(response.data);
        setEditForm(response.data);
        setIsEditing(false);
        localStorage.setItem('userName', response.data.name || '');
        localStorage.setItem('profilePhoto', response.data.profilePhoto || '');
        window.dispatchEvent(new Event('profileUpdate'));
      }
    } catch (error) {
      console.error('Failed to update profile:', error.response?.data?.message || error.message);
      setErrorMsg(error.response?.data?.message || 'Failed to update credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl flex flex-col gap-6 animate-in fade-in duration-200 font-sans">
      <div>
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white">Profile Settings</h1>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
          Manage your personal details and account preferences.
        </p>
      </div>

      <div className="bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl p-6 flex flex-col gap-6 text-xs shadow-sm">
        
        {/* Header Section */}
        {!isEditing ? (
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 rounded-xl overflow-hidden flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                {user.profilePhoto ? (
                  <img src={user.profilePhoto} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-5 h-5" />
                )}
              </div>
              <div>
                <div className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">Account Name</div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{user.name || 'Not Configured'}</div>
                {user.jobTitle && (
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 font-medium">{user.jobTitle}</div>
                )}
              </div>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all text-xs font-semibold cursor-pointer"
            >
              <Edit className="w-3.5 h-3.5" />
              Edit Profile
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4 border-b border-slate-100 dark:border-white/5 pb-4">
            <div className="relative group w-14 h-14 bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 rounded-xl overflow-hidden flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              {editForm.profilePhoto ? (
                <img src={editForm.profilePhoto} alt="Upload Preview" className="w-full h-full object-cover" />
              ) : (
                <User className="w-6 h-6" />
              )}
              <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-[8px] text-white font-semibold">
                <Camera className="w-3.5 h-3.5 mb-0.5" />
                Upload
                <input 
                  type="file" 
                  accept="image/png, image/jpeg, image/jpg" 
                  onChange={handleFileChange} 
                  className="hidden" 
                />
              </label>
            </div>
            <div>
              <div className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">Upload Profile Picture</div>
              <div className="text-[10px] text-slate-450 dark:text-slate-500 mt-1">PNG, JPG, or JPEG up to 1MB</div>
            </div>
          </div>
        )}

        {/* Form or Info list */}
        {!isEditing ? (
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-white/5 pb-2">
              <span className="text-slate-450 dark:text-slate-400 font-medium">Job Title</span>
              <span className="font-semibold text-slate-800 dark:text-slate-300">{user.jobTitle || 'Not Configured'}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-white/5 pb-2">
              <span className="text-slate-450 dark:text-slate-400 font-medium">Job Details</span>
              <span className="font-semibold text-slate-800 dark:text-slate-300">{user.jobDetails || 'Not Configured'}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-white/5 pb-2">
              <span className="text-slate-450 dark:text-slate-400 font-medium">Email Address</span>
              <span className="font-semibold text-slate-800 dark:text-slate-300">{user.email || 'Not Configured'}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-white/5 pb-2">
              <span className="text-slate-450 dark:text-slate-400 font-medium">Phone Number</span>
              <span className="font-semibold text-slate-800 dark:text-slate-300">{user.mobileNumber || 'Not Configured'}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-white/5 pb-2">
              <span className="text-slate-450 dark:text-slate-400 font-medium">Home Address</span>
              <span className="font-semibold text-slate-800 dark:text-slate-300 truncate max-w-[240px]" title={user.residentialAddress}>
                {user.residentialAddress || 'Not Configured'}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-white/5 pb-2">
              <span className="text-slate-455 dark:text-slate-400 font-medium">Work Address</span>
              <span className="font-semibold text-slate-800 dark:text-slate-300 truncate max-w-[240px]" title={user.officeAddress}>
                {user.officeAddress || 'Not Configured'}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-white/5 pb-2">
              <span className="text-slate-455 dark:text-slate-400 font-medium">Account Type</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Administrator</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-white/5 pb-2">
              <span className="text-slate-455 dark:text-slate-400 font-medium">Location</span>
              <span className="font-semibold text-slate-800 dark:text-slate-300">Coimbatore</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-455 dark:text-slate-400 font-medium">Security Status</span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                <Key className="w-3 h-3" /> Secured
              </span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {errorMsg && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-500 rounded-xl text-xs font-medium animate-pulse">
                {errorMsg}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-semibold text-slate-500">Name</label>
                <input 
                  type="text" 
                  required 
                  value={editForm.name} 
                  onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-slate-800 dark:text-white text-xs placeholder:text-slate-400 dark:placeholder:text-zinc-700" 
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-semibold text-slate-500">Email Address</label>
                <input 
                  type="email" 
                  disabled 
                  value={editForm.email} 
                  className="w-full bg-transparent border-b border-slate-100 dark:border-white/5 text-slate-400 dark:text-slate-500 text-xs cursor-not-allowed select-none py-2" 
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-semibold text-slate-500">Phone Number</label>
                <input 
                  type="text" 
                  value={editForm.mobileNumber} 
                  onChange={(e) => setEditForm(prev => ({ ...prev, mobileNumber: e.target.value }))}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-slate-800 dark:text-white text-xs placeholder:text-slate-400 dark:placeholder:text-zinc-600" 
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-semibold text-slate-500">Job Title</label>
                <input 
                  type="text" 
                  value={editForm.jobTitle} 
                  onChange={(e) => setEditForm(prev => ({ ...prev, jobTitle: e.target.value }))}
                  placeholder="e.g. Software Engineer"
                  className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-slate-800 dark:text-white text-xs placeholder:text-slate-400 dark:placeholder:text-zinc-600" 
                />
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-[10px] font-semibold text-slate-500">Job Details</label>
                <textarea 
                  value={editForm.jobDetails} 
                  onChange={(e) => setEditForm(prev => ({ ...prev, jobDetails: e.target.value }))}
                  placeholder="e.g. Designing databases and building frontend interfaces."
                  rows={2}
                  className="w-full bg-transparent border border-slate-200 dark:border-white/10 rounded-xl p-2.5 focus:border-indigo-500 focus:outline-none transition-all text-slate-800 dark:text-white text-xs resize-none placeholder:text-slate-400 dark:placeholder:text-zinc-600" 
                />
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-[10px] font-semibold text-slate-500">Home Address</label>
                <input 
                  type="text" 
                  value={editForm.residentialAddress} 
                  onChange={(e) => setEditForm(prev => ({ ...prev, residentialAddress: e.target.value }))}
                  placeholder="e.g. Apt 4B, Baker St, London"
                  className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-slate-800 dark:text-white text-xs placeholder:text-slate-400 dark:placeholder:text-zinc-600" 
                />
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-[10px] font-semibold text-slate-500">Work Address</label>
                <input 
                  type="text" 
                  value={editForm.officeAddress} 
                  onChange={(e) => setEditForm(prev => ({ ...prev, officeAddress: e.target.value }))}
                  placeholder="e.g. Floor 22, Financial District, London"
                  className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-slate-800 dark:text-white text-xs placeholder:text-slate-400 dark:placeholder:text-zinc-600" 
                />
              </div>
            </div>

            {/* Form Controls */}
            <div className="flex justify-end gap-3 mt-6 border-t border-white/5 pt-4">
              <button 
                type="button" 
                onClick={() => {
                  setEditForm(user);
                  setIsEditing(false);
                }}
                className="px-4 py-2 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-rose-500 hover:text-rose-400 font-semibold rounded-xl text-xs transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                disabled={loading}
                className="px-4 py-2 bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold rounded-xl text-xs transition-all cursor-pointer disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save Profile'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}