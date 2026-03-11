import UrbanDawnUI from "./UrbanDawnUI";

export default function Home() {
  const navPages = [
    { name: 'Leaderboard', href: '/leaderboard' },
  ];

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <UrbanDawnUI pages={navPages} />
    </div>
  );
}
