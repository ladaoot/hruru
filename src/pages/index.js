import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'

export const Pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}
