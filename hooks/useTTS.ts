import { useState, useRef, useCallback, useEffect } from 'react';

export type TTSState = 'idle' | 'playing-edge' | 'playing-fallback';

export function useTTS() {
  const [ttsState, setTtsState] = useState<TTSState>('idle');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const playTTS = useCallback(async (text: string) => {
    // Stop any existing playback
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    setTtsState('playing-edge');
    try {
      const res = await fetch('/api/py-tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, voice: 'ja-JP-NanamiNeural' })
      });
      
      if (!res.ok) throw new Error('EdgeTTS Failed');

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;

      audio.onended = () => {
        setTtsState('idle');
        URL.revokeObjectURL(url);
      };
      
      audio.onerror = () => {
        setTtsState('idle');
        URL.revokeObjectURL(url);
        fallbackTTS(text);
      };

      await audio.play();
    } catch (err) {
      console.warn("EdgeTTS failed, falling back to browser TTS", err);
      fallbackTTS(text);
    }
  }, []);

  const fallbackTTS = (text: string) => {
    if ('speechSynthesis' in window) {
      setTtsState('playing-fallback');
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.onend = () => setTtsState('idle');
      utterance.onerror = () => setTtsState('idle');
      window.speechSynthesis.speak(utterance);
    } else {
      alert('お使いのブラウザは音声読み上げに対応していません。');
      setTtsState('idle');
    }
  };

  const stopTTS = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setTtsState('idle');
  }, []);

  return { playTTS, stopTTS, ttsState };
}
