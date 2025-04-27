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
            Exploring Derivatives through Data Structures
          </h2>
          <p className="text-lg text-border-600 mb-6 text-dark">
            A platform for exploring how different data structures impact differentiation — accuracy, speed, and clarity.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/solver"
              className="bg-primary text-white font-medium px-5 py-2 rounded hover:bg-primary-light hover:-translate-y-1 transition transform"
            >
              Try Solver
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-bgcolor">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-dark">
            Involed Data Structures
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard title="Abstract Syntax Trees" desc="Trees representing the structure of mathematical expressions." />
            <FeatureCard title="Directed Acyclic Graphs" desc="Graphs representing the dependencies between derivative rules." />
            <FeatureCard title="Nested Linked Lists" desc="Dynamic lists representing the nested structure of derivative rules." />
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
