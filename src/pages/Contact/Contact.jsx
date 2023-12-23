import Tilt from 'react-parallax-tilt';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center bg-bottom" style={{ backgroundImage: `url(public/img/bg-4.jpg)`, backgroundSize: 'cover' }} >
                <Tilt>
                    <div className="container min-h-96 w-72 mx-auto md:min-h-[400px] md:w-[400px] bg-black bg-opacity-70 rounded-lg shadow-5xl border border-white border-opacity-30 border-l-0 border-b-0 backdrop-blur-sm px-2 pb-5 md:p-5">
                        <form className="h-full flex flex-col justify-start items-center p-2 md:p-5">
                            <div className="text-4xl font-extralight tracking-widest text-white my-5 md:mb-10">Get in Touch</div>
                            <input className="input-text mb-3 md:mb-6" type="text" name="name" placeholder="Name" required />
                            <input className="input-text mb-3 md:mb-6" type="email" name="email" placeholder="E-mail" required />
                            <textarea className="input-text mb-3 md:mb-6" rows={4} type="text" name="textarea" placeholder="Write your thoughts here..." required></textarea>
                            <input className="cursor-pointer px-6 py-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80 transition duration-300 ease-in-out" type="submit" value="Submit" />
                        </form>
                    </div>
                </Tilt>
            </div >
            <ToastContainer></ToastContainer>
        </>
    )
}

export default Contact