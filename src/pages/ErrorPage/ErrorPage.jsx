import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="px-20 py-14 bg-green-500 bg-opacity-60 rounded-3xl flex flex-col items-center justify-center">
                <h1 className="text-3xl center">Error: 404</h1>
                <Link className="btn btn-ghost" to='/'>Go Back Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;