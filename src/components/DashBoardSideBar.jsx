import React from "react";
import { NavLink } from "react-router-dom";

function DashBoardSideBar() {
    const menuItems = [
        { name: "Posts", path: "/dashboard/posts"},
        { name: "Categories", path: "/dashboard/categories"},
    ];

    return (
        <aside className="bg-dark text-light flex-shrink-0" style={{ width: "250px" }}>
            <div className="p-3">
                <ul className="nav nav-pills flex-column">
                    {menuItems.map((item) => (
                        <li key={item.path} className="nav-item mb-2">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `nav-link text-light d-flex align-items-center ${isActive ? "bg-secondary rounded" : ""}`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );

}

export default DashBoardSideBar;