import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { favitem, favCount } from "./MealItemSlice";
const MealItem = ({ data }) => {
  console.log(data);
  let navigate = useNavigate();
  // const[fav,setFav]=React.useState([]);
  const dispatch=useDispatch()
  const additem = useSelector((state) => state.addfAV.fav);
  const countFav=useSelector((state)=>state.addfAV.count);
  // let fav2=[];
  return (
    <>
      {!data
        ? "Not Found"
        : data.map((item) => {
            return (
              <div
                className="card"
                key={item.idMeal}
                onDoubleClick={() => navigate(`/${item.idMeal}`)}
              >
                <img src={item.strMealThumb} alt="" />
                <h3>{item.strMeal}</h3>
                <button onClick={()=>{
                  // fav.push(item);
                  dispatch(favitem(item));
                  dispatch(favCount())
                // setFav(fav2);
                console.log(additem);
                console.log(countFav)

                }}>AddFav</button>
              </div>
            );
          })}
      
    </>
  );
};
export default MealItem;
