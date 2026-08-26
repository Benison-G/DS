import { useEffectEvent, useState } from "react"

const useDebounce = (value, delay) => {
    const [debouncingValue, setDebouncingValue] = useState("");

    useEffect(() => {
        let timer = setTimeout(() => {
            setDebouncingValue(value)
        }, delay);

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncingValue;
}

const MyComponent = () => {
    const [search, setSearch] = useState("")

    const debouncedSearchText = useDebounce(search);

    useEffect(() =>{
        if(!debouncedSearchText) return;

        // Call some api or whatever with the debouncedSearch
    }, [debouncedSearchText])
}

export default MyComponent;