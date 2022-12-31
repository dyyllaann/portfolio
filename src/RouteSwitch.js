import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import Profile from "./Profile";
// import Info from "./Info";
// import Navbar from "./Navbar";
import Navbar from "./navbar/Navbar";

const RouteSwitch = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<App />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default RouteSwitch;