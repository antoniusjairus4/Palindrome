import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useCurrency } from '../context/CurrencyContext';
import { useTheme } from '../context/ThemeContext';
import { useUXMode } from '../context/UXModeContext';
import logoLight from '../assets/logo_light.png';
import logoDark from '../assets/logo_dark.png';
import { 
  LayoutDashboard, ListOrdered, BarChart3, Wallet, 
  Target, Award, Settings, User, RefreshCw, LogOut, Menu, X, ChevronRight, Sun, Moon 
} from 'lucide-react';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currency } = useCurrency();
  const { theme, toggleTheme } = useTheme();
  const { workspaceMode, tUX } = useUXMode();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Set initial collapsed state based on window width
  const [isCollapsed, setIsCollapsed] = useState(() => {
    return window.innerWidth < 768 ? false : true;
  });

  const [profilePhoto, setProfilePhoto] = useState(() => localStorage.getItem('profilePhoto') || '');
  const [userNameState, setUserNameState] = useState(() => localStorage.getItem('userName') || 'Operator');

  // Track window resizing to ensure sidebar is expanded on mobile screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const response = await axios.get('/api/user/profile', config);
        if (response.data) {
          setProfilePhoto(response.data.profilePhoto || '');
          setUserNameState(response.data.name || 'Operator');
          localStorage.setItem('userName', response.data.name || 'Operator');
          localStorage.setItem('profilePhoto', response.data.profilePhoto || '');
        }
      } catch (error) {
        console.error('Failed to fetch sidebar profile details:', error);
      }
    };

    fetchProfile();

    const handleProfileUpdate = () => {
      setUserNameState(localStorage.getItem('userName') || 'Operator');
      setProfilePhoto(localStorage.getItem('profilePhoto') || '');
    };

    window.addEventListener('profileUpdate', handleProfileUpdate);
    return () => {
      window.removeEventListener('profileUpdate', handleProfileUpdate);
    };
  }, []);

  const navigation = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Transactions', path: '/dashboard/transactions', icon: ListOrdered },
    { name: 'Assets', path: '/dashboard/assets', icon: Wallet },
    { name: 'Analytics', path: '/dashboard/analytics', icon: BarChart3 },
    { name: 'Wealth Targets', path: '/dashboard/targets', icon: Target },
    { name: 'Subscriptions', path: '/dashboard/subscriptions', icon: RefreshCw },
    { name: 'Achievements', path: '/dashboard/achievements', icon: Award },
    { name: 'Profile', path: '/dashboard/profile', icon: User },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-655 dark:text-slate-400 font-sans flex flex-col md:flex-row antialiased relative transition-colors duration-200">
      
      {/* Mobile Top Header Ribbon */}
      <header className="md:hidden w-full bg-white/80 dark:bg-black/80 border-b border-slate-100 dark:border-white/5 px-6 py-4 flex justify-between items-center z-50 backdrop-blur-xl sticky top-0 transition-colors duration-200">
        <div className="flex items-center gap-2 select-none">
          <img src={theme === 'dark' ? logoDark : logoLight} alt="Palindrome Logo" className="h-6 w-auto object-contain" />
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme} 
            className="p-1.5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Backdrop Overlay for Mobile Navigation Menu */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Persistent Sidebar Navigation Panel */}
      <aside 
        className={`
          fixed inset-y-0 left-0 bg-white dark:bg-black border-r border-slate-100 dark:border-white/5 flex flex-col justify-between px-3 py-6 z-40 shadow-sm
          transition-all duration-300 ease-in-out md:sticky md:top-0 md:h-screen min-h-screen shrink-0
          ${mobileOpen ? 'translate-x-0 w-60' : '-translate-x-full md:translate-x-0'}
          ${isCollapsed ? 'md:w-[72px]' : 'md:w-60'}
        `}
      >
        <div className="flex flex-col gap-6 overflow-y-auto pr-0.5 scrollbar-none">
          
          {/* Header Block Row */}
          <div className={`hidden md:flex items-center justify-between px-2.5 py-1.5 border-b border-slate-100 dark:border-white/5 pb-4 min-h-[44px] ${isCollapsed ? 'justify-center' : ''}`}>
            {!isCollapsed ? (
              <>
                <div className="flex items-center gap-2 select-none animate-in fade-in duration-150">
                  <img src={theme === 'dark' ? logoDark : logoLight} alt="Palindrome Logo" className="h-6 w-auto object-contain" />
                  <span className="text-[9px] font-sans font-bold tracking-wider px-1.5 py-0.5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-slate-500 dark:text-slate-400 rounded uppercase">
                    {currency}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 rounded-md transition-all duration-150 cursor-pointer outline-none select-none"
                  title="Collapse Sidebar"
                >
                  <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-1.5 text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 rounded-md transition-all duration-150 cursor-pointer outline-none select-none mx-auto"
                title="Expand Sidebar"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Interactive Route Links */}
          <nav className="flex flex-col gap-1 px-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.name}
                  onClick={() => { navigate(item.path); setMobileOpen(false); }}
                  className={`w-full flex items-center rounded-lg text-xs font-medium tracking-wide transition-all cursor-pointer group/link ${
                    isCollapsed ? 'justify-center p-2.5' : 'gap-3 px-3 py-2.5'
                  } ${
                    isActive 
                      ? 'bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 font-semibold' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5'
                  }`}
                  title={isCollapsed ? tUX(item.name) : ''}
                >
                  <Icon className={`w-4 h-4 shrink-0 transition-colors ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500 group-hover/link:text-slate-700 dark:group-hover/link:text-slate-300'}`} />
                  {!isCollapsed && (
                    <span className="animate-in fade-in duration-100 truncate">{tUX(item.name)}</span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer controls: User Profile Snippet & Settings */}
        <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 dark:border-white/5 px-1 font-sans">
          {!isCollapsed ? (
            <div className="flex items-center justify-between gap-2 px-1 animate-in fade-in duration-150">
              <div className="flex items-center gap-2.5 truncate">
                <div className="w-7 h-7 rounded-full bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-indigo-400 shrink-0 border border-slate-100 dark:border-white/5 overflow-hidden">
                  {profilePhoto ? (
                    <img src={profilePhoto} alt={userNameState} className="w-full h-full object-cover" />
                  ) : (
                    userNameState.charAt(0).toUpperCase()
                  )}
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-xs font-bold text-slate-850 dark:text-slate-200 truncate leading-none mb-0.5">{userNameState}</span>
                  <span className="text-[9px] font-sans text-slate-400 dark:text-slate-500 truncate leading-none">Signed In</span>
                </div>
              </div>
              
              <div className="flex items-center gap-0.5 shrink-0">
                <button 
                  onClick={toggleTheme}
                  className="p-1.5 text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 rounded-md transition-colors cursor-pointer"
                  title="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5" />}
                </button>
                <button 
                  onClick={handleLogout}
                  className="p-1.5 text-slate-400 hover:text-rose-600 dark:text-slate-500 dark:hover:text-rose-455 hover:bg-rose-50/50 dark:hover:bg-rose-950/20 rounded-md transition-colors cursor-pointer"
                  title="Sign Out"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2.5 items-center">
              <div 
                className="w-7 h-7 rounded-full bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-indigo-400 shrink-0 border border-slate-100 dark:border-white/5 cursor-pointer overflow-hidden" 
                title={userNameState}
                onClick={() => navigate('/dashboard/profile')}
              >
                {profilePhoto ? (
                  <img src={profilePhoto} alt={userNameState} className="w-full h-full object-cover" />
                ) : (
                  userNameState.charAt(0).toUpperCase()
                )}
              </div>
              <button 
                onClick={toggleTheme}
                className="p-1.5 text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 rounded-md transition-colors cursor-pointer"
                title="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5" />}
              </button>
              <button 
                onClick={handleLogout}
                className="p-1.5 text-slate-400 hover:text-rose-600 dark:text-slate-500 dark:hover:text-rose-455 hover:bg-rose-50/50 dark:hover:bg-rose-950/20 rounded-md transition-colors cursor-pointer"
                title="Sign Out"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main Container Viewport Component Insertion Stream */}
      <main className="flex-1 p-4 sm:p-6 md:p-10 max-w-[1600px] mx-auto w-full overflow-x-hidden relative z-10 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
}