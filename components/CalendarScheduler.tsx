'use client';

import { useLog } from '@/providers/LogProvider';
import React, { useState, useEffect, useRef } from 'react';
import { VakType } from '@/data/vak-questions';
import { Language, getTranslation } from '@/lib/i18n';
import { Calendar, Clock, Sparkles, CheckCircle2, Download , ChevronDown, ChevronUp, Send, Bot, User, Settings2 } from 'lucide-react';

interface CalendarSchedulerProps {
  vakType: VakType;
  lang?: Language;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ScheduleEvent {
  date: string;
  startTime: string;
  endTime: string;
  title: string;
  description?: string;
}

export const CalendarScheduler: React.FC<CalendarSchedulerProps> = ({ vakType, lang = 'ja' }) => {
  const { addLog } = useLog();

  const t = getTranslation(lang);
  const [isExpanded, setIsExpanded] = useState(false);
  const isVi = lang === 'vi';

  const [goal, setGoal] = useState(isVi ? 'Thi đỗ JLPT N5 sau 1 tháng' : '1ヶ月後のJLPT N5合格');
  const [options, setOptions] = useState({
    days: 'weekdays', // 'weekdays' | 'all'
    duration: 'week', // 'day' | 'week' | 'month'
    timeSlots: [] as string[]
  });
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);

  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [schedule, setSchedule] = useState<ScheduleEvent[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isExported, setIsExported] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  useEffect(() => {
    // Auto-start the conversation when first expanded
    if (isExpanded && !hasStarted && chatHistory.length === 0) {
      setHasStarted(true);
      generateSchedule();
    }
  }, [isExpanded, hasStarted]);

  const generateSchedule = async (userMsg?: string) => {
    setIsGenerating(true); addLog('Generating AI learning schedule...', 'INFO'); addLog('Generating AI learning schedule...', 'INFO');
    
    // Optimistically add user message to chat
    let newHistory = [...chatHistory];
    if (userMsg) {
      newHistory.push({ role: 'user', content: userMsg });
      setChatHistory(newHistory);
      setInputMessage('');
    }

    try {
      const response = await fetch('/api/gemini/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          goal,
          vakType,
          chatHistory: newHistory,
          options,
          lang,
          userMessage: userMsg
        })
      });

      const data = await response.json();
      if (data.success) {
        setChatHistory([...newHistory, { role: 'assistant', content: data.reply }]);
        if (data.schedule && data.schedule.length > 0) {
          setSchedule(data.schedule); addLog('AI learning schedule generated successfully.', 'SUCCESS'); addLog('AI learning schedule generated successfully.', 'SUCCESS');
        }
      } else {
        setChatHistory([...newHistory, { role: 'assistant', content: isVi ? 'Xin lỗi, đã xảy ra lỗi khi tạo lịch học.' : 'スケジュールの生成中にエラーが発生しました。' }]);
      }
    } catch (e) {
      console.error(e);
      setChatHistory([...newHistory, { role: 'assistant', content: isVi ? 'Xin lỗi, đã xảy ra lỗi kết nối.' : '通信エラーが発生しました。' }]);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleExportICS = () => {
    if (schedule.length === 0) return;

    let icsContent = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//ILE VAK Study//NONSGML v1.0//EN\n";
    
    schedule.forEach(event => {
      // Parse dates safely. Assuming YYYY-MM-DD and HH:mm
      const [year, month, day] = event.date.split('-');
      const [startH, startM] = event.startTime.split(':');
      const [endH, endM] = event.endTime.split(':');
      
      const dtStart = `${year}${month}${day}T${startH}${startM}00Z`;
      const dtEnd = `${year}${month}${day}T${endH}${endM}00Z`;
      
      icsContent += "BEGIN:VEVENT\n";
      icsContent += `DTSTART:${dtStart}\n`;
      icsContent += `DTEND:${dtEnd}\n`;
      icsContent += `SUMMARY:[VAK] ${event.title}\n`;
      if (event.description) {
        icsContent += `DESCRIPTION:${event.description}\n`;
      }
      icsContent += "END:VEVENT\n";
    });
    
    icsContent += "END:VCALENDAR";

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'ile_study_schedule.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsExported(true);
  };

  return (
    <div className="glass-card p-6 border border-amber-200/80 bg-[#FFFDF9] rounded-2xl shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-amber-200/60">
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-bold text-slate-800">{t.calendarTitle}</h2>
        </div>
        <div className="flex items-center space-x-3">
          
          <button
            onClick={() => { setIsExpanded(!isExpanded); addLog(`Toggle CalendarScheduler expanded: ${!isExpanded}`, 'INFO'); }}
            className="px-3 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-bold transition flex items-center space-x-1 border border-stone-300/60 shadow-sm"
          >
            <span>{isExpanded ? (isVi ? 'Đóng' : '閉') : (isVi ? 'Mở' : '開')}</span>
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            {t.goalLabel}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-amber-300 text-slate-900 text-sm font-semibold focus:outline-none focus:border-orange-500 transition shadow-inner"
              placeholder={t.goalPlaceholder}
            />
          </div>
        </div>

        {isExpanded && (
        <div className="space-y-6 pt-2">
          {/* Options */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 mb-2 text-slate-800 font-bold text-sm">
              <Settings2 className="w-4 h-4 text-orange-600" />
              <span>{isVi ? 'Tùy chọn lịch học' : 'スケジュール設定'}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">{isVi ? 'Ngày học' : '学習日'}</label>
                <select 
                  value={options.days} 
                  onChange={(e) => setOptions({...options, days: e.target.value})}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-slate-200 text-sm focus:outline-none focus:border-orange-500 text-slate-700"
                >
                  <option value="weekdays">{isVi ? 'Chỉ ngày thường' : '平日のみ'}</option>
                  <option value="all">{isVi ? 'Bao gồm ngày nghỉ' : '休日含む'}</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">{isVi ? 'Thời lượng' : '期間'}</label>
                <div className="flex space-x-3">
                  <label className="flex items-center space-x-2 text-sm cursor-pointer">
                    <input type="radio" checked={options.duration === 'day'} onChange={() => setOptions({...options, duration: 'day'})} className="accent-orange-600" />
                    <span>{isVi ? '1 Ngày' : '1日'}</span>
                  </label>
                  <label className="flex items-center space-x-2 text-sm cursor-pointer">
                    <input type="radio" checked={options.duration === 'week'} onChange={() => setOptions({...options, duration: 'week'})} className="accent-orange-600" />
                    <span>{isVi ? '1 Tuần' : '1週間'}</span>
                  </label>
                  <label className="flex items-center space-x-2 text-sm cursor-pointer">
                    <input type="radio" checked={options.duration === 'month'} onChange={() => setOptions({...options, duration: 'month'})} className="accent-orange-600" />
                    <span>{isVi ? '1 Tháng' : '1ヶ月'}</span>
                  </label>
                </div>
              </div>

              <div className="md:col-span-2 relative">
                <label className="block text-xs font-semibold text-slate-600 mb-2">{isVi ? 'Khung giờ' : '時間帯 (複数選択可)'}</label>
                <div 
                  className="w-full px-3 py-2 rounded-lg bg-[#FAF7F2] border border-slate-200 text-sm cursor-pointer flex justify-between items-center"
                  onClick={() => setTimeDropdownOpen(!timeDropdownOpen)}
                >
                  <span className="text-slate-700">
                    {options.timeSlots.length === 0 
                      ? (isVi ? 'Chọn khung giờ...' : '時間帯を選択...') 
                      : options.timeSlots.map(s => {
                          const opt = [
                            { val: '06:00-08:00', label: '午前6時～8時' },
                            { val: '08:00-10:00', label: '午前8時～10時' },
                            { val: '10:00-12:00', label: '午前10時～12時' },
                            { val: '12:00-14:00', label: '午後12時～14時' },
                            { val: '14:00-16:00', label: '午後14時～16時' },
                            { val: '16:00-18:00', label: '午後16時～18時' },
                            { val: '18:00-20:00', label: '午後18時～20時' },
                            { val: '20:00-22:00', label: '午後20時～22時' },
                            { val: '22:00-24:00', label: '午後22時～24時' },
                          ].find(x => x.val === s);
                          return isVi ? s : (opt ? opt.label : s);
                      }).join(', ')}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition ${timeDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                {timeDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                    {[
                      { val: '06:00-08:00', label: '午前6時～8時' },
                      { val: '08:00-10:00', label: '午前8時～10時' },
                      { val: '10:00-12:00', label: '午前10時～12時' },
                      { val: '12:00-14:00', label: '午後12時～14時' },
                      { val: '14:00-16:00', label: '午後14時～16時' },
                      { val: '16:00-18:00', label: '午後16時～18時' },
                      { val: '18:00-20:00', label: '午後18時～20時' },
                      { val: '20:00-22:00', label: '午後20時～22時' },
                      { val: '22:00-24:00', label: '午後22時～24時' },
                    ].map(slot => (
                      <label key={slot.val} className="flex items-center space-x-2 px-3 py-2 hover:bg-orange-50 cursor-pointer text-sm text-slate-700">
                        <input 
                          type="checkbox" 
                          className="accent-orange-600 rounded border-slate-300"
                          checked={options.timeSlots.includes(slot.val)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setOptions({...options, timeSlots: [...options.timeSlots, slot.val]});
                            } else {
                              setOptions({...options, timeSlots: options.timeSlots.filter(s => s !== slot.val)});
                            }
                          }}
                        />
                        <span>{isVi ? slot.val : slot.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="flex flex-col h-[300px] border border-amber-200 rounded-xl bg-white overflow-hidden shadow-sm">
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAF7F2]">
              {chatHistory.length === 0 && isGenerating && (
                <div className="flex items-center justify-center h-full text-slate-500 text-sm space-x-2">
                  <Sparkles className="w-4 h-4 animate-spin text-orange-500" />
                  <span>{isVi ? 'AI đang tạo lịch trình...' : 'AIがスケジュールを作成中...'}</span>
                </div>
              )}
              {chatHistory.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[85%] space-x-2 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-stone-100 border border-stone-200">
                      {msg.role === 'user' ? <User className="w-4 h-4 text-stone-600" /> : <Bot className="w-4 h-4 text-indigo-600" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                      msg.role === 'user' 
                        ? 'bg-orange-600 text-white rounded-tr-none' 
                        : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              {chatHistory.length > 0 && isGenerating && (
                <div className="flex justify-start">
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-stone-100 border border-stone-200">
                      <Bot className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div className="p-3 rounded-2xl bg-white border border-slate-200 rounded-tl-none flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            
            <div className="p-3 bg-white border-t border-slate-200 flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !isGenerating && inputMessage.trim() && generateSchedule(inputMessage)}
                placeholder={isVi ? 'Viết điều kiện ở đây: vd ngày thường 18:00 - 20:00' : 'ここに作りたい予定の条件を書いてください：平日18時から20時など。'}
                className="flex-1 px-4 py-2 rounded-xl bg-[#FAF7F2] border border-slate-200 text-sm focus:outline-none focus:border-orange-500 transition"
                disabled={isGenerating}
              />
              <button
                onClick={() => generateSchedule(inputMessage)}
                disabled={isGenerating || !inputMessage.trim()}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white transition flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Schedule Preview */}
          {schedule.length > 0 && (
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-amber-200 space-y-3 shadow-inner max-h-[400px] overflow-y-auto">
              <div className="flex items-center justify-between pb-2 border-b border-amber-200">
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                  {isVi ? 'Lịch trình được tạo' : '生成されたスケジュール'}
                </h4>
                <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-md">
                  {schedule.length} {isVi ? 'Mục' : '件'}
                </span>
              </div>

              <div className="space-y-2">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-[#FFFDF9] border border-amber-200 hover:border-orange-300 transition shadow-sm space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-1 rounded">{item.date}</span>
                        <span className="text-sm font-bold text-slate-800">{item.title}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-500 shrink-0">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.startTime} - {item.endTime}</span>
                      </div>
                    </div>
                    {item.description && (
                      <p className="text-xs text-slate-600 pl-[4.5rem] mt-1">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Export Button */}
              <button
                onClick={handleExportICS}
                className="w-full mt-4 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm transition shadow-sm flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>{isVi ? 'Tải xuống Lịch (.ics)' : 'カレンダーにエクスポート (.ics)'}</span>
              </button>

              {isExported && (
                <p className="text-center text-xs font-bold text-emerald-700 flex items-center justify-center space-x-1 mt-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isVi ? 'Đã tải xuống file .ics' : '.icsファイルをダウンロードしました'}</span>
                </p>
              )}
            </div>
          )}
        </div>
        )}
      </div>
    </div>
  );
};
