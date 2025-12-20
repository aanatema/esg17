import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Pricing from "./pages/Pricing/Pricing";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/prestations",
		element: <Services />,
	},
	{
		path: "/tarifs",
		element: <Pricing />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
