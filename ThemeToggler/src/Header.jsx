import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
function Header(){
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <h2> current theme : {theme}</h2>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}> toggle me to
                {theme === 'light' ? '🌙' : '🌞'}
            </button>
        </div>
    );
}

export default Header;
