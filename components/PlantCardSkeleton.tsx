import React from 'react';

const PlantCardSkeleton: React.FC = () => (
  <div className="flex flex-col h-full animate-pulse" aria-hidden="true">
    <div className="aspect-[3/4] bg-white/5 rounded-sm mb-6 w-full relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
    </div>
    <div className="flex justify-between mb-2">
       <div className="h-3 w-16 bg-white/10 rounded-sm"></div>
       <div className="h-3 w-12 bg-white/10 rounded-sm"></div>
    </div>
    <div className="h-8 w-3/4 bg-white/10 rounded-sm mb-2"></div>
    <div className="h-3 w-1/2 bg-white/5 rounded-sm mb-6"></div>
    <div className="h-px w-8 bg-white/10 mb-4"></div>
    <div className="space-y-2">
       <div className="h-2 w-full bg-white/5 rounded-sm"></div>
       <div className="h-2 w-5/6 bg-white/5 rounded-sm"></div>
    </div>
  </div>
);

export default PlantCardSkeleton;