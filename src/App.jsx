/** @jsxImportSource @emotion/react */
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CommonComponent from "./components/CommonComponent";

const App = createBrowserRouter([
    {
        path: "/",
        element: <CommonComponent />,
        children: [
            { index: true, element: <Home /> },
            { path: "contact", element: <Contact /> },
        ],
    },
])

export default App;