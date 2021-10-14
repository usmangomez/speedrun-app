import { useEffect, useState } from "react";

export const useFetchData = (url) => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    const fetchGames = async (uri) => {

        setLoading(true);

        const res = await fetch(uri, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const { data } = await res.json();
        setLoading(false);
        setData(data);
    }

    useEffect(() => {
        fetchGames(url);
    }, [url]);

    return [data, loading];

}
