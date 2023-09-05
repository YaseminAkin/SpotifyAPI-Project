import MiniSidebar from "../componnets/miniSidebar.jsx";

function Search(props) {
    return(
        <div className="grid grid-cols-3 gap-4">
            {/* eslint-disable-next-line react/prop-types */}
            <MiniSidebar logout={props.logout} token ={props.token}/>
        </div>
    );
}

export default Search