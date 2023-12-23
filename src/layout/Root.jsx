import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Home, About, Projects, Contact } from '../pages'
import Navbar from '../components/Navbar/Navbar';

const Root = () => {
    return (
        <main>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/about' element={<About></About>}></Route>
                    <Route path='/projects' element={<Projects></Projects>}></Route>
                    <Route path='/contact' element={<Contact></Contact>}></Route>
                </Routes>
            </Router>
        </main>
    );
};

export default Root;