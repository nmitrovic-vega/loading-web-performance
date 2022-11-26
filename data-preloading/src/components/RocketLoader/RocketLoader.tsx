import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { ReactComponent as RocketLoading } from "../../assets/images/launch.svg";
import "./RocketLoader.css";

const RocketLoader = () => {
	const [isDarkTheme, setIsTheme] = useState<boolean>(false);

	return (
		<div className="rocket-loader__wrapper">
			<div
				className={classNames("pulse rocket-loader", {
					"dark-theme": isDarkTheme,
					"light-theme": !isDarkTheme,
				})}
			>
				<RocketLoading width="100" height="100" />
			</div>
		</div>
	);
};

export default RocketLoader;
