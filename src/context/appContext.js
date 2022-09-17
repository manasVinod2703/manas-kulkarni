import React, {useReducer,useContext} from 'react';
import { CLOSE_SIDE_BAR, SHOW_SIDE_BAR } from './actions';
import reducer from './reducers';

const initialState = {
    showSideBar : false,
    isLoading : true
}


const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    

    const setSideBar  = ()=>{
        if(state.showSideBar){
            dispatch({
                type : CLOSE_SIDE_BAR
            })
        }
        else{
            dispatch({
                type : SHOW_SIDE_BAR
            })
        }
    }

    return <AppContext.Provider value={{...state,setSideBar}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = ()=>{
    return useContext(AppContext);
}


export {AppProvider,initialState,useAppContext};