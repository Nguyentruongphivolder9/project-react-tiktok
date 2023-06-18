import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
    const context = useContext(ThemeContext);

    return (
        <div className={context.theme}>
            John Thys/AFP/Getty Images
US officials are framing the trip as an effort to resume normal channels of communication in order to avoid conflict between two of the globe’s great powers.
        </div>
    )
}

export default Paragraph;