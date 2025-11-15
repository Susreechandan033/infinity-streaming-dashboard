const API_KEY=process.env.TMDB_API_KEY||process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE='https://api.themoviedb.org/3'
async function fetchTMDB(path:string){
 const url=`${BASE}${path}&api_key=${API_KEY}`
 const res=await fetch(url)
 if(!res.ok) throw new Error('TMDB fetch failed')
 return res.json()
}
export async function getTMDBLists(){
 const trending=await fetchTMDB('/trending/movie/week?language=en-US')
 const topRated=await fetchTMDB('/movie/top_rated?language=en-US&page=1')
 const action=await fetchTMDB('/discover/movie?with_genres=28&language=en-US&page=1')
 return {trending:trending.results,topRated:topRated.results,action:action.results,hero:trending.results[0]}
}
export async function getMovieDetails(id:string){
 return fetchTMDB(`/movie/${id}?language=en-US`)
}