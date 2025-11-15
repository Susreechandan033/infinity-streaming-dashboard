import { getMovieDetails } from '../../../lib/tmdb'
import Image from 'next/image'
export default async function MovieDetailPage({params}:{params:{id:string}}){
 const movie=await getMovieDetails(params.id)
 return (<div className="mt-6"><div className="flex flex-col md:flex-row gap-6">
   <div className="w-full md:w-1/3">
     <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={500} height={750} />
   </div>
   <div className="flex-1"><h1 className="text-3xl font-bold">{movie.title}</h1>
   <p className="text-sm text-neutral-300 mt-2">{movie.release_date} • {movie.runtime} min</p>
   <p className="mt-4 leading-relaxed text-neutral-200">{movie.overview}</p></div>
 </div></div>)
}