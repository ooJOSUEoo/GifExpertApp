import { useState } from "react"

export const useFetchGifs = () => {
  
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    setTimeout(() => {
        setstate({
            data: ['one', 'two', 'three'],
            loading: false
        });
    }, 3000);

    return state

}
