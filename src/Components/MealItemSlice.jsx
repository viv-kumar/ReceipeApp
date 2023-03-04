import {createSlice} from '@reduxjs/toolkit';
const initialStateValue={
    fav:[],
    count:0
}
export const addFavSlice=createSlice({
    name:'addfAV',
    initialState:initialStateValue,
    reducers:{
        favitem:(state,action)=>{
            state.fav.push(action.payload);
        },
        favCount:(state)=>{
            state.count+=1
        }
    }
})
export const {favitem,favCount} =addFavSlice.actions;

export default addFavSlice.reducer;