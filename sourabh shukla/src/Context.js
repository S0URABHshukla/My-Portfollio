import { createContext, useReducer, useState } from "react";

// export const themeContext = createContext();

// const initialState = { darkMode: false };

// const themeReducer = (state, action) => {
//   switch (action.type) {
//     case "toggle":
//         return { darkMode: !state.darkMode };
//       default:
//         return state;
//   }
// };

// export const ThemeProvider = (props) => {
//   const [state, dispatch] = useReducer(themeReducer, initialState);
//   return (
//     <themeContext.Provider value={{state, dispatch}}>{props.children}</themeContext.Provider>
//   );
// };

  const yellow= "#F5C32C";
    const orange = "#FCA61F";
    const black = "#242D49";
    const gray = "#788097";
    const blueCard = "#DDF8FE";
    const purple= "rgb(238 210 255)";
    const boxShadow = "0px 19px 60px rgb(0 0 0 / 8%)";
    const orangeCard= "rgba(252, 166, 31, 0.45)";
    const smboxShadow= "-79px 51px 60px rgba(0, 0, 0, 0.08)";

export const themeContext = createContext();
const theme = {
  darkmode:{
    color: yellow,
    backgroundColor:"black"
  },
  lightdarkmode:{
    backgroundColor: "#262525"
  },
  lightmode:{
    backgroundColor : "white"
  }
};

export const ThemeProvider = ({children}) =>{
  const [mode,setMode] = useState(false);
  const toggle = () =>{
    if(mode){
      setMode(false);
    }
    else{
      setMode(true);
    }
  
  }

  return <themeContext.Provider value={{theme,toggle,mode}}>
    {children}
  </themeContext.Provider>
}



