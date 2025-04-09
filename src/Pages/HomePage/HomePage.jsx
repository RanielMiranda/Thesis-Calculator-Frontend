import React from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import Bottomcontent from "../../Components/Bottomcontent";

export default function HomePage() {
  return (
    <div className="bg-bgcolor min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-16 bg-gradient-to-tr from-gradient1 to-gradient2">
        <div className="flex-1 text-center">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Learn Calculus Derivatives
          </h2>
          <p className="text-lg text-border-600 mb-6 text-dark">
            Interactive tools for learning and practicing differentiation
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/solver"
              className="bg-primary text-white font-medium px-5 py-2 rounded hover:bg-primary-light hover:-translate-y-1 transition transform"
            >
              Try Solver
            </Link>
            <Link
              to="/generate"
              className="bg-secondary text-dark font-medium px-5 py-2 rounded hover:bg-border hover:-translate-y-1 transition transform"
            >
              Practice Problems
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-bgcolor">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-dark">
            Key Features
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard title="Step-by-Step Solutions" desc="See exactly how each derivative is calculated with detailed steps." />
            <FeatureCard title="Multiple Rule Support" desc="Power Rule, Chain Rule, Product Rule, and more." />
            <FeatureCard title="Practice Generator" desc="Generate unlimited practice problems with rule configuration." />
          </div>
        </div>
      </section>

   {/* Bottomcontent Placeholder */}
        <div className ="flex-1 mt-20">
          <Bottomcontent />
        </div >
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-light p-10 rounded-xl shadow-lg hover:-translate-y-1 transition transform ">
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-dark">{desc}</p>
    </div>
  );
}
