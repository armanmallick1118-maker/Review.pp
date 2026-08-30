import React from 'react';
import { Sector } from '../types';
import { playHudClick } from '../utils/audio';

interface CompareViewProps {
  compareList: Sector[];
  onRemoveFromCompare: (sectorId: string) => void;
  onExploreClick: () => void;
}

export const CompareView: React.FC<CompareViewProps> = ({
  compareList,
  onRemoveFromCompare,
  onExploreClick
}) => {
  if (compareList.length === 0) {
    return (
      <div className="w-full h-[60vh] flex flex-col items-center justify-center text-center">
        <span className="material-symbols-outlined text-6xl text-white/20 mb-4">compare_arrows</span>
        <h2 className="font-space text-3xl font-black uppercase tracking-tighter text-white mb-2">
          Compare List Empty
        </h2>
        <p className="text-white/60 max-w-md mb-8">
          Add properties to your comparison list to see a side-by-side analysis of features, pros, and cons.
        </p>
        <button
          onClick={() => {
            playHudClick();
            onExploreClick();
          }}
          className="px-8 py-4 bg-[#CCFF00] text-black font-black uppercase tracking-tighter rounded-full hover:bg-white transition-colors cursor-pointer"
        >
          Browse Properties
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="font-space text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2">
          Property Comparison
        </h2>
        <p className="text-white/60">
          Side-by-side analysis of your selected properties.
        </p>
      </div>

      <div className="overflow-x-auto pb-8">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr>
              <th className="p-4 bg-[#0A0A0A] border-b border-white/20 text-left w-48 sticky left-0 z-20">
                <span className="text-[#CCFF00] font-mono text-xs font-bold uppercase tracking-widest">
                  Metrics
                </span>
              </th>
              {compareList.map((sector) => (
                <th key={sector.id} className="p-4 bg-[#111] border border-white/10 min-w-[300px] relative align-top">
                  <button
                    onClick={() => {
                      playHudClick();
                      onRemoveFromCompare(sector.id);
                    }}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 text-white/50 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors"
                    title="Remove from compare"
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                  <div className="h-32 rounded-xl overflow-hidden mb-4 mt-4">
                    <img src={sector.imgUrl} alt={sector.altText} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-space text-xl font-black uppercase tracking-tighter text-white">
                    {sector.name}
                  </h3>
                  <div className="text-xs text-white/50 mt-1">{sector.locationTag}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 bg-[#0A0A0A] border-b border-white/10 text-white/70 font-mono text-xs uppercase sticky left-0 z-10">
                Estimated Price
              </td>
              {compareList.map((sector) => (
                <td key={sector.id} className="p-4 border border-white/10 bg-[#0A0A0A]">
                  <div className="font-space text-lg font-bold text-[#CCFF00]">
                    {sector.estimatedPrice}
                  </div>
                  {sector.discountPercent ? (
                    <div className="inline-block mt-1 px-2 py-0.5 bg-[#FF0055] rounded text-[10px] font-black text-white uppercase">
                      {sector.discountPercent}% OFF
                    </div>
                  ) : null}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 bg-[#0A0A0A] border-b border-white/10 text-white/70 font-mono text-xs uppercase sticky left-0 z-10">
                Expert Rating
              </td>
              {compareList.map((sector) => (
                <td key={sector.id} className="p-4 border border-white/10 bg-[#0A0A0A]">
                  <div className="flex items-center gap-1 text-[#CCFF00]">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="font-bold">{sector.expertRating}/5</span>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 bg-[#0A0A0A] border-b border-white/10 text-white/70 font-mono text-xs uppercase sticky left-0 z-10">
                Road Connectivity
              </td>
              {compareList.map((sector) => (
                <td key={sector.id} className="p-4 border border-white/10 bg-[#0A0A0A] text-sm text-white/80">
                  {sector.roadCondition || 'N/A'}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 bg-[#0A0A0A] border-b border-white/10 text-white/70 font-mono text-xs uppercase sticky left-0 z-10">
                Nearby Station
              </td>
              {compareList.map((sector) => (
                <td key={sector.id} className="p-4 border border-white/10 bg-[#0A0A0A] text-sm text-white/80">
                  {sector.nearbyStation || 'N/A'}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 bg-[#0A0A0A] border-b border-white/10 text-white/70 font-mono text-xs uppercase sticky left-0 z-10">
                Nearby School
              </td>
              {compareList.map((sector) => (
                <td key={sector.id} className="p-4 border border-white/10 bg-[#0A0A0A] text-sm text-white/80">
                  {sector.nearbySchool || 'N/A'}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 bg-[#0A0A0A] border-b border-white/10 text-white/70 font-mono text-xs uppercase sticky left-0 z-10">
                Daily Needs
              </td>
              {compareList.map((sector) => (
                <td key={sector.id} className="p-4 border border-white/10 bg-[#0A0A0A] text-sm text-white/80">
                  {sector.nearbyDairy || 'N/A'}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 bg-[#0A0A0A] border-b border-white/10 text-white/70 font-mono text-xs uppercase sticky left-0 z-10">
                Pros
              </td>
              {compareList.map((sector) => (
                <td key={sector.id} className="p-4 border border-white/10 bg-[#0A0A0A]">
                  <ul className="space-y-2">
                    {sector.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                        <span className="material-symbols-outlined text-[#CCFF00] text-sm mt-0.5">check_circle</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 bg-[#0A0A0A] border-b border-white/10 text-white/70 font-mono text-xs uppercase sticky left-0 z-10">
                Cons
              </td>
              {compareList.map((sector) => (
                <td key={sector.id} className="p-4 border border-white/10 bg-[#0A0A0A]">
                  <ul className="space-y-2">
                    {sector.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                        <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">cancel</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 bg-[#0A0A0A] border-b border-white/10 text-white/70 font-mono text-xs uppercase sticky left-0 z-10">
                Expert Verdict
              </td>
              {compareList.map((sector) => (
                <td key={sector.id} className="p-4 border border-white/10 bg-[#111]">
                  <p className="text-sm text-white/70 leading-relaxed italic">
                    "{sector.expertVerdict}"
                  </p>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
