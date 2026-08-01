import Link from 'next/link';

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-red-700 p-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold">← BACK</Link>
        <h1 className="text-white font-black uppercase">Evolution</h1>
        <div className="w-10"></div>
      </nav>

      <div className="max-w-3xl mx-auto p-8 py-16">
        <h2 className="text-4xl font-black text-black mb-8 border-b-4 border-red-700 inline-block">HISTORY OF ITF</h2>
        <div className="bg-white p-8 rounded-3xl shadow-xl leading-relaxed text-lg text-gray-800 space-y-6">
          <p className="italic border-l-4 border-red-600 pl-4 bg-red-50 py-4">
            "ቴኳንዶ ማለት በእግር መምታት ወይም መስበር (Tae)፣ በቡጢ መምታት (Kwon) እና የጥበብ መንገድ (Do) ማለት ነው።"
          </p>
          <p>
            ዘመናዊው አይ.ቲ.ኤፍ (ITF) ቴኳንዶ በ1955 ዓ.ም በጄነራል ቾይ ሆንግ ሂ የተመሰረተ ሲሆን...
          </p>
          {/* Add more history text here */}
        </div>
      </div>
    </main>
  );
}