import { memo } from 'react'

function Content({ count }) {
    
    console.log("re-render");

    return (
        <h1>Hello My Friends {count}</h1>
    )
}

export default memo(Content);