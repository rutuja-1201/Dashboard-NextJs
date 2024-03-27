import Image from "next/image";
// pages/index.tsx
import React from 'react';
import Sidebar from '../app/Components/Sidebar';
import Header from '../app/Components/Header';
import MainContent from '../app/Components/MainContent';

export default function Home() {
  return (
    <div className="flex flex-row ">
      <div><Sidebar /></div>
      <div className="flex flex-col w-full">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}


