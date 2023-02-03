import { useEffect, useState } from "react";

export default function useFetchAPI({ url = '', options = null }) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setData(data);
                    setError(null);
                }
            })
            .catch(error => {
                if (isMounted) {
                    setData(data);
                    setError(error);
                }
            })
            .finally(() => {
                isMounted && setLoading(false);
            })
    }, [url, options]);

    const removeData = (id) => {
        // setData
        setData(data.filter(dataRaw => {
            if (dataRaw.id !== id) {
                return dataRaw;
            }
        }));
    }

    return { data, error, loading, removeData };
}