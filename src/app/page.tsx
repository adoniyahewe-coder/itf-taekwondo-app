import Link from 'next/link';

export default function AppHome() {
  return (
    <main className="h-screen w-full bg-[#050505] flex flex-col items-center justify-between p-8 pb-12 overflow-hidden">
      {/* App Branding */}
      <div className="mt-16 text-center animate-in fade-in slide-in-from-top duration-1000">
        <h1 className="text-6xl font-black italic tracking-tighter text-white">
          ITF <span className="text-red-600">ETHIOPIA</span>
        </h1>
        <p className="text-red-500 font-bold tracking-[0.4em] text-[10px] mt-2 uppercase">Official Training App</p>
      </div>

      {/* App Grid Menu */}
      <div className="w-full max-w-sm space-y-4">
        <MenuButton href="/history" title="Evolution" amTitle="ታሪክ እና እድገት" icon="📜" color="bg-zinc-900" />
        <MenuButton href="/patterns" title="24 Patterns" amTitle="የ24ቱ ቱል ዝርዝር" icon="🥋" color="bg-red-700" />
        <MenuButton href="/library" title="Library" amTitle="ቴክኒኮች እና አቋቋም" icon="👊" color="bg-zinc-900" />
      </div>

      <div className="text-[9px] text-zinc-600 font-bold tracking-widest uppercase">Version 1.0.0</div>
    </main>
  );
}

function MenuButton({ href, title, amTitle, icon, color }: any) {
  return (
    <Link href={href} className={`${color} w-full p-6 rounded-[2.5rem] flex items-center justify-between shadow-2xl active:scale-95 transition-transform border border-white/5`}>
      <div className="text-left text-white">
        <h2 className="text-2xl font-black uppercase leading-none">{title}</h2>
        <p className="text-white/60 text-xs mt-1 font-medium">{amTitle}</p>
      </div>
      <span className="text-3xl filter drop-shadow-lg">{icon}</span>
    </Link>
  );
}