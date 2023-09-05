import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import PlaylistDisplay from "./playlistDisplay.jsx";
function MiniSidebar(props) {

    const[playlists, setPlaylists] = useState([]);

    useEffect(() => {
        console.log("useEffect is running");
        // eslint-disable-next-line react/prop-types
        requestPlaylists(props.token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function requestPlaylists(token) {
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
        const userId = json.id;

        try{
            const res = await fetch(
                `https://api.spotify.com/v1/users/${userId}/playlists`, {
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

    return(
        <div>
            <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={props.logout}>Logout</button>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center bg-zinc-900 p-2 mt-1 ml-1 sm:hidden text-sm text-slate-400 rounded-md hover:text-white">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <aside id="default-sidebar" className="ml-1 mt-1 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="bg-zinc-900 overflow-y-auto rounded-md">
                    <ul className="font-normal">
                        <li>
                            <a href="" className="flex items-center p-4 text-slate-400 hover:text-white focus:text-white">
                                <svg className="w-6 h-6" id="icon1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeWidth="1.5" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
                                </svg>
                                <span className="ml-5">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-4 text-slate-400 hover:text-white focus:text-white">
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeWidth="1.5" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="flex-1 ml-5 whitespace-nowrap">Search</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <aside id="default-sidebar-2" className="ml-1 mt-1 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="bg-zinc-900 overflow-y-auto rounded-md">
                    <ul className="space-y-2">
                        <li className="flex flex-row items-center gap-x-40">
                            <a className="flex flex-row ml-4 text-slate-400 hover:text-white" data-tooltip-target="tooltip-no-arrow">
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 10">
                                    <path stroke="currentColor" strokeWidth="1.5" d="M6 1h10M6 5h10M6 9h10M1.49 1h.01m-.01 4h.01m-.01 4h.01"/>
                                </svg>
                                <span className="ml-5">Your Library</span>
                            </a>
                            <div id="tooltip-no-arrow" role="tooltip" className="absolute z-10 ml-2 invisible inline-block px-3 py-2 text-sm font-sm opacity-0 rounded-md text-slate-100 bg-zinc-800 tooltip">
                                Collapse Your Library
                            </div>
                            <div className="flex items-center flex-row">
                                <a href="#" className="p-2 m-2 text-slate-400 hover:bg-zinc-800 hover:text-white rounded-full text-sm" data-tooltip-target="tooltip-no-arrow2">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeWidth="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </a>
                                <div id="tooltip-no-arrow2" role="tooltip" className="absolute z-10 ml-2 invisible inline-block px-3 py-2 text-sm font-sm opacity-0 rounded-md text-slate-100 bg-zinc-800 tooltip">
                                    Create playlist or folder
                                </div>
                                <button data-drawer-target="extra" data-drawer-toggle="extra" className="p-2 m-2 text-slate-400 hover:bg-zinc-800 hover:text-white rounded-full text-sm" data-tooltip-target="tooltip-no-arrow3">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeWidth="1.5" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </button>
                                <div id="tooltip-no-arrow3" role="tooltip" className="absolute z-10 ml-2 invisible inline-block px-3 py-2 text-sm font-sm opacity-0 rounded-md text-slate-100 bg-zinc-800 tooltip">
                                    Show more
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-slate-400 hover:text-white">
                                <svg className="ml-4 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeWidth="1.5" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="flex-1 ml-5 text-sm whitespace-nowrap">Search in Your Library</span>
                            </a>
                        </li>
                        <li>
                            <ul role="list" className ="my-2">
                                {playlists.map((playlist) => (
                                    <li key={playlist.id} className="mx-2 rounded-md py-3 sm:py-4 px-4 hover:bg-zinc-800">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img className="w-12 h-12 rounded-sm" src={playlist.images[0].url} alt="Playlist image"></img>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-lg text-white truncate">
                                                    {playlist.name}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {playlist.type.charAt(0).toUpperCase() + playlist.type.slice(1)} · {playlist.owner.display_name}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

MiniSidebar.propTypes = {
    logout: PropTypes.func.isRequired, // Validates that 'logout' is a required function prop
};

export default MiniSidebar