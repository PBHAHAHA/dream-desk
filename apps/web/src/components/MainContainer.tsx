'use client';

import React from 'react';

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto h-full md:px-20 lg:px-40">{children}</div>
  );
};

export default MainContainer;
