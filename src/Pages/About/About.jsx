import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="w-full h-full bg-ct2 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Useful Links for Learning Derivatives</h1>
            <ul className="flex flex-col items-center justify-center mt-4">
                <li><a href="https://www.khanacademy.org/math/calculus-1" target="_blank" rel="noopener noreferrer" className="hover:underline">Khan Academy - Calculus</a></li>
               <li><a href="https://www.mathsisfun.com/calculus/derivatives-introduction.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Math is Fun - Derivatives</a></li>
                <li><a href="https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx" target="_blank" rel="noopener noreferrer" className="hover:underline">Paul's Online Math Notes - Calculus I</a></li>
            </ul>

            <Link to="/" className = "bg-bt3 rounded-2xl flex items-center justify-center h-10 px-3 text-sm font-bold mt-4">
                Return to Home
            </Link>
        </div>
    );
}

export default About;

