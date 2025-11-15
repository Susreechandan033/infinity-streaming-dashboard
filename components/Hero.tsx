import Image from 'next/image'
import Link from 'next/link'
export default function Hero({movie}:{movie:any}){
 if(!movie)return null
 return (<section className="relative rounded-lg overflow-hidden">
   <div className="absolute inset-0 -z-10">
     <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`} alt={movie.title} fill style={{objectFit:'cover'}} />
     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"/>
   </div>
   <div className="relative py-20">
     <div className="max-w-4xl">
       <h2 className="text-4xl font-bold">{movie.title}</h2>
       <p className="mt-4 text-neutral-300 max-w-2xl">{movie.overview}</p>
       <div className="mt-6"><Link href={`/movie/${movie.id}`} className="px-4 py-2 bg-white text-black rounded-md font-semibold">View Details</Link></div>
     </div>
   </div>
 </section>)
}