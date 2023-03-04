import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import Favrecipe from "./Favrecipe";
function Navbar(){
    const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
    const countFav = useSelector((state) => state.addfAV.count);
    console.log(user)
    return (
      <div id="navbar">
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/Favrecipe">{user.name.charAt(0).toUpperCase()}</Link>
              <span id="counter">{countFav}</span>
            </li>
          )}

          {isAuthenticated ? (
            <li>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              {" "}
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          )}
        </ul>
      </div>
    );
    }
    export default Navbar;