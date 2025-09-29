import { Outlet } from "react-router-dom";
import DashBoardHeader from "./DashBoardHeader";
import DashBoardFooter from "./DashBoardFooter";
import DashBoardSideBar from "./DashBoardSideBar";

const DashBoardLayOut = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <DashBoardHeader userName="Nguyen Van Tu" />

            <div className="d-flex flex-grow-1">
                <aside className="bg-dark text-light flex-shrink-0" style={{ width: "250px" }}>
                    <DashBoardSideBar />
                </aside>

                <main className="flex-grow-1 bg-light p-4">
                    <Outlet />
                </main>
            </div>

            <DashBoardFooter />
        </div>
    );
}

export default DashBoardLayOut;