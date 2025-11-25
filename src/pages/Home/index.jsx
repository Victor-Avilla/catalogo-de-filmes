import api from "../../services/api"
const Home = () => {

    const getMovies = async () => {
        const data = await api.get('/movie/popular')
        console.log(data)
    }
    getMovies()
    return (
        <>
            <div>tiktler</div>
        </>
    )
}

export default Home