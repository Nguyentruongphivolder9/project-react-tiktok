import { memo } from 'react'

function Content({ onIncrease }) {

    console.log("re-render");

    return (
        <>
            <h1>Hello My Friends</h1>
            <button onClick={onIncrease}>Increat</button>
        </>
    )
}

export default memo(Content);