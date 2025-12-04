import { useEffect, useState } from "react"
import api from "../../services/api"
import { Background, Info, Poster, Container, ContainerButtons } from "./style"
import Button from "../../components/Button/Button"
import Slider from "../../components/Slider"
import getImages from "../../utils/getImages"
const Home = () => {
    const [movie, setMovie] = useState('')
    const [topMovie, setTopMovie] = useState('')

    useEffect(() => {
        const getMovies = async () => {
            const { data: { results } } = await api.get('/movie/popular')
            setMovie(results[10])
        }
        getMovies()
    }, [])
    
    useEffect(() => {
        const getTopMovies = async () => {
            const { data: { results } } = await api.get('/movie/top_rated')
            setTopMovie(results)
            console.log(results)
        }
        getTopMovies()
    }, [])

    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
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
           {topMovie && <Slider info={topMovie} title={'Top Filmes'}/>}
        </>
    )
}

export default Home