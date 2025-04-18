import { useEffect } from 'react';
import { useState } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    if (!url) {
        setData(null);
        setLoading(false);
        setError('url is required for an api call');
    }

    useEffect(() => {
        (async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                const result = await response.json();
                if (result) setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);

    return { data, error, loading };
};
