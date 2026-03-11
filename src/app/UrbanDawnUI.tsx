'use client';

import Link from 'next/link';

export default function UrbanDawnUI() {
  return (
    <div className="w-[1440px] h-[1024px] relative overflow-hidden">
      <div className="left-[369px] top-[342px] absolute justify-start text-white text-9xl font-medium font-['Ubuntu_Sans_Mono']">
        Urban Dawn
      </div>
      <div className="w-[1440px] h-7 left-[3px] top-[997px] absolute bg-black" />
      
      {/* Stats Button */}
      <Link href="/stats">
        <div className="w-36 h-16 left-[890px] top-[899px] absolute cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-36 h-16 left-0 top-0 absolute bg-neutral-400 rounded-lg" />
          <div className="left-[32px] top-[16px] absolute justify-start text-black text-3xl font-normal font-['Inter']">
            Stats
          </div>
        </div>
      </Link>
      
      {/* Links Button (Socials) */}
      <Link href="/links">
        <div className="w-36 h-16 left-[436px] top-[899px] absolute cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-36 h-16 left-0 top-0 absolute bg-neutral-400 rounded-lg" />
          <div className="left-[32px] top-[16px] absolute justify-start text-black text-3xl font-normal font-['Inter']">
            Links
          </div>
        </div>
      </Link>
      
      {/* Achievements Button */}
      <Link href="/achievements">
        <div className="w-60 h-16 left-[614px] top-[899px] absolute bg-neutral-400 rounded-lg cursor-pointer hover:opacity-80 transition-opacity" />
      </Link>
      <div className="left-[628px] top-[915px] absolute justify-start text-black text-3xl font-normal font-['Inter']">
        Achievements
      </div>
      
      {/* Center Panel */}
      <div data-property-1="Default" className="w-64 h-48 left-[580px] top-[540px] absolute">
        <div className="w-64 h-48 left-0 top-0 absolute bg-indigo-950" />
      </div>
      
      {/* Header Bar */}
      <div className="w-[1440px] h-28 px-5 py-5 left-0 top-0 absolute bg-black inline-flex justify-start items-center gap-24">
        {/* High Score */}
        <div className="flex justify-start items-center gap-2.5">
          <div className="justify-start text-white text-3xl font-normal font-['Instrument_Sans']">
            High Score
          </div>
          <div className="w-36 h-16 bg-slate-800" />
        </div>
        
        {/* Depleted Fuel */}
        <div className="flex justify-start items-center gap-2.5">
          <div className="flex justify-start items-center gap-3.5">
            <div className="justify-start text-white text-3xl font-normal font-['Instrument_Sans']">
              Depleted Fuel
            </div>
            <div className="w-36 h-16 bg-slate-800" />
          </div>
        </div>
        
        {/* Industrial Scrap */}
        <div className="flex justify-start items-center gap-2.5">
          <div className="justify-start text-white text-3xl font-normal font-['Instrument_Sans']">
            Industrial Scrap
          </div>
          <div className="w-36 h-16 bg-slate-800" />
        </div>
        
        {/* Icon */}
        <div className="w-14 h-14 relative overflow-hidden">
          <div className="w-11 h-11 left-[4.31px] top-[4.42px] absolute bg-slate-700" />
        </div>
      </div>
      
      {/* Leaderboard */}
      <Link href="/leaderboard">
        <div data-property-1="Default" className="w-72 h-20 left-[210px] top-[540px] absolute cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-72 h-20 left-0 top-0 absolute bg-indigo-950 rounded" />
          <div className="left-[10px] top-[13px] absolute justify-start text-white text-5xl font-normal font-['Instrument_Sans']">
            Leaderboard
          </div>
        </div>
      </Link>
      
      {/* Depot */}
      <div data-property-1="Default" className="w-72 h-20 left-[914px] top-[540px] absolute">
        <div className="w-72 h-20 left-0 top-0 absolute bg-indigo-950 rounded" />
        <div className="left-[82px] top-[13px] absolute justify-start text-white text-5xl font-normal font-['Instrument_Sans']">
          Depot
        </div>
      </div>
    </div>
  );
}
