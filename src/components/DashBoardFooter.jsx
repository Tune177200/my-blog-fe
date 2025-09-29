import React from "react";

function DashBoardFooter() {
    return (
        <footer className="bg-dark text-light py-2 mt-auto w-100">
            <div className="container d-flex justify-content-between small">
                <span>© {new Date().getFullYear()} MyApp. All rights reserved.</span>
                <span>
                    <a href="" className="text-light text-decoration-none me-2">Help</a>
                    <a href="" className="text-light text-decoration-none">Privacy</a>
                </span>
            </div>
        </footer>
    )
}

export default DashBoardFooter;