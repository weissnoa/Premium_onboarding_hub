

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { User } from "@/api/entities";
import { Sparkles, Book, Play, FormInput, Award } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await User.me();
        setUser(userData);
      } catch (error) {
        console.log("User not authenticated");
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      <style>{`
        :root {
          --primary-navy: #1e293b;
          --primary-blue: #3b82f6;
          --accent-gold: #f59e0b;
          --text-primary: #0f172a;
          --text-secondary: #64748b;
          --surface: rgba(255, 255, 255, 0.95);
          --surface-elevated: rgba(255, 255, 255, 0.98);
        }
        
        .glass-effect {
          background: var(--surface);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .luxury-gradient {
          background: linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-blue) 100%);
        }
        
        .accent-gradient {
          background: linear-gradient(135deg, var(--accent-gold) 0%, #f97316 100%);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-blue) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Navigation Header */}
      <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 luxury-gradient rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">Premium Platform</h1>
                <p className="text-sm text-slate-500">Your monetization journey starts here</p>
              </div>
            </div>
            
            {user && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {user.full_name?.charAt(0) || 'U'}
                  </span>
                </div>
                <span className="text-sm font-medium text-slate-700 hidden sm:block">
                  {user.full_name}
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="w-12 h-12 luxury-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Welcome to Your Platform Journey
            </h3>
            <p className="text-slate-600 max-w-md mx-auto">
              Take your time to explore each step. We're here to guide you every step of the way.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

