import React, { useState } from 'react';
import { playHudClick } from '../../utils/audio';
import { Sector } from '../../types';

interface AiAssistantDrawerProps {
  onClose: () => void;
  sectorContext?: string;
  compareContext?: Sector[];
}

interface Message {
  sender: 'user' | 'nova';
  text: string;
}

export const AiAssistantDrawer: React.FC<AiAssistantDrawerProps> = ({
  onClose,
  sectorContext,
  compareContext = [],
}) => {
  const compareNames = compareContext.map(s => s.name).join(', ');

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'nova',
      text: compareContext.length > 0
        ? `Hello! I see you're comparing ${compareNames}. I can give you an objective analysis — which property should I focus on first?`
        : `Hello! I'm NOVA, your AI Real Estate Research Assistant. I provide unbiased property insights, connectivity info, and investment analysis. What would you like to know?`,
    },
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async (textToSend?: string) => {
    const prompt = textToSend || inputValue;
    if (!prompt.trim() || loading) return;

    playHudClick();
    const newMessages: Message[] = [...messages, { sender: 'user', text: prompt }];
    setMessages(newMessages);
    if (!textToSend) setInputValue('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/neural-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, sectorContext, compareContext: compareNames }),
      });
      const data = await res.json();
      setMessages([
        ...newMessages,
        {
          sender: 'nova',
          text: data.reply || 'Analysis complete. Please ask your next question.',
        },
      ]);
    } catch (e) {
      setMessages([
        ...newMessages,
        {
          sender: 'nova',
          text: 'Connection issue. Please check your internet and try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const quickChips = compareContext.length > 0
    ? [
        `Which of ${compareContext[0]?.name || 'these'} is better value?`,
        'Compare road connectivity',
        'Which has better rental yield?',
      ]
    : [
        'Is Lonavala a good investment?',
        'Which city has best resale value?',
        'Pros/cons of Goa beachfront property?',
      ];

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[440px] bg-[#050505] border-l border-white/20 shadow-[-10px_0_50px_rgba(0,0,0,0.9)] flex flex-col justify-between animate-slideLeft">
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-[#0A0A0A] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#CCFF00] text-xl">auto_awesome</span>
          <div>
            <h3 className="font-space text-base font-black uppercase tracking-tighter text-white">NOVA AI Assistant</h3>
            <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest">Unbiased Real Estate Insights</p>
          </div>
        </div>
        <button
          onClick={() => {
            playHudClick();
            onClose();
          }}
          className="text-white/60 hover:text-[#CCFF00] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
      </div>

      {/* Messages */}
      <div className="p-4 flex-grow overflow-y-auto space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${
              msg.sender === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div
              className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-[#CCFF00] text-black font-bold rounded-br-none'
                  : 'bg-[#111] text-white border border-white/10 rounded-bl-none font-light'
              }`}
            >
              {msg.text}
            </div>
            <span className="font-mono text-[9px] text-white/40 mt-1 px-1 font-bold uppercase tracking-widest">
              {msg.sender === 'user' ? 'YOU' : 'NOVA AI'}
            </span>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-[#CCFF00] font-mono text-xs p-2 uppercase font-bold tracking-widest">
            <span className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-ping" />
            Analyzing property data...
          </div>
        )}
      </div>

      {/* Quick Prompt Chips */}
      <div className="p-3 bg-[#0A0A0A] border-t border-white/10 flex gap-2 overflow-x-auto">
        {quickChips.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => sendMessage(chip)}
            className="px-3 py-1.5 rounded-full bg-[#111] text-[#CCFF00] font-mono text-[10px] uppercase font-bold whitespace-nowrap hover:bg-[#CCFF00] hover:text-black border border-white/10 transition-colors flex-shrink-0"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-[#0A0A0A] border-t border-white/10 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask about any property or location..."
          className="flex-grow h-11 rounded-full px-4 text-xs text-white bg-[#111] border border-white/20 focus:border-[#CCFF00] outline-none"
        />
        <button
          onClick={() => sendMessage()}
          className="px-5 py-2.5 bg-[#CCFF00] text-black font-space font-black text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all cursor-pointer"
        >
          Ask
        </button>
      </div>
    </div>
  );
};
