import Content from "./Content";
import './App.css';
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const context = useContext(ThemeContext);

  return (
    <div className="App" style={{ padding: '10px 32px' }}>
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <Content />
    </div>
  );
}

export default App;
