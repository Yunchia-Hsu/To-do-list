import { createContext, useState } from 'react'
import {Appearance} from 'react-native'
import {Colors} from '../constants/Colors'

interface ThemeContextType {
    colorScheme: 'light' | 'dark' | null;
    setColorScheme: React.Dispatch<React.SetStateAction<'light' | 'dark' | null >>;
    theme: typeof Colors.light;
  }
  


  export const ThemeContext = createContext<ThemeContextType>({
    colorScheme: 'light',
    setColorScheme: () => {},
    theme: Colors.light,
  });

export const ThemeProvider = ({children}) => {
    const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    return (
        <ThemeContext.Provider 
            value={{
                colorScheme, 
                setColorScheme, 
                theme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};