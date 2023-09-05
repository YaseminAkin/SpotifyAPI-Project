function PlaylistDisplay() {
    return (
        <div>
            <img className="object-cover w-full h-96 md:h-auto md:w-48" src="src/componnets/Spotify_Logo_RGB_Green.png" alt="Playlist cover image"></img>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
        </div>
    );
}

export default PlaylistDisplay