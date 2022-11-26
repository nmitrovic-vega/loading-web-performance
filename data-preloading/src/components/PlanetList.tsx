import { Button, Card, CardContent, Container, Grid } from "@material-ui/core";
import React from "react";
import { useSWRConfig } from "swr";
import RocketLoader from "./RocketLoader/RocketLoader";
import { ReactComponent as RocketImage } from "../assets/images/rocket.svg";
import { ReactComponent as RocketTrailImage } from "../assets/images/trail.svg";
import "./PlanetList.css";

const PlanetList = () => {
	const { cache } = useSWRConfig();
	const planets = cache.get("planets");

	if (!planets?.length) {
		return <RocketLoader />;
	}

	return (
		<Grid container spacing={2} style={{ padding: "50px", textAlign: "center" }}>
			{planets.slice(0, 100).map((planet: any) => (
				<Grid key={planet.pl_name} xs={4} item>
					<Card
						variant="outlined"
						style={{
							border: "2px solid #896fe7",
							display: "flex",
							flexDirection: "column",
							height: "500px",
							justifyContent: "flex-end",
							backgroundColor: "transparent",
						}}
					>
						<CardContent>
							<div style={{ position: "relative" }}>
								<RocketImage className="rocket" />
								<RocketTrailImage className="rocket-trail" />
							</div>
							<p style={{ color: "#68417c", fontWeight: "bold" }}>Planet name: {planet.pl_name}</p>{" "}
							<p style={{ color: "white" }}>Year of discovery: {planet.disc_year}</p>
							<p style={{ color: "white" }}>Light days away: {planet.pl_eqt || 100}</p>
							<Button
								variant="contained"
								color="secondary"
								style={{ margin: "auto", color: "white", textDecoration: "none" }}
							>
								Buy
							</Button>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default PlanetList;
