import { Link } from 'react-router-dom';
export default function Navbar({ bt3, bt2, ct2, tx1 }) {

    return (
        <div className="flex flex-row items-end justify-end flex-grow space-x-4">
            <Link to="/">
                <button className={`${bt3} ${bt2} ${ct2} ${tx1} rounded-2xl flex items-center justify-center h-10 px-3 text-sm font-bold`}>
                    Home
                </button>
            </Link>
            <Link to="/solver">
                <button className={`${bt3} ${bt2} ${ct2} ${tx1} rounded-2xl flex items-center justify-center h-10 px-3 text-sm font-bold`}>
                    Solver
                </button>
            </Link>
            <Link to="/learn">
                <button className={`${bt3} ${bt2} ${ct2} ${tx1} rounded-2xl flex items-center justify-center h-10 px-3 text-sm font-bold`}>
                    Learn
                </button>
            </Link>
            <Link to="/generate">
                <button className={`${bt3} ${bt2} ${ct2} ${tx1} rounded-2xl flex items-center justify-center h-10 px-3 text-sm font-bold`}>
                    Generate
                </button>
            </Link>
        </div>
    );
}

