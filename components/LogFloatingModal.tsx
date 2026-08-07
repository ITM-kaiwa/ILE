'use client';

import React, { useState } from 'react';
import { useLog, LogCategory } from '@/providers/LogProvider';
import { Language, getTranslation } from '@/lib/i18n';
import { X, Copy, Printer, Download, Check, Terminal, Globe, Monitor } from 'lucide-react';
import { APP_VERSION } from '@/lib/config';

interface LogFloatingModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

export const LogFloatingModal: React.FC<LogFloatingModalProps> = ({ isOpen, lang, onClose }) => {
  const { logs } = useLog();
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<LogCategory>('FRONTEND');
  const t = getTranslation(lang);

  if (!isOpen) return null;

  const filteredLogs = logs.filter(l => l.category === viewMode);
  const logText = filteredLogs.map(l => l.text).join('\n');

  const handleCopy = () => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.clipboard) {
      window.navigator.clipboard.writeText(logText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        const titleMode = viewMode === 'FRONTEND' ? 'Frontend' : 'Network/Communication';
        const html = `<html><head><title>${titleMode} Log Telemetry - ILE VAK Coach ${APP_VERSION}</title><style>body { font-family: monospace; padding: 20px; white-space: pre-wrap; background: #fafafa; } h2 { font-family: sans-serif; color: #ea580c; }</style></head><body><h2>ILE VAK Coach ${titleMode} Logs</h2><hr /><div>` + logText.replace(/\n/g, '<br />') + '</div></body></html>';
        printWindow.document.write(html);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  const handleDownload = () => {
    if (typeof window !== 'undefined') {
      const element = document.createElement('a');
      const file = new Blob([logText], { type: 'text/plain;charset=utf-8' });
      element.href = URL.createObjectURL(file);
      element.download = `ile-vak-${viewMode.toLowerCase()}-log-${Date.now()}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  const isVi = lang === 'vi';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl glass-card bg-[#FFFDF9] border-2 border-orange-300 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-2.5">
            <Terminal className="w-6 h-6 text-amber-100" />
            <div>
              <h3 className="font-bold text-base tracking-tight leading-none">{t.logTitle} ({viewMode === 'FRONTEND' ? 'Frontend' : 'Network'})</h3>
              <p className="text-xs text-amber-100 mt-1 opacity-90">{t.logDesc} ({APP_VERSION})</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 transition text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Log Viewer Body */}
        <div className="p-5 flex-1 overflow-y-auto font-mono text-xs bg-[#1E293B] text-emerald-400 p-4 rounded-xl m-4 space-y-1 shadow-inner border border-slate-700">
          {filteredLogs.map((log) => (
            <div key={log.id} className="leading-relaxed">
              {log.text}
            </div>
          ))}
          {filteredLogs.length === 0 && (
            <div className="text-slate-500 italic">No logs for this category.</div>
          )}
        </div>

        {/* Action Controls Footer */}
        <div className="p-4 bg-[#FAF7F2] border-t border-amber-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode(viewMode === 'FRONTEND' ? 'NETWORK' : 'FRONTEND')}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition border border-blue-700 flex items-center gap-1.5"
            >
              {viewMode === 'FRONTEND' ? <Globe className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
              <span>{viewMode === 'FRONTEND' ? (isVi ? 'Xem Log Mạng' : '通信ログに切替') : (isVi ? 'Xem Log Frontend' : 'フロントエンドログに切替')}</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                const pwd = window.prompt("管理者パスワードを入力してください:");
                if (pwd) {
                  sessionStorage.setItem('admin_pwd', pwd);
                  window.location.href = '/admin';
                }
              }}
              className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition flex items-center space-x-1.5 shadow-sm mr-4"
            >
              <span>Admin</span>
            </button>

            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center space-x-1.5 shadow-sm"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? t.copied : t.copy}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition flex items-center space-x-1.5 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>{t.print}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center space-x-1.5 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>{t.download}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
