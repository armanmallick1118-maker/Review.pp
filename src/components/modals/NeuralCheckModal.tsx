import React, { useState } from 'react';
import { playHudClick, playNeuralScanBeep } from '../../utils/audio';

interface NeuralCheckModalProps {
  onClose: () => void;
  onProceedToBooking: () => void;
}

export const NeuralCheckModal: React.FC<NeuralCheckModalProps> = ({
  onClose,
  onProceedToBooking,
}) => {
  const [thetaFreq, setThetaFreq] = useState<number>(6.5);
  const [coherence, setCoherence] = useState<number>(94);
  const [o2Tolerance, setO2Tolerance] = useState<number>(98);

  const [scanning, setScanning] = useState<boolean>(false);
  const [scanResult, setScanResult] = useState<string | null>(null);

  const handleRunScan = () => {
    playHudClick();
    setScanning(true);
    setScanResult(null);

    setTimeout(() => {
      playNeuralScanBeep();
      setScanning(false);
      setScanResult('99.4% NEURAL RESONANCE COMPATIBLE. OPTIMAL FOR ALL ACTIVE BIOSPHERES.');
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#050505] border border-white/20 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(204,255,0,0.15)] p-6 md:p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#CCFF00] text-2xl">sensors</span>
            <h3 className="font-space text-2xl font-black uppercase tracking-tighter text-white">
              Neural Signal Calibration
            </h3>
          </div>
          <button
            onClick={() => {
              playHudClick();
              onClose();
            }}
            className="text-white/60 hover:text-[#CCFF00] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Sliders Form */}
        <div className="space-y-6 mb-8">
          <div>
            <div className="flex justify-between font-mono text-xs mb-2">
              <span className="text-white/60 font-bold uppercase tracking-widest">THETA WAVE FREQUENCY</span>
              <span className="text-[#CCFF00] font-black">{thetaFreq} Hz</span>
            </div>
            <input
              type="range"
              min="4.0"
              max="12.0"
              step="0.1"
              value={thetaFreq}
              onChange={(e) => setThetaFreq(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#CCFF00]"
            />
          </div>

          <div>
            <div className="flex justify-between font-mono text-xs mb-2">
              <span className="text-white/60 font-bold uppercase tracking-widest">BIO-RHYTHM COHERENCE</span>
              <span className="text-[#CCFF00] font-black">{coherence}%</span>
            </div>
            <input
              type="range"
              min="50"
              max="100"
              value={coherence}
              onChange={(e) => setCoherence(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#CCFF00]"
            />
          </div>

          <div>
            <div className="flex justify-between font-mono text-xs mb-2">
              <span className="text-white/60 font-bold uppercase tracking-widest">OXYGEN TOLERANCE</span>
              <span className="text-[#CCFF00] font-black">{o2Tolerance}%</span>
            </div>
            <input
              type="range"
              min="80"
              max="100"
              value={o2Tolerance}
              onChange={(e) => setO2Tolerance(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#CCFF00]"
            />
          </div>

          {/* Diagnostic Box */}
          <div className="p-4 rounded-2xl bg-[#111] border border-white/10 text-center font-mono text-xs min-h-[72px] flex items-center justify-center">
            {scanning ? (
              <div className="flex items-center gap-3 text-[#CCFF00]">
                <span className="w-3 h-3 rounded-full bg-[#CCFF00] animate-ping" />
                <span className="font-bold uppercase tracking-widest">Calibrating Neural Synapses...</span>
              </div>
            ) : scanResult ? (
              <div className="text-[#CCFF00] font-black tracking-wide uppercase">{scanResult}</div>
            ) : (
              <span className="text-white/50">
                Adjust parameters above and click "Run Diagnostic Scan" to test link compatibility.
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleRunScan}
            disabled={scanning}
            className="flex-1 py-3.5 bg-black border border-[#CCFF00] text-[#CCFF00] font-mono text-xs uppercase font-bold rounded-full hover:bg-[#CCFF00] hover:text-black transition-all cursor-pointer"
          >
            {scanning ? 'Scanning...' : 'Run Diagnostic Scan'}
          </button>

          <button
            onClick={() => {
              playHudClick();
              onClose();
              onProceedToBooking();
            }}
            className="flex-1 py-3.5 bg-[#CCFF00] text-black font-space font-black text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] cursor-pointer"
          >
            Proceed to Booking
          </button>
        </div>
      </div>
    </div>
  );
};
