import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Home, About, Projects, Contact } from '../pages'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <main className='bg-slate-300/20 h-full'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/about' element={<About></About>}></Route>
                    <Route path='/projects' element={<Projects></Projects>}></Route>
                    <Route path='/contact' element={<Contact></Contact>}></Route>
                </Routes>
                <Footer />
            </Router>
        </main>
    );
};

export default Root;