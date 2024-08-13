import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="w-80 p-4 rounded-lg bg-gray-200 shadow-md flex justify-center items-center gap-10 space-y-4 animate-pulse">
      <div className="w-16 h-16 rounded-full bg-gray-300"></div>
      <div className="h-6 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    </div>
  );
};

export default SkeletonCard;
