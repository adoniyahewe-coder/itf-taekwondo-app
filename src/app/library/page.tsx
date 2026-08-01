import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default async function Library() {
  const { data: techs } = await supabase.from('technique_library').select('*').order('category');

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-black p-4 text-white flex justify-between items-center">
        <Link href="/" className="font-bold text-red-500">← Back</Link>
        <h1 className="font-black uppercase italic">Technical Library</h1>
        <div className="w-10"></div>
      </nav>

      <div className="max-w-4xl mx-auto p-6">
        <div className="space-y-12">
          {['Stance', 'Punch', 'Block', 'Kick'].map((cat) => (
            <div key={cat}>
              <h2 className="text-2xl font-black border-b-4 border-red-700 inline-block mb-6 uppercase">{cat}s</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techs?.filter(t => t.category === cat).map(item => (
                  <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                    {item.image_url && <img src={item.image_url} className="h-24 mx-auto mb-2 object-contain" alt="" />}
                    <h4 className="font-bold text-gray-900">{item.name_am}</h4>
                    <p className="text-[10px] text-gray-400 uppercase">{item.name_en}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}