import React from 'react';
import Topbar from '../../Components/Topbar';
import { Link } from 'react-router-dom';
import Bottomcontent from '../../Components/Bottomcontent';

function HomePage() {
  return (
    <div className="bg-ct2 min-h-screen w-full flex flex-col">
      {/* Topbar */}
         <Topbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        {/* Text Content */}
        <div className="text-center max-w-2xl">
          <strong className="text-tx1 text-lg font-bold">
            Master Differentiation
          </strong>
          <br />
          <strong className="text-tx1 text-lg font-bold">
            with Learner-Friendly Step-by-Step Solutions!
          </strong>
          <div className="mt-4">
            <p className="text-tx1 text-sm leading-relaxed">
              The Derivative Solver with Equation Generator is an interactive web-based application
              that helps students master differentiation. It provides step-by-step solutions that
              clearly show the differentiation rules used at each stage. The app includes an equation
              generator that creates structured derivative problems for practice, an interactive mode
              where users can manually apply differentiation rules, and a Learn section with
              explanations and examples. The system improves learning by making calculus more
              engaging, efficient, and understandable.
            </p>
          </div>
        </div>

        {/* Icons Content */}
        <div className="mt-8">
            <div className="flex space-x-4 justify-center">
                {/* Box 1: Solver */}
                <Link to="/solver">
                    <div className="w-64 h-48 bg-ct1 rounded-2xl flex flex-col items-center justify-center">
                        <div className="w-2/4 h-2/4 bg-ct2 rounded-2xl flex items-center justify-center">
                            <span className="text-tx1 text-lg font-semibold">Icon</span>
                        </div>
                        <span className="text-ct2 text-lg mt-2">Solver</span>
                    </div>
                </Link>

                {/* Box 2: Learn */}
                <Link to="/learn">
                <div className="w-64 h-48 bg-bt3 rounded-2xl text-lg flex flex-col items-center justify-center">
                    <div className="w-2/4 h-2/4 bg-ct2 rounded-2xl flex items-center justify-center">
                        <span className="text-tx1 text-lg font-semibold">Icon</span>
                    </div>
                    <span className="text-tx1 text-lg mt-2">Learn</span>
                </div>
                </Link>

                {/* Box 3: Generate */}
                <Link to="/generate">
                  <div className="w-64 h-48 bg-bt1 rounded-2xl flex flex-col items-center justify-center">
                    <div className="w-2/4 h-2/4 bg-ct2 rounded-2xl flex items-center justify-center">
                        <span className="text-tx1 text-lg font-semibold">Icon</span>
                    </div>
                    <span className="text-ct2 text-lg mt-2">Generate</span>
                </div>
                </Link>
            </div>
        </div>

        {/* Bottom Content (Placeholder) */}
        <div className="mt-20 ">
          {/* Add bottom content here later */}
            <Bottomcontent />
        </div>
      </div>
    </div>
  );
}

export default HomePage;