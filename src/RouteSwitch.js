import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./sections/navbar/Navbar";
import Index from "./index";

const RouteSwitch = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Index />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default RouteSwitch;