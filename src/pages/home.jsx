import MiniSidebar from "../componnets/miniSidebar.jsx";
import {useEffect, useState} from "react";

function Home(props) {
    const[playlists, setPlaylists] = useState([]);
    const[name, setName] = useState("");
    useEffect(() => {
        console.log("useEffect is running");
        // eslint-disable-next-line react/prop-types
        requestPlaylists(props.token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        console.log("useEffect2 is running");
        // eslint-disable-next-line react/prop-types
        requestName(props.token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function requestPlaylists(token) {

        try{
            const res = await fetch(
                'https://api.spotify.com/v1/me/playlists?limit=6&offset=0', {
                    method: 'GET',
                    headers: {'Authorization' : 'Bearer ' + token}
                }
            );
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const json = await res.json();

            setPlaylists(json.items);
        }catch (error) {
            console.error('Error fetching playlists:', error);
        }
    }
    async function requestName(token) {

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
        const userName = json.display_name;
        setName(userName);
    }
    return(
        <div className="grid grid-cols-4">
            {/* eslint-disable-next-line react/prop-types */}
            <MiniSidebar token ={props.token}/>
            <div className="col-span-3 m-1 rounded-md bg-sky-800">
                <div className="bg-gradient-to-b from-sky-800 to-zinc-900 h-96">
                    <div className="flex flex-row space-x-96 m-5">
                        <div className="flex flex-row gap-x-1">
                            <a href="#" className="p-3 mr-0 bg-zinc-900 bg-opacity-50 text-white text-opacity-70 rounded-full text-sm">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                                </svg>
                            </a>
                            <a href="#" className="p-3 ml-0 bg-zinc-900 bg-opacity-50 text-white text-opacity-70 rounded-full text-sm">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                                </svg>
                            </a>
                        </div>
                        {/* eslint-disable-next-line react/prop-types */}
                        <button type="button" className="text-white bg-zinc-900 hover:bg-zinc-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={props.logout}>Logout</button>
                    </div>
                    <div className="flex justify-start ml-5 mb-5">
                        <p className="font-semibold text-4xl text-white">Good afternoon</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 ml-5 mr-5">
                        {playlists.map((playlist) => (
                            <div key={playlist.id} className="mx-1 rounded-md bg-zinc-500 bg-opacity-20 hover:bg-zinc-400 hover:bg-opacity-30">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-[5rem] h-[5rem] rounded-l-md" src={playlist.images[0].url} alt="Playlist image"></img>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-md font-semibold text-white truncate">
                                            {playlist.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-zinc-900 h-[30rem]">
                    <div className="flex justify-start ml-5 mb-5">
                        <p className="font-semibold text-2xl text-white">Made for {name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home