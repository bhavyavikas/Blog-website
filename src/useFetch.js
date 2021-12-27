import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {

            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    console.log(res)
                    if (!res.ok) {
                        throw Error('Could not fetch data ')
                    }
                    return res.json();
                })
                .then(data => {
                    // console.log(data);
                    setData(data);
                    setLoading(false);
                    setError(null)
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch Aborted')
                    }
                    else {
                        console.log(err.message);
                        setLoading(false)
                        setError(err.message);
                    }
                })
        }, 100);
        return () => abortCont.abort();
    }, [url])

    return { data, loading, error }
}

export default useFetch;