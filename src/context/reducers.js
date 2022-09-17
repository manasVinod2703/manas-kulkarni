import {SHOW_SIDE_BAR, CLOSE_SIDE_BAR } from "./actions";



const reducer = (state,action)=>{

    if(action.type === SHOW_SIDE_BAR){
       return{
        ...state,
        showSideBar : true
       }
    }
    else if(action.type === CLOSE_SIDE_BAR){
        return{
            ...state,
            showSideBar : false
        }
    }

};

export default reducer;