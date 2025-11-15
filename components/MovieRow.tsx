import Link from 'next/link'
import Image from 'next/image'
export default function MovieRow({title,movies}:{title:string,movies:any[]}){
 return (<div><h3 className="text-xl font-semibold mb-3">{title}</h3>
   <div className="flex gap-3 overflow-x-auto pb-2">
     {movies.map(m=>(
       <div key={m.id} className="min-w-[150px] hover:scale-105 transition-transform">
         <Link href={`/movie/${m.id}`}>
           <div className="w-36 h-52 relative rounded-md overflow-hidden">
             <Image src={`https://image.tmdb.org/t/p/w342${m.poster_path}`} alt={m.title} fill style={{objectFit:'cover'}}/>
           </div>
           <p className="mt-2 text-sm w-36 truncate">{m.title}</p>
         </Link>
       </div>
     ))}
   </div></div>)
}