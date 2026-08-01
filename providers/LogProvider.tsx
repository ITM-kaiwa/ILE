'use client';
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { APP_VERSION } from '@/lib/config';

export type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG' | 'SUCCESS' | 'TRACE';

interface LogContextType {
  logs: string[];
  addLog: (message: string, level?: LogLevel) => void;
  clearLogs: () => void;
}

const LogContext = createContext<LogContextType | undefined>(undefined);

export const LogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logs, setLogs] = useState<string[]>([]);

  // Initialize with startup logs
  useEffect(() => {
    const now = new Date().toISOString();
    setLogs([
      `[${now}] INFO: ILE VAK System ${APP_VERSION} initialized.`,
      `[${now}] INFO: Network Connection Status: 200 OK (https://github.com/ITM-kaiwa/ILE).`,
      `[${now}] DEBUG: VAK Cognitive Engine loaded (Visual / Auditory / Kinesthetic).`,
      `[${now}] INFO: Ready to accept VAK diagnostic queries. System standing by.`
    ]);
  }, []);

  const addLog = useCallback((message: string, level: LogLevel = 'INFO') => {
    const now = new Date().toISOString();
    const formatted = `[${now}] ${level}: ${message}`;
    setLogs(prev => [...prev, formatted]);
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
