import { useEffect, useState } from "react"

export const useLocalStorage = (watchlistTitles) => {
    const [titles, setTitles] = useState([])
    useEffect(() => {
        setTitles(watchlistTitles)
        localStorage.setItem('titles', JSON.stringify(titles))
    }, [titles, watchlistTitles])
}