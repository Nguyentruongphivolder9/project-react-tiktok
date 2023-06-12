import { useEffect, useState, useLayoutEffect } from "react";


function Content() {
    const [number, setNumber] = useState(0);

    // useEffect(() => {
    //     if(number > 3){
    //         setNumber(0);
    //     }
    // }, [number]);

    useLayoutEffect(() => {
        if(number > 3){
            setNumber(0);
        }
    }, [number])
    
    const handleCount = () => {
        setNumber(number + 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button 
                onClick={handleCount}
            >
                start
            </button>
        </div>
    )
}

export default Content;