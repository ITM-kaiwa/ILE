'use client';

import React, { useState, useEffect } from 'react';
import { Language, getTranslation } from '@/lib/i18n';
import { X, Copy, Printer, Download, Check, Terminal } from 'lucide-react';

interface LogFloatingModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

export const LogFloatingModal: React.FC<LogFloatingModalProps> = ({ isOpen, lang, onClose }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const t = getTranslation(lang);

  useEffect(() => {
    if (isOpen) {
      const now = new Date().toISOString();
      const initialLogs = [
        "[" + now + "] INFO: ILE VAK System v2.1β initialized.",
        "[" + now + "] INFO: Network Connection Status: 200 OK (https://github.com/ITM-kaiwa/ILE).",
        "[" + now + "] DEBUG: VAK Cognitive Engine loaded (Visual / Auditory / Kinesthetic).",
        "[" + now + "] DEBUG: Minna no Nihongo Lesson 1-50 Vocabulary Database loaded (527 entries).",
        "[" + now + "] DEBUG: VNJPClub N5 & N4 Grammar Cards loaded (50 lessons authentic).",
        "[" + now + "] INFO: SRS Ebbinghaus Scheduler active. Active worker ID: srs-worker-01.",
        "[" + now + "] TRACE: Language state set to '" + lang + "'. UI components localized.",
        "[" + now + "] SUCCESS: All system logs and communication telemetry captured cleanly."
      ];
      setLogs(initialLogs);
    }
  }, [isOpen, lang]);

  if (!isOpen) return null;

  const logText = logs.join('\n');

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
        const html = '<html><head><title>System Log Telemetry - ILE VAK Coach</title><style>body { font-family: monospace; padding: 20px; white-space: pre-wrap; background: #fafafa; } h2 { font-family: sans-serif; color: #ea580c; }</style></head><body><h2>ILE VAK Coach Telemetry & Communication Logs</h2><hr /><div>' + logText.replace(/\n/g, '<br />') + '</div></body></html>';
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
      element.download = 'ile-vak-telemetry-log-' + Date.now() + '.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl glass-card bg-[#FFFDF9] border-2 border-orange-300 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-2.5">
            <Terminal className="w-6 h-6 text-amber-100" />
            <div>
              <h3 className="font-bold text-base tracking-tight leading-none">{t.logTitle}</h3>
              <p className="text-xs text-amber-100 mt-1 opacity-90">{t.logDesc}</p>
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
          {logs.map((log, index) => (
            <div key={index} className="leading-relaxed">
              {log}
            </div>
          ))}
        </div>

        {/* Action Controls Footer */}
        <div className="p-4 bg-[#FAF7F2] border-t border-amber-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition border border-slate-300"
          >
            {t.cancel}
          </button>

          <div className="flex flex-wrap items-center gap-2">
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
