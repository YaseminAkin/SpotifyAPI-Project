import React, {useEffect, useState} from "react";
import Login from "./pages/login.jsx";
import Home from "./pages/home.jsx";
import Playlist from "./pages/playlist.jsx";
import Search from "./pages/search.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
    const [token, setToken] = useState('');

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem('token');

        if (!token && hash) {
            token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];

            window.location.hash = '';
            window.localStorage.setItem('token', token);
        }

        setToken(token);
    }, []);

    const logout = () => {
        setToken('');
        window.localStorage.removeItem('token');
    };

    let content;
    if (!token) {
        content = <Login />;
    } else {
        content = <Home logout={logout} token={token} />;
    }


    function PlaylistWrapper() {

        if (!token) {
            return <Login />;
        } else {
            return <Playlist logout={logout} token={token}/>;
        }
    }

    function SearchWrapper() {
        if (!token) {
            return <Login />;
        } else {
            return <Search logout={logout} token={token} />;
        }
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: content,
        },
        {
            path: '/playlist/:playlistId',
            element: <PlaylistWrapper />,
        },
        {
            path: '/search',
            element: <SearchWrapper />,
        },
    ]);
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App