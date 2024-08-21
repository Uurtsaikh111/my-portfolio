import React,{useContext,createContext,useState} from "react";

const ThemeContext = createContext();
export const useTheme = () =>{
    return useContext(ThemeContext);
};

const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState("light");

    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;