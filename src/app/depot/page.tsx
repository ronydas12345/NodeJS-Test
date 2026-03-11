'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DepotPage() {
  const [itemCount] = useState(50);
  
  // Generate grid items
  const gridItems = Array.from({ length: itemCount }, (_, i) => i);

  return (
    <div className="w-[1440px] h-[1024px] relative overflow-hidden bg-black">
      {/* Header Bar */}
      <div className="w-[1440px] h-28 px-5 py-5 left-0 top-0 absolute bg-black inline-flex justify-start items-center gap-24">
        <div className="flex justify-start items-center gap-2.5">
          <div className="justify-start text-white text-3xl font-normal font-['Instrument_Sans']">
            High Score
          </div>
          <div className="w-36 h-16 bg-slate-800" />
        </div>
        <div className="flex justify-start items-center gap-2.5">
          <div className="flex justify-start items-center gap-3.5">
            <div className="justify-start text-white text-3xl font-normal font-['Instrument_Sans']">
              Depleted Fuel
            </div>
            <div className="w-36 h-16 bg-slate-800" />
          </div>
        </div>
        <div className="flex justify-start items-center gap-2.5">
          <div className="justify-start text-white text-3xl font-normal font-['Instrument_Sans']">
            Industrial Scrap
          </div>
          <div className="w-36 h-16 bg-slate-800" />
        </div>
        <div className="w-14 h-14 relative overflow-hidden">
          <div className="w-11 h-11 left-[4.31px] top-[4.42px] absolute bg-slate-700" />
        </div>
      </div>

      {/* Storage Title */}
      <div className="left-[235px] top-[191px] absolute justify-start text-white text-6xl font-normal font-['Inter']">
        Storage
      </div>

      {/* Backpack Title */}
      <div className="left-[937px] top-[191px] absolute justify-start text-white text-6xl font-normal font-['Inter']">
        Backpack
      </div>

      {/* Background */}
      <div className="w-[1440px] h-[675px] left-0 top-[349px] absolute bg-gray-950" />

      {/* Grid Dividers */}
      <div className="w-[1468px] h-[935px] left-[-27px] top-[110px] absolute">
        <div className="w-[1457px] h-5 left-0 top-[239px] absolute bg-black" />
        <div className="w-5 h-[914px] left-[1448px] top-0 absolute bg-black" />
        <div className="w-5 h-[914px] left-[740px] top-0 absolute bg-black" />
        <div className="w-40 h-60 left-[668px] top-0 absolute bg-black" />
        <div className="w-5 h-[914px] left-[29px] top-[1px] absolute bg-black" />
        <div className="w-[1457px] h-5 left-0 top-[914px] absolute bg-black" />
      </div>

      {/* Storage Grid (Left) */}
      <div className="left-[73px] top-[397px] absolute inline-flex flex-col justify-start items-start gap-7 overflow-y-auto h-[550px] w-[600px]">
        {gridItems.slice(0, 25).map((i) => (
          <div key={`storage-${i}`} className="w-24 h-24 relative">
            <div className="w-24 h-24 left-0 top-0 absolute bg-amber-100" />
            <div className="w-20 h-20 left-[2px] top-[2px] absolute bg-black" />
            <div className="left-[72px] top-[61px] absolute justify-start text-white text-2xl font-normal font-['Inter']">
              n
            </div>
          </div>
        ))}
      </div>

      {/* Backpack Grid (Right) */}
      <div className="left-[782px] top-[397px] absolute inline-flex flex-col justify-start items-start gap-7 overflow-y-auto h-[550px] w-[600px]">
        {gridItems.slice(0, 25).map((i) => (
          <div key={`backpack-${i}`} className="w-24 h-24 relative">
            <div className="w-24 h-24 left-0 top-0 absolute bg-amber-100" />
            <div className="w-20 h-20 left-[2px] top-[2px] absolute bg-black" />
            <div className="left-[72px] top-[61px] absolute justify-start text-white text-2xl font-normal font-['Inter']">
              n
            </div>
          </div>
        ))}
      </div>

      {/* Home Button */}
      <Link href="/">
        <div
          data-property-1="Default"
          className="w-36 h-16 left-[651px] top-[200px] absolute cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-36 h-16 left-0 top-0 absolute bg-indigo-950 rounded" />
          <div className="left-[27px] top-[16px] absolute justify-start text-white text-3xl font-normal font-['Inter']">
            Home
          </div>
        </div>
      </Link>
    </div>
  );
}
