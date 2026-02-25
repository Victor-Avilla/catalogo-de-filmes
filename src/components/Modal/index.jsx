import { useEffect, useState } from "react"
import { Background, Container, CloseButton } from "./styles"
import { getMovieVideo } from "../../services/getData"
function Modal({ movieId, setShowModal }) {
    const [movie, setMovie] = useState('')

    useEffect(() => {
        const getMovies = async () => {
        setMovie(await getMovieVideo(movieId))
        }
        getMovies()
        console.log(movie)
    }, [])
    return (
        <Background onClick={() => setShowModal(false)}>
            {movie && (
                <Container> 
                    <CloseButton onClick={() => setShowModal(false)}>x</CloseButton>
                    <iframe src={`https://www.youtube.com/embed/${movie.key}?controls=0&showinfo=0&rel=0`} width="100%" height="500px"></iframe>
                </Container>)}

        </Background>

    )
}
export default Modal