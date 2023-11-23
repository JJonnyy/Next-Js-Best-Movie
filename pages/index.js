import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Inter } from 'next/font/google'
import { weather } from '../components/lib/weather';
import { geo } from '../components/lib/geo';

const inter = Inter({ subsets: ['latin'] })
export const getStaticProps = async () =>{
    const movieApi = 'https://movie-database-alternative.p.rapidapi.com/?s=Friends&r=json&page=1';
    const optionsMovie = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5a5ef4587dmshbcbb157ed6d6b5ep1806bdjsn07ad4c261c93',
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
    };
    const response = await fetch(movieApi, optionsMovie);
    const dataMovie = await response.json();
    const city = await geo();
    const myweather = await weather(city);
    return {
        props: {
            geo:city,
            weather: myweather,
            movie: dataMovie
        }
    }
}
export default function Home({geo, weather, movie}) {
  return (
    <main className="Main">
        <Head>
            <title>Favorite movie</title>
        </Head>
        <div className="weather-block flex items-center mb-8">
            <TiWeatherPartlySunny/>
            <div className="flex">
                <h2 className="px-5"> You're located in : { geo }</h2>
                <h2>{weather.main ?( <p className="bold">{weather.main.temp.toFixed()} °C</p> ):null}</h2>
            </div>
        </div>
        <h1 className="text-4xl text-center mb-8 text-[#ffc600]">Pick your favorite movie</h1>
        <div className="movie-container items-center flex flex-wrap justify-around">
            { movie.Search.slice(0,9).map(e => {
                if(!e.Poster || e.Poster === 'N/A'){
                    return (
                        <Link href="/" key={e.imdbID} className="item">
                            <p>No Image..</p>
                            <h2>{e.Title}</h2>
                        </Link>
                    )
                }
                else{
                    return (
                        <Link href={`/movies/${e.imdbID}`}  className="item" key={e.imdbID}>
                            <Image src={e.Poster} width={200} height={400} alt="poster" />
                            <h2>{e.Title}</h2>
                        </Link>
                    )
                }
            })}
        </div>
    </main>
  )
}
