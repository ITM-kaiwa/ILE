'use client';
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { APP_VERSION } from '@/lib/config';

export type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG' | 'SUCCESS' | 'TRACE';
export type LogCategory = 'FRONTEND' | 'NETWORK';

export interface LogEntry {
  id: string;
  category: LogCategory;
  text: string;
}

interface LogContextType {
  logs: LogEntry[];
  addLog: (message: string, level?: LogLevel, category?: LogCategory) => void;
  clearLogs: () => void;
}

const LogContext = createContext<LogContextType | undefined>(undefined);

export const LogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  // Initialize with startup logs
  useEffect(() => {
    const now = new Date().toISOString();
    setLogs([
      { id: Date.now().toString() + '-1', category: 'FRONTEND', text: `[${now}] INFO: ILE VAK System ${APP_VERSION} initialized.` },
      { id: Date.now().toString() + '-2', category: 'NETWORK', text: `[${now}] INFO: Network Connection Status: 200 OK (https://github.com/ITM-kaiwa/ILE).` },
      { id: Date.now().toString() + '-3', category: 'FRONTEND', text: `[${now}] DEBUG: VAK Cognitive Engine loaded (Visual / Auditory / Kinesthetic).` },
      { id: Date.now().toString() + '-4', category: 'FRONTEND', text: `[${now}] INFO: Ready to accept VAK diagnostic queries. System standing by.` }
    ]);
  }, []);

  const addLog = useCallback((message: string, level: LogLevel = 'INFO', category: LogCategory = 'FRONTEND') => {
    const now = new Date().toISOString();
    const formatted = `[${now}] ${level}: ${message}`;
    setLogs(prev => [...prev, { id: Date.now().toString() + Math.random(), category, text: formatted }]);
  }, []);

  const clearLogs = useCallback(() => {
    setLogs([]);
  }, []);

  return (
    <LogContext.Provider value={{ logs, addLog, clearLogs }}>
      {children}
    </LogContext.Provider>
  );
};

export const useLog = () => {
  const context = useContext(LogContext);
  if (context === undefined) {
    throw new Error('useLog must be used within a LogProvider');
  }
  return context;
};
