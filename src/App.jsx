/** @jsxImportSource @emotion/react */
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import HoursPlace from "./pages/HoursPlace";
import People from "./pages/People";
import CommonComponent from "./components/CommonComponent";

const App = createBrowserRouter([
    {
        path: "homepage/",
        element: <CommonComponent />,
        children: [
            { index: true, element: <Home /> },
            { path: "contact", element: <Contact /> },
            { path: "details", element: <Details />},
            { path: "hours_place", element: <HoursPlace />},
            { path: "people", element: <People />}
        ],
    },
])

export default App;