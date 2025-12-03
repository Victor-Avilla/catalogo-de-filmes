import { useEffect, useState } from "react"
import api from "../../services/api"
import { Background, Info, Poster, Container, ContainerButtons } from "./style"
import Button from "../../components/Button/Button"
const Home = () => {
    const [movie, setMovie] = useState('')
    useEffect(() => {
        const getMovies = async () => {
            const { data: { results } } = await api.get('/movie/popular')
            setMovie(results[10])
        }
        getMovies()
    }, [])

    return (
        <>
            {movie && (
                <Background img={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}>
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
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                        </Poster>
                    </Container>

                </Background>
            )}
        </>
    )
}

export default Home