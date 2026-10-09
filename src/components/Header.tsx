import React from 'react';
import { Download, ShoppingBag, Sparkles, BookOpen, Clock } from 'lucide-react';

interface HeaderProps {
  onOpenExport: () => void;
  onOpenPantry: () => void;
  onOpenNotion: () => void;
  onOpenGrocery: () => void;
  expiringCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenExport,
  onOpenPantry,
  onOpenNotion,
  onOpenGrocery,
  expiringCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-zinc-950 text-amber-50 border-b-2 border-red-600 shadow-md">
      {/* 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="group flex items-center gap-3 text-xl font-black tracking-wider uppercase font-['Oswald'] text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded bg-red-600 text-amber-300 flex items-center justify-center font-black text-sm shadow border border-amber-400/50">
            80s
          </div>
          <span>EL GORDO Y EL FLACO</span>
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide uppercase font-['Oswald'] text-zinc-300">
          <button 
            onClick={onOpenGrocery}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span>2-Person Grocery List</span>
          </button>
          
          <button 
            onClick={onOpenPantry}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            <Clock className="w-4 h-4 text-red-500" />
            <span>Expiring Pantry ({expiringCount})</span>
          </button>

          <button 
            onClick={onOpenNotion}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Notion Sync Prep</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenExport}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-500 active:scale-95 text-amber-100 rounded border-2 border-amber-400 shadow-sm transition-all whitespace-nowrap shrink-0 font-['Oswald'] cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Meal Plan</span>
          </button>
        </div>
      </div>
    </header>
  );
};
