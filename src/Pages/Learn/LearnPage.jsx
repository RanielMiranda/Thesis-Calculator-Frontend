import React from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Topbar from "../../Components/Topbar";
import Navbar from '../../Components/Navbar';

function LearnPage() {
  return (
    <MathJaxContext>
      <div className="bg-bt3 min-h-screen w-full flex flex-col">
        <Topbar bg="bg-bt3" ct2="text-ct1" />

        <div className="flex flex-col w-2/3 mx-auto">
          <div className="flex flex-row items-end justify-end flex-grow space-x-4">
            <Navbar bt3="bg-ct1 " bt2="hover:bg-bt2 " ct2="hover:text-ct2 " tx1="text-ct2"/>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-row w-2/4 mx-auto space-x-4 mt-4">

            {/* Links */}
            <div className = "flex flex-col w-2/6 mx-auto bg-bt2 rounded-2xl justify-center items-center">
                <h className = "text-ct2 text-md font-bold">Links</h>
            </div>

            {/*Right Side */}
            <div className = "flex flex-col w-4/6 mx-auto">
                {/* search bar */}
                <div className="flex flex-row w-full mx-auto justify-center items-center">
                    <input
                        type="text"
                        className="flex w-full rounded-l-lg py-2 px-4 text-ct1 h-full"
                        placeholder="Search..."
                    />
                    <button className="bg-bt2 w-full text-ct2 font-bold text-md rounded-r-lg h-full">Search</button>
                </div>

                {/* content */}
                <div className = "flex flex-col w-full mx-auto bg-ct1 rounded-2xl justify-center items-center mt-4 pb-4">
                    <div className = "flex flex-row w-full mx-auto rounded-2xl justify-center items-center mt-4 space-x-4 pr-4 pl-4">
                        <div className = "flex flex-col w-2/4 mx-auto bg-bt2 rounded-2xl justify-center items-center"> 
                            <div className = "flex bg-ct2 rounded-2xl justify-center items-center mt-4 pr-10 pl-10 pb-20">
                                <h className = "text-ct1 text-sm font-bold"> Basic Rules</h>
                            </div>
                            <h className = "text-ct2 text-sm font-bold"> Basic Rules</h>
                        </div>
                        <div className = "flex flex-col w-2/4 mx-auto bg-bt2 rounded-2xl justify-center items-center"> 
                            <div className = "flex bg-ct2 rounded-2xl justify-center items-center mt-4 pr-10 pl-10 pb-20">
                                <h className = "text-ct1 text-sm font-bold"> Basic Rules</h>
                            </div>
                            <h className = "text-ct2 text-sm font-bold"> Basic Rules</h>
                        </div>
                    </div>

                    <div className = "flex flex-row w-full mx-auto rounded-2xl justify-center items-center mt-4 space-x-4 pr-4 pl-4">
                        <div className = "flex flex-col w-2/4 mx-auto bg-bt2 rounded-2xl justify-center items-center"> 
                            <div className = "flex bg-ct2 rounded-2xl justify-center items-center mt-4 pr-10 pl-10 pb-20">
                                <h className = "text-ct1 text-sm font-bold"> Basic Rules</h>
                            </div>
                            <h className = "text-ct2 text-sm font-bold"> Basic Rules</h>
                        </div>
                        <div className = "flex flex-col w-2/4 mx-auto bg-bt2 rounded-2xl justify-center items-center"> 
                            <div className = "flex bg-ct2 rounded-2xl justify-center items-center mt-4 pr-10 pl-10 pb-20">
                                <h className = "text-ct1 text-sm font-bold"> Basic Rules</h>
                            </div>
                            <h className = "text-ct2 text-sm font-bold"> Basic Rules</h>
                        </div>
                    </div>
                    <div className = "flex flex-row w-full mx-auto rounded-2xl justify-center items-center mt-4 space-x-4 pr-4 pl-4">
                        <div className = "flex flex-col w-2/4 mx-auto bg-bt2 rounded-2xl justify-center items-center"> 
                            <div className = "flex bg-ct2 rounded-2xl justify-center items-center mt-4 pr-10 pl-10 pb-20">
                                <h className = "text-ct1 text-sm font-bold"> Basic Rules</h>
                            </div>
                            <h className = "text-ct2 text-sm font-bold"> Basic Rules</h>
                        </div>
                        <div className = "flex flex-col w-2/4 mx-auto bg-bt2 rounded-2xl justify-center items-center"> 
                            <div className = "flex bg-ct2 rounded-2xl justify-center items-center mt-4 pr-10 pl-10 pb-20">
                                <h className = "text-ct1 text-sm font-bold"> Basic Rules</h>
                            </div>
                            <h className = "text-ct2 text-sm font-bold"> Basic Rules</h>
                        </div>
                    </div>
                    <div className = "flex flex-row w-full mx-auto rounded-2xl justify-center items-center mt-4 space-x-4 pr-4 pl-4">
                        <div className = "flex flex-col w-2/4 mx-auto bg-bt2 rounded-2xl justify-center items-center"> 
                            <div className = "flex bg-ct2 rounded-2xl justify-center items-center mt-4 pr-10 pl-10 pb-20">
                                <h className = "text-ct1 text-sm font-bold"> Basic Rules</h>
                            </div>
                            <h className = "text-ct2 text-sm font-bold"> Basic Rules</h>
                        </div>
                        <div className = "flex flex-col w-2/4 mx-auto bg-bt2 rounded-2xl justify-center items-center"> 
                            <div className = "flex bg-ct2 rounded-2xl justify-center items-center mt-4 pr-10 pl-10 pb-20">
                                <h className = "text-ct1 text-sm font-bold"> Basic Rules</h>
                            </div>
                            <h className = "text-ct2 text-sm font-bold"> Basic Rules</h>
                        </div>
                    </div>
                    <div className = "flex flex-row w-full mx-auto rounded-2xl justify-center items-center mt-4 space-x-4 pr-4 pl-4">
                        <div className = "flex flex-col w-2/4 mx-auto bg-bt2 rounded-2xl justify-center items-center"> 
                            <div className = "flex bg-ct2 rounded-2xl justify-center items-center mt-4 pr-10 pl-10 pb-20">
                                <h className = "text-ct1 text-sm font-bold"> Basic Rules</h>
                            </div>
                            <h className = "text-ct2 text-sm font-bold"> Basic Rules</h>
                        </div>
                        <div className = "flex flex-col w-2/4 mx-auto bg-bt2 rounded-2xl justify-center items-center"> 
                            <div className = "flex bg-ct2 rounded-2xl justify-center items-center mt-4 pr-10 pl-10 pb-20">
                                <h className = "text-ct1 text-sm font-bold"> Basic Rules</h>
                            </div>
                            <h className = "text-ct2 text-sm font-bold"> Basic Rules</h>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    </MathJaxContext>
  );
}

export default LearnPage;

