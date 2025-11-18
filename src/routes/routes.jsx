import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Series from '../pages/Series'
import Movies from '../pages/Movies'
import DefaultLayout from '../layout/DefaultLayout'

const Router = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout/>}>

                <Route path='/' element={<Home />} />
                <Route path='/series' element={<Series />} />
                <Route path='/filmes' element={<Movies />} />

            </Route>
        </Routes>
    )

}

export default Router