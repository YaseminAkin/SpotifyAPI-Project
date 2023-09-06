import {useEffect, useState} from "react";
import Login from "./pages/login.jsx";
import Home from "./pages/home.jsx"
import Search from "./pages/search.jsx";

function App() {
  const [token, setToken] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    // getToken()

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }

    setToken(token)

  }, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  return !token ? <Login/> : <Search logout={logout} token = {token}/>

}

export default App