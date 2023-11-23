import Image from 'next/image';
export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const url = `https://movie-database-alternative.p.rapidapi.com/?r=json&i=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5a5ef4587dmshbcbb157ed6d6b5ep1806bdjsn07ad4c261c93',
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
    };
    const res = await fetch(url, options);
    const data = await res.json();
    return {
        props:{
            data:data
        }
    }
};
const Movie = ({data}) => {
    console.log(data);
    return(
        <div className="Main">
            <div className="container movies-page">
                <h1 className="text-4xl text-center text-[#ffc600] mb-12">You've chosen "{data.Title}"</h1>
                <div className="flex w-full justify-center justify-center">
                    <div className="flex mr-8 flex-1  justify-center">
                        <Image src={data.Poster} width={300} height={300} alt="poster"/>
                    </div>

                    <div className="description flex flex-1 items-start flex-col">
                        <h1><span>Ratings:</span>  {data.Ratings[0].Value}</h1>
                        <h3><span>Actors:</span> {data.Actors}</h3>
                        <h3><span>Writer:</span> {data.Writer}</h3>
                        <h3><span>Genre:</span> {data.Genre}</h3>
                        <p><span>About</span> "{data.Title}" :</p>
                        <p>{data.Plot}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Movie;