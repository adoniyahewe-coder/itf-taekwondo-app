import Link from 'next/link';

export default function History() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-black p-5 text-white flex items-center shadow-xl">
        <Link href="/" className="bg-red-700 px-4 py-1 rounded font-bold text-xs mr-4">← BACK</Link>
        <h1 className="font-black uppercase italic">ITF History</h1>
      </nav>

      <div className="max-w-3xl mx-auto p-8 py-16">
        <h2 className="text-4xl font-black text-black mb-8 border-b-8 border-red-700 inline-block uppercase italic">Evolution</h2>
        <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-200 shadow-inner">
           <p className="text-xl leading-relaxed text-gray-800 font-medium">
             ዘመናዊው አይ.ቲ.ኤፍ (ITF) ቴኳንዶ በ1955 ዓ.ም በጄነራል ቾይ ሆንግ ሂ የተመሰረተ ሲሆን፣ 
             በውስጡም የሰው ልጅን እድገት እና ታሪክ የሚወክሉ 24 ቱል (Patterns) ይዟል።
           </p>
           {/* እዚህ ጋር ሌላ የታሪክ ጽሁፍ መጨመር ትችላለህ */}
        </div>
      </div>
    </main>
  );
}