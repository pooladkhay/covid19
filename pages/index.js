import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelector";

export default function IndexPage() {
	return (
		<div>
			<section className="hero is-primary">
				<div className="hero-body">
					<div className="container">
						<center>
							<a href="https://iMedApps.ir">
								<img
									src="https://imedapps.ir/static/images/logo.png"
									width="110"
									height="110"
								/>{" "}
							</a>
							<h1 className="title">COVID-19 Statistics</h1>
							<h2 className="subtitle">
								by <a href="https://iMedApps.ir">iMedApps</a>
							</h2>
						</center>
					</div>
				</div>
			</section>

			<section className="hero is-danger">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">World Stats</h1>
						<Stats
							isWorld={true}
							url={"https://covid19.mathdro.id/api"}
						></Stats>
					</div>
				</div>
			</section>

			<section className="hero is-info">
				<div className="hero-body">
					<div className="container">
						<CountrySelector />
					</div>
				</div>
			</section>

			<footer className="footer">
				<div className="content has-text-centered">
					<p>
						Developed by{" "}
						<a target="blank" href="https://mamadev.ir">
							Mamad
						</a>
						.
						<br />
						Data API provided by{" "}
						<a target="blank" href="https://github.com/mathdroid/covid-19-api">
							Mathdroid
						</a>
						.
					</p>
				</div>
			</footer>
		</div>
	);
}
