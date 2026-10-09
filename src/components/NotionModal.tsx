import React, { useState } from 'react';
import { X, BookOpen, CheckCircle2, Copy, ExternalLink, ShieldCheck, Database, ArrowRight } from 'lucide-react';
import { NotionSyncConfig } from '../types';

interface NotionModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: NotionSyncConfig;
  onSaveConfig: (updated: NotionSyncConfig) => void;
  onSimulateSync: () => void;
}

export const NotionModal: React.FC<NotionModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  onSimulateSync
}) => {
  const [databaseId, setDatabaseId] = useState(config.databaseId);
  const [apiKeyDraft, setApiKeyDraft] = useState(config.apiKeyDraft);
  const [isCopied, setIsCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig({
      ...config,
      databaseId,
      apiKeyDraft,
      status: 'ready_to_connect'
    });
    setStatusMessage('Configuration saved! Schema mapping is locked and prepared.');
    setTimeout(() => setStatusMessage(null), 3000);
  };

  const handleRunSync = () => {
    onSimulateSync();
    setStatusMessage('Connected to Notion recipe workspace! 14 dishes imported into the diner roster.');
    setTimeout(() => setStatusMessage(null), 3500);
  };

  const copySchemaJson = () => {
    const schema = {
      database_name: "El Gordo & El Flaco Recipe Book",
      properties: {
        "Name": { "type": "title" },
        "Meal Type": { "type": "select", "options": ["Lunch", "Dinner"] },
        "Servings": { "type": "number", "default": 2 },
        "Prep Time (min)": { "type": "number" },
        "Cook Time (min)": { "type": "number" },
        "Tags": { "type": "multi_select" },
        "Ingredients": { "type": "rich_text" },
        "El Gordo Portion": { "type": "rich_text" },
        "El Flaco Portion": { "type": "rich_text" },
        "Notes": { "type": "rich_text" }
      }
    };
    navigator.clipboard.writeText(JSON.stringify(schema, null, 2));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border-4 border-zinc-900 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 bg-zinc-950 text-amber-50 flex items-center justify-between border-b-2 border-emerald-500">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
              N
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-wider font-['Oswald'] text-white">
                Notion Integration Prep Hub
              </h3>
              <p className="text-xs text-zinc-400">
                Setup database schema & pipeline ahead of Notion API connection.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {statusMessage && (
            <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Explanation */}
          <div className="bg-amber-50/70 border border-amber-300 rounded-lg p-4 space-y-2 text-xs text-amber-950">
            <span className="font-bold text-sm uppercase font-['Oswald'] block text-amber-900">
              ⚡ How Notion Will Power Your Meal Plans:
            </span>
            <p className="leading-relaxed">
              When you connect your Notion database, "El Gordo Y El Flaco" will directly pull your saved 
              recipe catalog, filter by meal type (Lunch vs. Dinner for 2 people), cross-reference with 
              your expiring ingredients, and populate your Monday-to-Sunday planner automatically.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 font-['Oswald'] mb-1">
                Notion Database ID
              </label>
              <input
                type="text"
                value={databaseId}
                onChange={(e) => setDatabaseId(e.target.value)}
                placeholder="e.g. 84e12c9b4f7a2139e8a93..."
                className="w-full px-3 py-2 text-xs font-mono bg-zinc-50 border border-zinc-300 rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <span className="text-[11px] text-zinc-500 mt-1 block">
                Found in your Notion database URL: notion.so/workspace/{'{database_id}'}?v=...
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 font-['Oswald'] mb-1">
                Internal Integration Token (secret_...)
              </label>
              <input
                type="password"
                value={apiKeyDraft}
                onChange={(e) => setApiKeyDraft(e.target.value)}
                placeholder="secret_xxxxxxxxxxxxxxxxxxxxxxxxxx"
                className="w-full px-3 py-2 text-xs font-mono bg-zinc-50 border border-zinc-300 rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <span className="text-[11px] text-zinc-500 mt-1 block">
                Stored safely in browser storage for instant queries once your token is generated.
              </span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={copySchemaJson}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded transition-colors font-mono cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{isCopied ? 'Schema Copied!' : 'Copy Notion DB Schema JSON'}</span>
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider rounded font-['Oswald'] cursor-pointer"
              >
                Save Notion Config
              </button>
            </div>
          </form>

          {/* Database Field Mapping Preview */}
          <div className="border border-zinc-200 rounded-lg overflow-hidden">
            <div className="bg-zinc-100 px-4 py-2 text-xs font-bold uppercase tracking-wider font-['Oswald'] text-zinc-700 border-b border-zinc-200 flex items-center justify-between">
              <span>Expected Notion Database Schema</span>
              <span className="font-mono text-[10px] text-emerald-700 font-semibold">Ready for 2-Person Plans</span>
            </div>
            <div className="divide-y divide-zinc-200 text-xs">
              <div className="p-2.5 flex items-center justify-between bg-white">
                <span className="font-mono font-bold text-zinc-800">Dish Name</span>
                <span className="text-zinc-500">Title Property (e.g. "Retro Smash Burger")</span>
              </div>
              <div className="p-2.5 flex items-center justify-between bg-zinc-50/50">
                <span className="font-mono font-bold text-zinc-800">Meal Type</span>
                <span className="text-zinc-500">Select: ["Lunch", "Dinner"]</span>
              </div>
              <div className="p-2.5 flex items-center justify-between bg-white">
                <span className="font-mono font-bold text-zinc-800">Servings</span>
                <span className="text-zinc-500">Number: Default 2 (Gordo & Flaco)</span>
              </div>
              <div className="p-2.5 flex items-center justify-between bg-zinc-50/50">
                <span className="font-mono font-bold text-zinc-800">Ingredients</span>
                <span className="text-zinc-500">Multi-select or Rich text</span>
              </div>
              <div className="p-2.5 flex items-center justify-between bg-white">
                <span className="font-mono font-bold text-zinc-800">Gordo Portion Note</span>
                <span className="text-zinc-500">Text: Extra protein/carbs specification</span>
              </div>
              <div className="p-2.5 flex items-center justify-between bg-zinc-50/50">
                <span className="font-mono font-bold text-zinc-800">Flaco Portion Note</span>
                <span className="text-zinc-500">Text: Lean/greens specification</span>
              </div>
            </div>
          </div>

          {/* Simulation & Testing Action */}
          <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-bold text-xs uppercase font-['Oswald'] text-emerald-950 block">
                Test Notion Pipeline Simulator:
              </span>
              <p className="text-xs text-emerald-900 mt-0.5">
                Simulate syncing with a Notion database to verify meals and expiring ingredient alignment.
              </p>
            </div>
            <button
              onClick={handleRunSync}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded font-['Oswald'] shrink-0 transition-colors shadow-sm cursor-pointer"
            >
              Run Mock Notion Sync
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
