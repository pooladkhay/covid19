import { useState } from "react";
import useStats from "../utils/useStats";
import Stats from "../components/Stats";
import CustomSelect from "../components/CustomSelect";

const Countries = () => {
	const { stats } = useStats("https://covid19.mathdro.id/api/countries");
	const [selectedCountry, setSelectedCountry] = useState("IR");
	if (!stats)
		return (
			<center>
				<button className="button is-info is-loading">Loading</button>
			</center>
		);
	return (
		<div>
			<div className="level">
				<div className="level-left">
					<div className="level-item">
						<h1 className="title">
							{Object.entries(stats.countries).map(([cy, code]) => {
								if (code === selectedCountry) {
									return cy;
								}
							})}{" "}
							Stats
						</h1>
					</div>
				</div>
				<div className="level-right">
					<div className="level-item">
						<CustomSelect
							setSelectedCountry={setSelectedCountry}
							stats={stats}
						/>
					</div>
				</div>
			</div>

			<Stats
				isWorld={false}
				url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
			></Stats>
		</div>
	);
};

export default Countries;
