import { useEffect, useState } from "react";
import storeContext from "./storeContext";

export default function StoreStates(props){
   

       return(
   <storeContext.Provider value={isLogin}>
        {props.children}
    </storeContext.Provider>
   )
}