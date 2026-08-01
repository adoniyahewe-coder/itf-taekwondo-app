import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between p-8 pb-16">
      
      {/* App Logo */}
      <div className="mt-10">
        <h1 className="text-5xl font-black italic tracking-tighter leading-none">
          ITF <span className="text-red-600 underline decoration-4 underline-offset-8">ETHIOPIA</span>
        </h1>
        <p className="text-zinc-500 font-bold tracking-[0.4em] text-[10px] mt-6 uppercase">Mastery & Tradition</p>
      </div>

      {/* Fitness Menu Links */}
      <div className="flex flex-col gap-5 w-full max-w-sm mx-auto">
        
        <Link href="/history" className="fitness-card flex items-center justify-between group">
          <div>
            <h2 className="text-2xl font-black uppercase italic tracking-tight">Evolution</h2>
            <p className="text-zinc-500 text-[10px] font-bold mt-1">ITF HISTORY • ታሪክ</p>
          </div>
          <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">📜</span>
        </Link>

        <Link href="/patterns" className="fitness-card flex items-center justify-between group border-l-4 border-l-red-600">
          <div>
            <h2 className="text-2xl font-black uppercase italic tracking-tight">Patterns</h2>
            <p className="text-red-500/80 text-[10px] font-bold mt-1">24 TUL TRAINING • ቱል</p>
          </div>
          <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">🥋</span>
        </Link>

        <Link href="/library" className="fitness-card flex items-center justify-between group">
          <div>
            <h2 className="text-2xl font-black uppercase italic tracking-tight">Library</h2>
            <p className="text-zinc-500 text-[10px] font-bold mt-1">TECHNIQUE GUIDE • ቴክኒክ</p>
          </div>
          <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">👊</span>
        </Link>

      </div>

      {/* Version footer */}
      <div className="text-center">
        <p className="text-[9px] text-zinc-700 font-black tracking-widest uppercase italic">Elite Version 2.0</p>
      </div>

    </main>
  );
}