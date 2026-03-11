'use client';

import Link from 'next/link';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-8">Achievements Page</h1>
          <p className="text-2xl mb-8">Coming soon...</p>
          <Link href="/">
            <button className="px-8 py-4 bg-indigo-950 rounded-lg text-2xl hover:opacity-80 transition-opacity">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
