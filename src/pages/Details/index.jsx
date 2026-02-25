import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideo, } from "../../services/getData"
import { Background, Container, Cover, Info } from "./styles"
import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits"
import getImages from "../../utils/getImages"

function Details() {
    const { id } = useParams()
    const [movie, setMovie] = useState('')
    const [movieVideo, setMovieVideo] = useState('')
    const [movieCredits, setMovieCredits] = useState('')
    const [movieSimilar, setMovieSimilar] = useState('')
    useEffect(() => {
        const getAllData = async () => {
            Promise.all([
                getMovieById(id),
                getMovieVideo(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ]).then(([movie, video, credits, similar]) => {
                setMovie(movie)
                setMovieVideo(video)
                setMovieCredits(credits)
                setMovieSimilar(similar)
            }).catch((error) => console.log(error))
        }

        getAllData()
    }, [])

    return (
        <>
            {movie && (<>
            <Background image={getImages(movie.backdrop_path)} />
            <Container>
                <Cover>
                    <img src={getImages(movie.poster_path)} alt="poster-image" />
                </Cover>
                <Info>
                    <h2>{movie.title}</h2>
                    <SpanGenres genres={movie.genres}/>
                    <p>{movie.overview}</p>
                    <div><Credits credits={movieCredits}/></div>
                </Info>
            </Container>
            </>)}
        </>

    )
}
export default Details