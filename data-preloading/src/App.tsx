import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, Typography } from "@material-ui/core";
import { theme } from "./theme/theme";
import PlanetList from "./components/PlanetList";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { mutate, SWRConfig } from "swr";
import astronaut from "./assets/images/astronaut.png";
import "./App.css";

function App() {
	const handlePrefetch = async () => {
		const flights = await mutate(
			"planets",
			fetch(
				"https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+pscomppars+where+disc_facility+like+%27%25TESS%25%27+order+by+pl_orbper+desc&format=json"
			).then((res) => res.json())
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<div className="section section-first">
								<Typography variant="h1" style={{ color: "white", marginTop: "150px" }}>
									Svemirko.rs
								</Typography>
								<Link
									to="rocket"
									onMouseEnter={handlePrefetch}
									style={{
										display: "block",
										margin: "50px auto",
										textAlign: "center",
										textDecoration: "none",
									}}
								>
									<Button
										variant="contained"
										color="secondary"
										style={{ margin: "auto", color: "white", textDecoration: "none" }}
									>
										Go to Flights Page
									</Button>
								</Link>
								<img src={astronaut} className="astronaut" alt="astronaut" />
							</div>
						}
					/>
					<Route path="/rocket" element={<PlanetList />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
