import { useState, useEffect } from "react";

export default function useStats(url) {
	const [stats, setStats] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			setError(false);

			const data = await fetch(url).then(res => {
				if (res.status === 200) {
					setLoading(false);
					return res.json();
				} else {
					setError(true);
					setLoading(false);
				}
			});
			setStats(data);
		};
		setLoading(true);
		fetchData();
	}, [url]);
	return { stats, loading, error };
}
