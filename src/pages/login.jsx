function login() {
    const CLIENT_ID = "9d8a954cd78a4e728243fd2c9b64c31e"
    const REDIRECT_URI = "http://localhost:5173"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    return(
        <div className="m-[20rem]">
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className="flex justify-center">
                <button type="button" className="text-white bg-green-600 hover:bg-green-400 font-medium rounded-lg text-2xl px-10 py-5 text-center">Login with Spotify</button>
            </a>
        </div>
    );
}
export default login