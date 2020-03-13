import useStats from "../utils/useStats";

const Stats = ({ url, isWorld }) => {
	const { stats, loading, error } = useStats(url);
	if (error)
		return (
			<center>
				<div className="notification is-warning is-light">
					<strong>Oops... No Data Provided Yet!</strong>
				</div>
			</center>
		);
	if (loading || !stats) {
		if (isWorld) {
			return (
				<center>
					<button className="button is-danger is-loading">Loading</button>
				</center>
			);
		}
		return (
			<center>
				<button className="button is-info is-loading">Loading</button>
			</center>
		);
	}

	return (
		<nav className="level ">
			<div className="level-item has-text-centered">
				<div>
					<p className="heading">Confirmed</p>
					<p className="title">{stats.confirmed.value}</p>
				</div>
			</div>

			<div className="level-item has-text-centered">
				<div>
					<p className="heading">Recovered</p>
					<p className="title">{stats.recovered.value}</p>
				</div>
			</div>

			<div className="level-item has-text-centered">
				<div>
					<p className="heading">Deaths</p>
					<p className="title">{stats.deaths.value}</p>
				</div>
			</div>
		</nav>
	);
};

export default Stats;
