'use client';

import Link from 'next/link';

export default function LinksPage() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '𝕏' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Discord', url: 'https://discord.com', icon: '💬' },
    { name: 'Email', url: 'mailto:dev@example.com', icon: '✉️' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold mb-16">Developer Links</h1>
          
          <div className="space-y-6 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-indigo-950 rounded-lg hover:bg-indigo-900 transition-colors text-2xl"
              >
                <span className="mr-4">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>

          <Link href="/">
            <button className="px-8 py-4 bg-slate-800 rounded-lg text-2xl hover:opacity-80 transition-opacity">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
