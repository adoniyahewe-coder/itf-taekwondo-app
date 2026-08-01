import Link from 'next/link';

export default function AppDashboard() {
  return (
    <main className="fixed inset-0 bg-black flex flex-col justify-between p-8 pb-14 text-white">
      
      {/* App Header */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
          ITF <span className="text-red-600">ETHIOPIA</span>
        </h1>
        <p className="text-red-600 font-bold tracking-[0.4em] text-[10px] mt-4 uppercase">
          Elite Training Portal
        </p>
      </div>

      {/* App Navigation (The 3 Pillars) */}
      <div className="flex flex-col gap-5 w-full max-w-sm mx-auto">
        
        <Link href="/history" className="bg-zinc-900 border border-white/5 p-7 rounded-[2.5rem] flex items-center justify-between active:scale-95 active:bg-zinc-800 transition-all shadow-2xl">
          <div className="text-left">
            <h2 className="text-2xl font-black uppercase tracking-tight">Evolution</h2>
            <p className="text-zinc-500 text-[10px] font-bold">ITF HISTORY & TRADITION</p>
          </div>
          <span className="text-3xl">📜</span>
        </Link>

        <Link href="/patterns" className="bg-red-700 p-7 rounded-[2.5rem] flex items-center justify-between active:scale-95 active:bg-red-800 transition-all shadow-2xl">
          <div className="text-left">
            <h2 className="text-2xl font-black uppercase tracking-tight">Patterns</h2>
            <p className="text-red-200 text-[10px] font-bold">24 TUL VIDEO GUIDE</p>
          </div>
          <span className="text-3xl text-white">🥋</span>
        </Link>

        <Link href="/library" className="bg-zinc-900 border border-white/5 p-7 rounded-[2.5rem] flex items-center justify-between active:scale-95 active:bg-zinc-800 transition-all shadow-2xl">
          <div className="text-left">
            <h2 className="text-2xl font-black uppercase tracking-tight">Library</h2>
            <p className="text-zinc-500 text-[10px] font-bold">STANCES & TECHNIQUES</p>
          </div>
          <span className="text-3xl">👊</span>
        </Link>

      </div>

      {/* Footer Branding */}
      <div className="text-center">
        <div className="h-[2px] w-12 bg-zinc-800 mx-auto mb-4"></div>
        <p className="text-[9px] text-zinc-600 font-black tracking-widest uppercase">Version 1.1.0 • Stable App</p>
      </div>

    </main>
  );
}