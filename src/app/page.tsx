import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2000')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter mb-4 animate-pulse">
            ITF <span className="text-red-700">ETHIOPIA</span>
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-[0.3em] mb-10 opacity-80">
            የላቀ የቴኳንዶ ጥበብ መማሪያ
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/patterns" className="premium-btn bg-red-700 hover:bg-white hover:text-black">
              Start Training (ቱል መለማመጃ)
            </Link>
            <Link href="/history" className="premium-btn border-2 border-white hover:bg-white hover:text-black">
              Our History (ታሪክ)
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="max-w-7xl mx-auto -mt-20 relative z-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        <div className="glass-card p-10 text-center group">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-700 transition-colors">
            <span className="text-4xl group-hover:scale-125 transition-transform">📜</span>
          </div>
          <h3 className="text-2xl font-black mb-4">Evolution</h3>
          <p className="text-gray-500 mb-6 text-sm">የአይ.ቲ.ኤፍ ቴኳንዶ አመጣጥ እና ታሪክ</p>
          <Link href="/history" className="text-red-700 font-bold hover:underline">Explore History →</Link>
        </div>

        <div className="glass-card p-10 text-center group border-t-8 border-black">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-black transition-colors">
            <span className="text-4xl group-hover:scale-125 transition-transform">🥋</span>
          </div>
          <h3 className="text-2xl font-black mb-4">Patterns</h3>
          <p className="text-gray-500 mb-6 text-sm">የ24ቱ ቱል ሙሉ መግለጫ እና ቪዲዮዎች</p>
          <Link href="/patterns" className="text-red-700 font-bold hover:underline">View 24 Tul →</Link>
        </div>

        <div className="glass-card p-10 text-center group">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-700 transition-colors">
            <span className="text-4xl group-hover:scale-125 transition-transform">👊</span>
          </div>
          <h3 className="text-2xl font-black mb-4">Library</h3>
          <p className="text-gray-500 mb-6 text-sm">መሰረታዊ አቋቋም እና የምት ዘዴዎች</p>
          <Link href="/library" className="text-red-700 font-bold hover:underline">Open Manual →</Link>
        </div>
      </section>
    </main>
  );
}