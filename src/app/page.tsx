import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Cinematic Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden bg-black">
        {/* የጀርባ ምስል (በኋላ በራስህ መቀየር ትችላለህ) */}
        <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2000')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white" />
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-4 drop-shadow-2xl">
            ITF <span className="text-red-700">ETHIOPIA</span>
          </h1>
          <p className="text-lg md:text-xl font-medium tracking-[0.4em] mb-12 uppercase opacity-90 text-gray-200">
            Professional Taekwondo Portal
          </p>
          <div className="flex flex-col sm:row gap-6 justify-center">
            <Link href="/patterns" className="btn-primary">
              Explore 24 Patterns
            </Link>
            <Link href="/history" className="btn-outline bg-white/10 backdrop-blur-md !border-white !text-white hover:!bg-white hover:!text-black">
              Our History
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Modular Cards */}
      <section className="max-w-7xl mx-auto -mt-24 relative z-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-32">
        
        {/* History Card */}
        <Link href="/history" className="glass-effect p-10 group cursor-pointer rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-5 text-8xl font-black italic">01</div>
          <span className="text-4xl mb-6 block">📜</span>
          <h3 className="text-2xl font-black uppercase mb-2">Evolution</h3>
          <p className="text-gray-500 text-sm leading-relaxed">የአይ.ቲ.ኤፍ ቴኳንዶ አመጣጥ እና የጄነራል ቾይ ሆንግ ሂ ታሪክ።</p>
          <div className="mt-6 text-red-700 font-bold group-hover:translate-x-2 transition-transform">Learn More →</div>
        </Link>

        {/* Patterns Card */}
        <Link href="/patterns" className="glass-effect p-10 group cursor-pointer rounded-3xl border-t-8 border-red-700">
          <div className="absolute top-0 right-0 p-4 opacity-5 text-8xl font-black italic">02</div>
          <span className="text-4xl mb-6 block">🥋</span>
          <h3 className="text-2xl font-black uppercase mb-2">24 Patterns</h3>
          <p className="text-gray-500 text-sm leading-relaxed">እያንዳንዱ ቱል ከነቪዲዮው እና ከአፈፃፀም መመሪያው ጋር።</p>
          <div className="mt-6 text-red-700 font-bold group-hover:translate-x-2 transition-transform">Start Training →</div>
        </Link>

        {/* Library Card */}
        <Link href="/library" className="glass-effect p-10 group cursor-pointer rounded-3xl">
          <div className="absolute top-0 right-0 p-4 opacity-5 text-8xl font-black italic">03</div>
          <span className="text-4xl mb-6 block">👊</span>
          <h3 className="text-2xl font-black uppercase mb-2">Techniques</h3>
          <p className="text-gray-500 text-sm leading-relaxed">መሰረታዊ አቋቋም (Stances) እና የምት ዘዴዎች ማከማቻ።</p>
          <div className="mt-6 text-red-700 font-bold group-hover:translate-x-2 transition-transform">Open Library →</div>
        </Link>

      </section>
    </main>
  );
}