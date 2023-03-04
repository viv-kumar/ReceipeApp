import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../Components/style.css";
function Favrecipe(){
    let navigate = useNavigate();
    const additem = useSelector((state) => state.addfAV.fav);
    return (
      <>
      <h2 id="fav-header">Your favourite Receipe</h2>
        <div id="fav-parent">
          {additem.map((item, indx) => {
            return (
              <div key={indx} onDoubleClick={() => navigate(`/${item.idMeal}`)}>
                <img src={item.strMealThumb} alt="" />
                <h3>{item.strMeal}</h3>
              </div>
            );
          })}
        </div>
      </>
    );
}
export default Favrecipe;