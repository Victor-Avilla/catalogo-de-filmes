import api from "../../services/api"
import { Background } from "./style"
const Home = () => {

    const getMovies = async () => {
        const data = await api.get('/movie/popular')
        console.log(data.data.results[0])
    }
    getMovies()
    return (
        <Background img="https://image.tmdb.org/t/p/original/hpXBJxLD2SEf8l2CspmSeiHrBKX.jpg">
            <div>tiktler</div>
        </Background>
    )
}

export default Home