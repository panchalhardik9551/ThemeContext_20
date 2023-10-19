import { useContext } from 'react';
import './App.css';
import ThemeContext from './Componenet/ThemeContext';
import { managetheme } from './Componenet/ThemeContextProvider';

function App() {

  const {theme, changetheme} = useContext(managetheme)

  return (
    <>
    <div style={{background: `${theme}`, color:theme == "black"?"white":theme=="blue"?"white":"black", textAlign:"center"}}>
    <ThemeContext/>
    </div>
    </>
  );
}

export default App;
