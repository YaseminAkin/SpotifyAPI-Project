import MiniSidebar from "../componnets/miniSidebar.jsx";
import {useEffect, useState} from "react";

function Search(props) {

    const[userImage, setUserImage] = useState("");
    const[searchKey, setSearchKey] = useState("");
    const [tracks, setTracks] = useState([]);
    const[showResult, setShowResult] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react/prop-types,no-unused-vars
        const promise = search(props.token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchKey]);

    useEffect(() => {
        // eslint-disable-next-line react/prop-types,no-unused-vars
        const promise1 = requestUserImage(props.token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function requestUserImage(token) {
        const res = await fetch(
            `https://api.spotify.com/v1/me`, {
                method: 'GET',
                headers: {'Authorization' : 'Bearer ' + token}
            }
        );
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const json = await res.json();
        setUserImage(json.images[0].url);
    }

    async function search(token) {
        const res = await fetch(
            `https://api.spotify.com/v1/search?q=${searchKey}&type=track`, {
                method: 'GET',
                headers: {'Authorization' : 'Bearer ' + token}
            }
        );
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const json = await res.json();
        setTracks(json.tracks.items);
        setShowResult(true);
    }

    function formatDuration(durationInMilliseconds) {
        // Calculate minutes and seconds
        const minutes = Math.floor(durationInMilliseconds / 60000);
        const seconds = ((durationInMilliseconds % 60000) / 1000).toFixed(0);

        // Use template literals to format the result as "minutes:seconds"
        return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
    }

    return(
        <div className="grid grid-cols-4">
            {/* eslint-disable-next-line react/prop-types */}
            <MiniSidebar token ={props.token}/>
            <div className="col-span-3 m-1 bg-zinc-900 rounded-md overflow-y-auto" style={{ maxHeight: '100vh' }}>
                <div className="flex flex-row m-5 justify-between">
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
                    </div>
                    {/* eslint-disable-next-line react/prop-types */}
                    <a onClick={props.logout}>
                        <img alt="Profile Image" className="mr-3 border-neutral-700 hover:border-neutral-900 border-4 rounded-full w-[2rem] h-[2rem]" src={userImage}></img>
                    </a>
                </div>
                {!showResult ? (
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
                    </div>) : (
                    <div className="ml-5 mr-5 mt-7 mb-5">
                        <p className="font-semibold text-2xl text-white mb-5">Songs</p>
                        {tracks.map((track) => (
                        <div key={track.id} className="ml-3 mb-3 hover:bg-zinc-800 rounded-md w-[32rem]">
                            <div className="flex text-white p-2">
                                <div className="flex w-96">
                                    <img alt="Song img" src={track.album.images[0].url} className="w-[3rem] h-[3rem]"></img>
                                    <div className="ml-3">
                                        <h5 className="text-sm">{track.name}</h5>
                                        <h6 className="opacity-60 text-sm mt-2">
                                            {track.artists.map((artist, index) => (
                                                <span key={artist.id}>
                                                    {artist.name}
                                                    {index < track.artists.length - 1 ? ', ' : ''}
                                                </span>
                                            ))}
                                        </h6>
                                    </div>
                                </div>
                                <h6 className="opacity-60 text-sm">{formatDuration(track.duration_ms)}</h6>
                                <svg className=" w-4 h-4 text-white opacity-75 text mt-4 ml-10 hover:text-green-500" aria-hidden=" true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-tooltip-target="tooltip-no-arrow6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                <div id="tooltip-no-arrow6" role="tooltip" className="absolute z-10 ml-2 invisible inline-block px-3 py-2 text-sm font-sm opacity-0 rounded-md text-slate-100 bg-zinc-800 tooltip">
                                    Add to playlist
                                </div>
                            </div>
                        </div>
                            ))}
                    </div>)
                }
            </div>
        </div>
    );
}

export default Search