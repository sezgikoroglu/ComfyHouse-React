import { useState,useContext,createContext,useEffect } from "react";



const BasketContext= createContext();

const BasketProvider = ({children})=>{
    const [items,setItems] = useState([])
    const [show,setShow]   = useState(false)
    const [showHero,setShowHero]=useState()


    const addToBasket = (data) => {
       
           
            setItems((prev) => [...prev,data])
          
    }


    const values = {
        items,
        setItems,
        addToBasket,
        show,
        setShow,
        setShowHero,
        showHero,


    };

    return(
        <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
    )
};

const useBasket= () => useContext(BasketContext);
 export {
    BasketProvider , useBasket
 }