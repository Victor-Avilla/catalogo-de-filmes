import { useEffect, useState } from "react"
import api from "../../services/api"
import { Background, Info, Poster, Container, ContainerButtons } from "./style"
import Button from "../../components/Button/Button"
import Slider from "../../components/Slider"
import getImages from "../../utils/getImages"
import Modal from "../../components/Modal"
const Home = () => {
    const [movie, setMovie] = useState('')
    const [topMovie, setTopMovie] = useState('')
    const [topSeries, setTopSeries] = useState('')
    const [upcomingMovies, setUpcomingMovies] = useState('')

    useEffect(() => {
        const getMovies = async () => {
            const { data: { results } } = await api.get('/movie/popular')
            setMovie(results[0])
        }
        const getTopMovies = async () => {
            const { data: { results } } = await api.get('/movie/top_rated')
            setTopMovie(results)
        }

        const getTopSeries = async () => {
            const {data:{results}}=await api.get('/tv/top_rated')
            setTopSeries(results)
        }
        const getUpcomingMovies = async () => {
            const {data:{results}}=await api.get('/movie/upcoming')
            setUpcomingMovies(results)
        }
        
        getMovies()
        getTopMovies()
        getTopSeries()
        getUpcomingMovies()
    }, [])

    return (
        <>
            {movie && (
                <Background $img={getImages(movie.backdrop_path)}>
                    <Modal movieId={movie.id}/>
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button children={"Assistir Agora"} red />
                                <Button children={"Assistir Trailer"} />
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt={movie.title} />
                        </Poster>
                    </Container>

                </Background>
            )}
            {topMovie && <Slider info={topMovie} title={'Melhores Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Melhores Series'} />}
            {upcomingMovies && <Slider info={upcomingMovies} title={'Em Breve'} />}
        </>
    )
}

export default Home