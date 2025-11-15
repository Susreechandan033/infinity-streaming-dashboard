import Link from 'next/link'
export default function Header(){
 return (<header className="bg-neutral-900 border-b border-neutral-800">
 <div className="mx-auto max-w-7xl px-4 md:px-8 py-4 flex items-center justify-between">
   <Link href="/" className="text-xl font-extrabold tracking-tight">Infinity</Link>
   <nav className="space-x-4">
     <a className="text-sm text-neutral-300">Movies</a>
     <a className="text-sm text-neutral-300">Series</a>
   </nav>
 </div></header>)
}