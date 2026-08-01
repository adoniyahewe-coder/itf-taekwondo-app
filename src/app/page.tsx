import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen w-full bg-black text-white flex flex-col justify-between p-8 pb-16 overflow-hidden">
      
      {/* App Branding */}
      <div className="mt-12 text-center">
        <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
          ITF <span className="text-red-600">ETHIOPIA</span>
        </h1>
        <p className="text-red-500 font-bold tracking-[0.4em] text-[10px] mt-3 uppercase">Mastery & Tradition</p>
      </div>

      {/* High-Standard App Menu */}
      <div className="w-full max-w-sm mx-auto space-y-4">
        
        <Link href="/history" className="app-button w-full p-6 flex items-center justify-between shadow-2xl">
          <div className="text-left">
            <h2 className="text-xl font-bold uppercase tracking-tight">Evolution</h2>
            <p className="text-zinc-500 text-[10px]">የአይ.ቲ.ኤፍ ታሪክ እና እድገት</p>
          </div>
          <span className="text-2xl">📜</span>
        </Link>

        <Link href="/patterns" className="app-button w-full p-6 flex items-center justify-between shadow-2xl border-l-4 border-l-red-600">
          <div className="text-left">
            <h2 className="text-xl font-bold uppercase tracking-tight">24 Patterns</h2>
            <p className="text-zinc-500 text-[10px]">የ24ቱ ቱል መማሪያ (ቪዲዮ)</p>
          </div>
          <span className="text-2xl">🥋</span>
        </Link>

        <Link href="/library" className="app-button w-full p-6 flex items-center justify-between shadow-2xl">
          <div className="text-left">
            <h2 className="text-xl font-bold uppercase tracking-tight">Library</h2>
            <p className="text-zinc-500 text-[10px]">ቴክኒኮች እና አቋቋም</p>
          </div>
          <span className="text-2xl">👊</span>
        </Link>

      </div>

      {/* App Version Info */}
      <div className="text-center opacity-30">
        <p className="text-[8px] font-bold tracking-widest uppercase">ITF Ethiopia App v1.0</p>
      </div>

    </main>
  );
}