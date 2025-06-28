import { createContext,useState } from "react";
export const DataContext = createContext();

export const DataProvider=({children})=>{

const [visible, setVisible] = useState(false);

const value={
    visible,
    setVisible
}


    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}