import React from "react";

function DashBoardHeader({userName = "admin"}) {

    const handleLogout = (e) =>{

        window.location.href = "/login";
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container-fluid px-4">
                {/* Logo */}
                <a className="navbar-brand fw-bold fs-3 text-primary" href="/dashboard">
                    My<span className="text-warning">App</span>
                </a>

                {/* Phần bên phải */}
                <div className="d-flex align-items-center ms-auto">
                    <span className="text-light me-3">
                        <i className="bi bi-person-circle me-1"></i> {userName}
                    </span>
                    <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                        Đăng xuất
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default DashBoardHeader;