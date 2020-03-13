import React from "react";

const CustomSelect = ({ stats, setSelectedCountry }) => {
	return (
		<div className="field">
			<div className="control">
				<div className="select is-info">
					<select
						defaultValue="IR"
						onChange={e => {
							setSelectedCountry(e.target.value);
						}}
					>
						{Object.entries(stats.countries).map(([cy, code]) => {
							return (
								<option key={code} value={code}>
									{cy}
								</option>
							);
						})}
					</select>
				</div>
			</div>
		</div>
	);
};

export default CustomSelect;
