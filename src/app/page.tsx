import { supabase } from '@/lib/supabaseClient';

export default async function Home() {
  // Fetch patterns from Supabase
  const { data: patterns } = await supabase
    .from('patterns')
    .select('*')
    .order('order_no', { ascending: true });

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-700 text-white p-8 text-center shadow-md">
        <h1 className="text-4xl font-bold">ITF Taekwondo Ethiopia</h1>
        <p className="mt-2 text-xl font-light">የ24ቱ ቱል መማሪያ መተግበሪያ</p>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        {/* Evolution Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm mb-8 border-t-4 border-red-700">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Description & Evolution (ታሪክ)</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              <span className="font-bold text-red-700">ቴኳንዶ (Taekwon-Do):</span> በሶስት ቃላት የተገነባ ነው - 
              <span className="font-semibold italic"> ቴ (Tae)</span> ማለት በእግር መምታት፣ 
              <span className="font-semibold italic"> ኳን (Kwon)</span> ማለት በቡጢ መምታት፣ 
              <span className="font-semibold italic"> ዶ (Do)</span> ማለት ደግሞ የጥበብ መንገድ ማለት ነው።
            </p>
            <p>
              ዘመናዊው ቴኳንዶ በ1955 ዓ.ም በጄነራል ቾይ ሆንግ ሂ የተመሰረተ ሲሆን፣ በውስጡም የሰው ልጅን እድገት የሚወክሉ 24 ቱል (Patterns) ይዟል።
            </p>
          </div>
        </section>

        {/* Patterns List Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">The 24 Patterns (24ቱ ቱል)</h2>
        <div className="grid gap-4">
          {patterns?.map((tul) => (
            <div key={tul.id} className="bg-white p-4 rounded-md shadow flex justify-between items-center border hover:border-red-500 transition-colors cursor-pointer">
              <div>
                <span className="text-red-700 font-bold mr-3">{tul.order_no}.</span>
                <span className="text-lg font-semibold">{tul.name_en}</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-gray-600">{tul.name_am}</span>
              </div>
              <div className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-500">
                {tul.move_count} Moves
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}