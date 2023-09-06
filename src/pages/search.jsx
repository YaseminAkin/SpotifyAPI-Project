import MiniSidebar from "../componnets/miniSidebar.jsx";
import {useEffect, useState} from "react";

function Search(props) {
    const[searchKey, setSearchKey] = useState("");
    const [artist, setArtist] = useState("");
    useEffect(() => {
        console.log("use")
        // eslint-disable-next-line react/prop-types
        search(props.token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchKey]);
    async function search(token) {

        const res = await fetch(
            'https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album', {
                method: 'GET',
                headers: {'Authorization' : 'Bearer ' + token}
            }
        );
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const json = await res.json();
        const artistName = json.tracks.href;
        setArtist(artistName);
    }

    return(
        <div className="grid grid-cols-4">
            {/* eslint-disable-next-line react/prop-types */}
            <MiniSidebar token ={props.token}/>
            <div className="col-span-3 m-1 bg-zinc-900 rounded-md">
                <div className="flex flex-row m-5">
                    <div className="flex flex-row gap-x-1">
                        <a href="#" className="p-4 mr-0 bg-zinc-950 bg-opacity-60 text-white text-opacity-70 rounded-full text-sm">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                            </svg>
                        </a>
                        <a href="#" className="p-4 ml-0 bg-zinc-950 bg-opacity-60 text-white text-opacity-70 rounded-full text-sm">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                            </svg>
                        </a>
                    </div>
                    <form className="ml-5">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" onChange={(e) => setSearchKey(e.target.value)} className="block w-[23rem] p-3 pl-10 text-sm rounded-full border-0 text-white bg-zinc-800 hover:ring-1 hover:ring-zinc-700 focus:ring-white focus:border-white placeholder-gray-400" placeholder="What do you want to listen to?"></input>
                        </div>
                    </form>
                    {/* eslint-disable-next-line react/prop-types */}
                    <button type="button" className="text-white border-2 border-zinc-800 bg-zinc-900 hover:bg-zinc-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={props.logout}>Logout</button>
                </div>
                <div className="ml-5 mr-5 mt-7 mb-5">
                    <p className="font-semibold text-2xl text-white mb-5">Browse all</p>
                    <div className="grid grid-cols-5 gap-4">
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                        <img alt="Browse all card" src="src/pages/icon4@2x.png" className="w-[12rem] h-[12rem] rounded-md"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search