'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LeaderboardPage() {
  const [rankBy, setRankBy] = useState('score');
  const [showTop, setShowTop] = useState('10');

  // Mock leaderboard data
  const leaderboardData = Array.from({ length: 12 }, (_, i) => ({
    rank: i + 1,
    username: `Player${String(i + 1).padStart(2, '0')}`,
    highScore: Math.floor(Math.random() * 10000),
    fuel: Math.floor(Math.random() * 500),
    scrap: Math.floor(Math.random() * 1000),
  }));

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

      {/* Title */}
      <div className="left-[527px] top-[146px] absolute justify-start text-white text-6xl font-normal font-['Inter']">
        Leaderboard
      </div>

      {/* Home Button */}
      <Link href="/">
        <div
          data-property-1="Default"
          className="w-36 h-16 left-[36px] top-[253px] absolute cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-36 h-16 left-0 top-0 absolute bg-indigo-950 rounded" />
          <div className="left-[27px] top-[16px] absolute justify-start text-white text-3xl font-normal font-['Inter']">
            Home
          </div>
        </div>
      </Link>

      {/* Rank By Dropdown */}
      <div className="left-[549px] top-[253px] absolute inline-flex justify-start items-center">
        <div className="w-52 h-16 bg-black rounded-tl-sm rounded-bl-sm" />
        <select
          value={rankBy}
          onChange={(e) => setRankBy(e.target.value)}
          className="w-36 h-16 bg-slate-800 rounded-tr-sm rounded-br-sm text-white text-lg font-normal appearance-none px-2"
        >
          <option value="score">High Score</option>
          <option value="fuel">Fuel</option>
          <option value="scrap">Scrap</option>
        </select>
        <div className="left-[47px] top-[16px] absolute justify-start text-white text-3xl font-normal font-['Inter'] pointer-events-none">
          Rank by
        </div>
      </div>

      {/* Show Top Dropdown */}
      <div className="left-[1051px] top-[253px] absolute inline-flex justify-start items-center">
        <div className="w-52 h-16 bg-black rounded-tl-sm rounded-bl-sm" />
        <select
          value={showTop}
          onChange={(e) => setShowTop(e.target.value)}
          className="w-36 h-16 bg-slate-800 rounded-tr-sm rounded-br-sm text-white text-lg font-normal appearance-none px-2"
        >
          <option value="10">Top 10</option>
          <option value="25">Top 25</option>
          <option value="50">Top 50</option>
          <option value="100">Top 100</option>
        </select>
        <div className="left-[40px] top-[16px] absolute justify-start text-white text-3xl font-normal font-['Inter'] pointer-events-none">
          Show top
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="w-[1383px] left-[38px] top-[371px] absolute inline-flex flex-col justify-start items-start gap-7 overflow-y-auto h-[600px]">
        {leaderboardData.slice(0, parseInt(showTop)).map((entry) => (
          <div key={entry.rank} className="self-stretch h-20 relative">
            <div className="w-[1342.97px] h-20 left-[40.03px] top-0 absolute bg-black" />
            <div className="w-20 h-20 left-0 top-0 absolute bg-black rounded-full" />
            <div className="w-20 h-16 left-[4px] top-[4px] absolute bg-black rounded-full border-[3px] border-amber-100" />
            <div className="left-[25.02px] top-[11px] absolute justify-start text-white text-5xl font-normal font-['Inter']">
              {entry.rank}
            </div>
            <div className="w-[559.40px] h-16 left-[86.06px] top-[6px] absolute bg-slate-800" />
            <div className="left-[102.07px] top-[20px] absolute justify-start text-white text-3xl font-normal font-['Instrument_Sans']">
              {entry.username}
            </div>
            <div className="w-48 h-11 left-[663.48px] top-[18px] absolute inline-flex justify-start items-center gap-1.5">
              <div className="justify-start text-white text-3xl font-normal font-['Instrument_Sans']">
                H.S.
              </div>
              <div className="w-28 h-11 bg-slate-800 flex items-center justify-center text-white">
                {entry.highScore}
              </div>
            </div>
            <div className="w-48 h-11 left-[895.65px] top-[18px] absolute inline-flex justify-start items-center gap-1.5">
              <div className="justify-start text-white text-3xl font-normal font-['Instrument_Sans']">
                Fuel
              </div>
              <div className="w-28 h-11 bg-slate-800 flex items-center justify-center text-white">
                {entry.fuel}
              </div>
            </div>
            <div className="w-52 h-11 left-[1128.82px] top-[18px] absolute inline-flex justify-start items-start gap-1.5">
              <div className="justify-start text-white text-3xl font-normal font-['Inter']">
                Scrap
              </div>
              <div className="w-28 h-11 bg-slate-800 flex items-center justify-center text-white">
                {entry.scrap}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
