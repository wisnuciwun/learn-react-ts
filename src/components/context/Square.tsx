import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


function Square() {
const theme = useContext(ThemeContext)
  return <div style={{backgroundColor: theme.primary.main, color: theme.primary.text}} >Theme Content</div>;
}

export default Square;
