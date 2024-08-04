import { useState, useEffect } from 'react';

const useHttp = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setData(data)
        }
        getData();
    });

    return [data]
}

export default useHttp



