import React from 'react';

interface SkeletonCardProps {
  count?: number;
}

// Single skeleton card component that mimics the shape of a news/event card
const SkeletonCard: React.FC = () => (
  <div className="flex flex-col max-w-[385px] w-full sm:w-[385px] h-[550px] rounded-3xl newscard-2 bg-[#200D46] animate-pulse">
    {/* Image placeholder */}
    <div className="m-0.5 rounded-t-3xl h-[200px] bg-gradient-to-r from-purple-900 to-purple-800 w-full" />
    
    <div className="p-8 flex flex-col h-[350px]">
      {/* Title placeholder */}
      <div className="h-[70px]">
        <div className="bg-gradient-to-r from-purple-800 to-purple-700 h-[24px] w-3/4 rounded mb-2"></div>
        <div className="bg-gradient-to-r from-purple-800 to-purple-700 h-[24px] w-1/2 rounded"></div>
      </div>
      
      {/* Date placeholder */}
      <div className="flex justify-between py-3">
        <div className="bg-gradient-to-r from-purple-800 to-purple-700 h-[20px] w-[100px] rounded"></div>
      </div>
      
      {/* Content placeholder */}
      <div className="flex-grow overflow-hidden h-[100px]">
        <div className="bg-gradient-to-r from-purple-800 to-purple-700 h-[16px] w-full rounded mb-2"></div>
        <div className="bg-gradient-to-r from-purple-800 to-purple-700 h-[16px] w-full rounded mb-2"></div>
        <div className="bg-gradient-to-r from-purple-800 to-purple-700 h-[16px] w-3/4 rounded mb-2"></div>
        <div className="bg-gradient-to-r from-purple-800 to-purple-700 h-[16px] w-1/2 rounded"></div>
      </div>
      
      {/* Button placeholder */}
      <div className="mt-auto">
        <div className="bg-gradient-to-r from-purple-800 to-purple-700 h-[40px] w-[120px] rounded-full"></div>
      </div>
    </div>
  </div>
);

// Grid of skeleton cards
const SkeletonLoader: React.FC<SkeletonCardProps> = ({ count = 6 }) => {
  // Create an array with 'count' number of elements
  const skeletonCards = Array.from({ length: count }, (_, i) => i);
  
  // Calculate rows similar to the NewsCardList component
  const rowsNeeded = Math.ceil(count / 3);
  const rows = [];
  
  for (let i = 0; i < rowsNeeded; i++) {
    const startIndex = i * 3;
    const rowCards = skeletonCards.slice(startIndex, startIndex + 3);
    rows.push(rowCards);
  }
  
  return (
    <div className="max-w-[1264px] mx-auto px-6 py-8 md:pt-12">
      {rows.map((row, rowIndex) => (
        <div 
          key={`skeleton-row-${rowIndex}`} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center py-8 md:py-12"
        >
          {row.map((_, index) => (
            <SkeletonCard key={`skeleton-card-${rowIndex}-${index}`} />
          ))}
        </div>
      ))}
      
      {/* Skeleton pagination */}
      <div className="flex justify-center items-center gap-8 md:gap-14 my-8">
        <div className="flex items-center gap-5">
          <div className="flex items-center justify-between gap-6 border border-[#3E3355] rounded-[80px] px-6 py-3">
            <div className="bg-gradient-to-r from-purple-800 to-purple-700 h-[24px] w-[120px] rounded"></div>
          </div>
        </div>
      </div>
      
      {/* Skeleton "Submit News" button */}
      <div className="flex justify-center items-center gap-5 mt-8">
        <div className="bg-gradient-to-r from-purple-800 to-purple-700 h-[46px] w-[120px] rounded-full"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
