/** @jsxImportSource @emotion/react */
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import HoursPlace from "./pages/HoursPlace";
import People from "./pages/People";
import CommonComponent from "./components/CommonComponent";

const rootPath = "/homepage/";

const App = createBrowserRouter([
    {
        element: <CommonComponent />,
        children: [
            { path: rootPath, element: <Home /> },
            { path: rootPath + "contact", element: <Contact /> },
            { path: rootPath + "details", element: <Details />},
            { path: rootPath + "hours_place", element: <HoursPlace />},
            { path: rootPath + "people", element: <People />}
        ],
    },
])

export default App;