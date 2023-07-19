import Header from "./Header";
import SideMenu from "./SideMenu";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function CommonComponent() {
    return (
        <>
            <Header />
            <SideMenu />
            <Outlet />
            <Footer />
        </>
    )
}

export default CommonComponent;