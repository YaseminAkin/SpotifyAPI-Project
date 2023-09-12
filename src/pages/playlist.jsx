import MiniSidebar from "../componnets/miniSidebar.jsx";
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

function Playlist(props) {

    const { playlistId } = useParams();

    let count = 1;
    let durationSum = 0;

    const initialPlaylist = {
        name: "test",
        owner: {
            display_name: "test",
            id: "test"
        },
        public: "test",
        images: [
            {
                url: "test"
            }
        ],
        tracks: {
            total: 0,
            items: [
                {
                    added_at: "test",
                    track: {
                        album: {
                            name: "test",
                            images: [
                                {
                                    url: "test"
                                }
                            ]
                        },
                        artists: [
                            {
                                name: "test"
                            }
                        ],
                        duration_ms: 0,
                        name: "test",
                        track_number: 0,
                        id: "test"
                    }
                }
            ]
        },
        type :"test"
    };

    const[playlist, setPlaylist] = useState(initialPlaylist);
    const[userImage, setUserImage] = useState("");

    useEffect(() => {
        // eslint-disable-next-line react/prop-types,no-unused-vars
        const promise = requestPlaylist(props.token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playlistId]);

    useEffect(() => {
        // eslint-disable-next-line react/prop-types,no-unused-vars
        const promise1 = requestUserImage(props.token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function requestPlaylist(token) {
        const res = await fetch(
            `https://api.spotify.com/v1/playlists/${playlistId}`, {
                method: 'GET',
                headers: {'Authorization' : 'Bearer ' + token}
            }
        );
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const json = await res.json();
        setPlaylist(json);
    }

    async function requestUserImage(token) {
        const res = await fetch(
            `https://api.spotify.com/v1/users/${playlist.owner.id}`, {
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

    function formatDuration(durationInMilliseconds) {
        // Calculate minutes and seconds
        const minutes = Math.floor(durationInMilliseconds / 60000);
        const seconds = ((durationInMilliseconds % 60000) / 1000).toFixed(0);

        // Use template literals to format the result as "minutes:seconds"
        return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
    }

    function formatDurationHour(milliseconds) {
        // Calculate hours, minutes, and seconds
        const hours = Math.floor(milliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));

        // Construct the formatted string
        let formattedDuration = '';

        if (hours > 0) {
            formattedDuration += `${hours} hr`;
        }

        if (minutes > 0) {
            formattedDuration += ` ${minutes} min`;
        }

        return formattedDuration;
    }

    return(
        <div className="grid grid-cols-4">
            {/* eslint-disable-next-line react/prop-types */}
            <MiniSidebar token ={props.token}/>
            <div className="col-span-3 m-1 rounded-md bg-gradient-to-b from-pink-500 to-zinc-900 overflow-y-auto" style={{ maxHeight: '100vh' }}>
                <div className="">
                    <div className="h-auto">
                        <div className="flex flex-row justify-between m-5">
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
                            <a onClick={props.logout}>
                                <img alt="Profile Image" className="mr-3 border-neutral-700 hover:border-neutral-900 border-4 rounded-full w-[2rem] h-[2rem]" src={userImage}></img>
                            </a>
                        </div>
                        <div className="flex mt-10 mb-7">
                            <img alt="Playlist img" src={playlist.images[0].url} className="w-[14.5rem] h-[14.5rem] ml-5"></img>
                            <div className="ml-7 mt-12 text-white">
                                <h6 className="text-sm mt-5">{playlist.public ? `Public ${playlist.type.charAt(0).toUpperCase() + playlist.type.slice(1)}` : '${playlist.type.charAt(0).toUpperCase() + playlist.type.slice(1)}'}</h6>
                                <h1 className="text-7xl font-extrabold mt-5">{playlist.name}</h1>
                                <div className="flex  mt-6 items-center">
                                    <img alt="Profile Image" className="mr-2 rounded-full w-[1.5rem] h-[1.5rem]" src={userImage}></img>
                                    <h6 className="text-sm font-bold">{playlist.owner.display_name} · <span className="font-normal">{playlist.tracks.total} songs, <span className="opacity-75">{formatDurationHour(durationSum)}</span></span></h6>
                                    <h6 className="text-sm"></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-pink-800 to-zinc-900 h-auto rounded-b-md">
                    <div className="flex items-center p-7">
                        <svg className="w-[4rem] h-[4rem] hover:w-[4.2rem] hover:h-[4.2rem] text-green-500 hover:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9 13a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0v6Zm4 0a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0v6Z"/>
                        </svg>
                        <svg data-tooltip-target="tooltip-no-arrowP" className="ml-10 w-[1.5rem] h-[1.5rem] hover:w-[1.6rem] hover:h-[1.6rem] text-white opacity-70 hover:opacity-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                        </svg>
                        <div id="tooltip-no-arrowP" role="tooltip" className="absolute z-10 ml-2 invisible inline-block px-3 py-2 text-sm font-sm opacity-0 rounded-md text-slate-100 bg-zinc-800 tooltip">
                            More options on playlist_name
                        </div>
                    </div>
                    <div className="m-5 mt-0 relative overflow-x-auto">
                        <table className="w-full text-sm text-white text-left">
                            <thead className="border-b border-white border-opacity-20">
                            <tr className="opacity-60">
                                <th scope="col" className="pl-6 pb-2 font-normal" style={{ width: '5%' }}>
                                    #
                                </th>
                                <th scope="col" className="pb-2 font-normal" style={{ width: '45%' }}>
                                    Title
                                </th>
                                <th scope="col" className="pb-2 font-normal" style={{ width: '30%' }}>
                                    Album
                                </th>
                                <th scope="col" className="pb-2 font-normal" style={{ width: '15%' }}>
                                    Date added
                                </th>
                                <th scope="col" className="pb-2 font-normal" style={{ width: '15%' }}>
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {playlist.tracks.items.map((track) => (
                                <tr key={track.track.id}>
                                    <th scope="row" className="pl-6 pt-3 whitespace-nowrap opacity-60 font-normal text-lg">
                                        {count++}
                                    </th>
                                    <td className="pt-3">
                                        <div className="flex">
                                            <img alt="Song img" src={track.track.album.images[0].url} className="w-[2.7rem] h-[2.7rem]"></img>
                                            <div className="ml-3">
                                                <h5 className="text-base">{track.track.name}</h5>
                                                <h6 className="opacity-60">
                                                    {track.track.artists.map((artist, index) => (
                                                        <span key={artist.id}>
                                                            {artist.name}
                                                            {index < track.track.artists.length - 1 ? ', ' : ''}
                                                        </span>
                                                    ))}
                                                </h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pt-3 opacity-60">
                                        {track.track.album.name}
                                    </td>
                                    <td className="pt-3 opacity-60">
                                        {new Date(track.added_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                        })}
                                    </td>
                                    <td className="pt-3 opacity-60">
                                        {formatDuration(track.track.duration_ms)}
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Playlist