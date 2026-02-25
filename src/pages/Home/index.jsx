import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { getMovies, getTopMovies, getTopSeries, getUpcomingMovies } from "../../services/getData"

import { Background, Info, Poster, Container, ContainerButtons } from "./style"
import Button from "../../components/Button"
import Slider from "../../components/Slider"
import getImages from "../../utils/getImages"
import Modal from "../../components/Modal"
const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState('')
    const [topMovie, setTopMovie] = useState('')
    const [topSeries, setTopSeries] = useState('')
    const [upcomingMovies, setUpcomingMovies] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const getAllData = async () => {
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getUpcomingMovies()
            ]).then(([movies, topMovies, topSeries, upcomingMovies]) => {
                setMovie(movies)
                setTopMovie(topMovies)
                setTopSeries(topSeries)
                setUpcomingMovies(upcomingMovies)
            }).
            catch((error) => console.log(error))

        }

        getAllData()
    }, [])
    return (
        <>
            {movie && (
                <Background $img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button onClick={() => navigate(`/detalhes/${movie.id}`)} children={"Assistir Agora"} red />
                                <Button onClick={() => setShowModal(true)} children={"Assistir Trailer"} />
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