import React from "react";

const RightGlowEffect = () => {
  return (
    <div className="absolute inset-0 blur-3xl z-0">
      <div className="absolute w-32 h-32 bg-primary/40 rounded-full opacity-100 animate-pulse top-1 right-1" />
    </div>
  );
};

export default RightGlowEffect;
