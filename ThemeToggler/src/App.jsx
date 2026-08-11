import { useState } from 'react'

import Header from './Header'
import ThemeContext from './context/ThemeContext'

function App() {

      const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value= {{ theme, setTheme }}>
          
           <Header />
        </ThemeContext.Provider>
    );
}

export default App;
