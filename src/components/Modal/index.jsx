import { useEffect,useState } from "react"
import { Background,Container } from "./styles"
import api from '../../services/api'
function Modal({ movieId }) {
    const [movie, setMovie] = useState('')
    useEffect(() => {
        const getMovies = async () => {
            const { data: { results } } = await api.get(`/movie/${movieId}/videos`)
            console.log(movieId)
            setMovie(results[0])
        }
        getMovies()
    }, [])
    return (
        <Background>
            {movie && (
                <Container>
                    <iframe src={`https://www.youtube.com/embed/${movie.key}`} width="100%" height="500px"></iframe>
                </Container>)}

        </Background>

    )
}
export default Modal