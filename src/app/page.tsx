import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col items-center justify-center p-6">
      {/* App Logo/Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase">
          ITF <span className="text-red-600">ETHIOPIA</span>
        </h1>
        <p className="text-red-500 font-bold tracking-[0.3em] text-xs mt-2 uppercase">Official Training App</p>
      </div>

      {/* Modern Grid Menu */}
      <div className="grid grid-cols-1 gap-6 w-full max-w-md">
        
        <Link href="/history" className="group bg-[#1a1a1a] border border-gray-800 p-8 rounded-3xl flex items-center justify-between hover:bg-red-700 transition-all">
          <div>
            <h2 className="text-2xl font-black uppercase">Evolution</h2>
            <p className="text-gray-500 group-hover:text-white text-sm">ታሪክ እና እድገት</p>
          </div>
          <span className="text-4xl">📜</span>
        </Link>

        <Link href="/patterns" className="group bg-[#1a1a1a] border border-gray-800 p-8 rounded-3xl flex items-center justify-between hover:bg-red-700 transition-all">
          <div>
            <h2 className="text-2xl font-black uppercase">24 Patterns</h2>
            <p className="text-gray-500 group-hover:text-white text-sm">የ24ቱ ቱል ዝርዝር</p>
          </div>
          <span className="text-4xl">🥋</span>
        </Link>

        <Link href="/library" className="group bg-[#1a1a1a] border border-gray-800 p-8 rounded-3xl flex items-center justify-between hover:bg-red-700 transition-all">
          <div>
            <h2 className="text-2xl font-black uppercase">Library</h2>
            <p className="text-gray-500 group-hover:text-white text-sm">ቴክኒኮች እና አቋቋም</p>
          </div>
          <span className="text-4xl">👊</span>
        </Link>

      </div>

      <footer className="mt-20 opacity-20 text-[10px] uppercase tracking-widest">
        Developed for ITF Taekwondo
      </footer>
    </main>
  );
}