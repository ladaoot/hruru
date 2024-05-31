import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import { Register } from './Register'
import { RegisterUser } from './RegisterUser'
import { RegisterCompany } from './RegisterCompany'

export const Pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/registration' element={<Register/>}/>
                <Route path='/registration/user' element={<RegisterUser/>}/>
                <Route path='/registration/company' element={<RegisterCompany/>}/>
            </Routes>
        </BrowserRouter>
    )
}
