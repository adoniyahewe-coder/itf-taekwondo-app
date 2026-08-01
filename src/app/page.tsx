import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function Home() {
  // Fetch all 24 patterns from Supabase
  const { data: patterns, error } = await supabase
    .from('patterns')
    .select('*')
    .order('order_no', { ascending: true });

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Header Section */}
      <header className="bg-red-700 text-white py-10 px-6 text-center shadow-lg border-b-4 border-black">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter">ITF TAEKWON-DO</h1>
        <p className="mt-2 text-xl md:text-2xl font-light opacity-90">የ24ቱ ቱል መማሪያ መተግበሪያ</p>
      </header>

      <div className="max-w-5xl mx-auto px-4 mt-8">
        
        {/* Evolution & Description Section (ታሪክ እና እድገት) */}
        <section className="bg-white p-8 rounded-2xl shadow-md mb-12 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 border-b-2 border-red-50 pb-2">
            Description & Evolution (ታሪክ እና መግለጫ)
          </h2>
          <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
            <p>
              <strong className="text-red-700">ቴኳንዶ (Taekwon-Do):</strong> በሶስት ቃላት የተገነባ ጥበብ ነው። 
              <strong> ቴ (Tae)</strong> ማለት በእግር መምታት፣ 
              <strong> ኳን (Kwon)</strong> ማለት በቡጢ መምታት፣ 
              <strong> ዶ (Do)</strong> ማለት ደግሞ የጥበብ መንገድ ወይም ስነ-ምግባር ማለት ነው።
            </p>
            <p className="bg-gray-50 p-5 rounded-xl italic border-l-8 border-red-700">
              ዘመናዊው አይ.ቲ.ኤፍ (ITF) ቴኳንዶ በ1955 ዓ.ም በጄነራል ቾይ ሆንግ ሂ የተመሰረተ ሲሆን፣ 
              በውስጡም የሰው ልጅን እድገት እና የኮሪያን ታሪክ የሚወክሉ <strong>24 ቱል (Patterns)</strong> ይዟል።
            </p>
          </div>
        </section>

        {/* Patterns List Title */}
        <div className="flex items-center mb-8">
          <div className="h-1 flex-grow bg-gray-200"></div>
          <h3 className="px-4 text-2xl font-black text-gray-900 tracking-widest uppercase">
            The 24 Patterns
          </h3>
          <div className="h-1 flex-grow bg-gray-200"></div>
        </div>

        {/* Error State */}
        {error && (
          <div className="p-4 bg-red-100 text-red-700 rounded-lg mb-6">
            ዳታቤዙን ማግኘት አልተቻለም (Database connection error)
          </div>
        )}

        {/* Patterns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {patterns?.map((tul) => (
            <Link key={tul.id} href={`/patterns/${tul.order_no}`}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:border-red-600 transition-all cursor-pointer group active:scale-95">
                <div className="p-5 flex justify-between items-center bg-white group-hover:bg-red-50">
                  <div className="flex items-center">
                    <span className="text-2xl font-black text-red-700 mr-4">{tul.order_no}</span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-800">{tul.name_en}</h4>
                      <p className="text-sm text-gray-500 font-medium">{tul.name_am}</p>
                    </div>
                  </div>
                  <div className="text-red-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
                <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex justify-between text-xs font-bold text-gray-400">
                  <span>MOVES: {tul.move_count}</span>
                  <span className="text-red-600 uppercase">ቪዲዮ እይ</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* If database is empty */}
        {patterns?.length === 0 && (
          <p className="text-center text-gray-400 py-20 italic">
            ምንም ቱል አልተገኘም (No patterns found in database).
          </p>
        )}
      </div>

      {/* Simple Footer */}
      <footer className="mt-20 py-10 border-t border-gray-200 text-center text-gray-400 text-sm">
        <p>© ITF Taekwondo Ethiopia App</p>
      </footer>
    </main>
  );
}