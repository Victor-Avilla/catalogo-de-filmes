import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Series from '../pages/Series'
import Movies from '../pages/Movies'
import DefaultLayout from '../layout/DefaultLayout'
import Details from '../pages/Details'

const Router = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout/>}>

                <Route path='/' element={<Home />} />
                <Route path='/series' element={<Series />} />
                <Route path='/filmes' element={<Movies />} />
                <Route path='/detalhes/:id' element={<Details />} />

            </Route>
        </Routes>
    )

}

export default Router