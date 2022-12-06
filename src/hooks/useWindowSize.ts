import React from 'react';

export default function useWindowSize() {
    const [width, setWidth] = React.useState(window.innerWidth)
    
    const getWindowWidth=()=>{
        const {innerWidth} = window;
        setWidth(innerWidth);
    }

    React.useEffect(()=>{
        window.addEventListener('resize', getWindowWidth);
        return ()=> window.removeEventListener('resize', getWindowWidth)
    }, [])

  return width;
}
