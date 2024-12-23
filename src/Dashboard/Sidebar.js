import React from "react";

function Sidebar() {
    return (
        <nav
            id="sidebarMenu"
            className="sidebar d-lg-block bg-gray-800 text-white collapse"
            data-simplebar
        >
            <div className="sidebar-inner px-3 pt-3 mt-5">
                <ul className="nav flex-column pt-3 pt-md-0">
                    <li className="nav-item active">
                        <a href="/dashboard" className="nav-link">
                            <span className="sidebar-icon">
                                <i className="fas fa-chart-pie me-2"></i>
                            </span>
                            <span className="sidebar-text">Dashboard</span>
                        </a>
                    </li>
                   
                    <li className="nav-item">
                        <a href="/membredash" className="nav-link">
                            <span className="sidebar-icon">
                                <i className="fas fa-users me-2"></i>
                            </span>
                            <span className="sidebar-text">Membres</span>
                        </a>
                    </li>
                   
                    <li className="nav-item">
                        <a href="/evenementdash" className="nav-link">
                            <span className="sidebar-icon">
                                <i className="fas fa-calendar-alt me-2"></i>
                            </span>
                            <span className="sidebar-text">Evenements</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/galerie" className="nav-link">
                            <span className="sidebar-icon">
                                <i className="fas fa-images me-2"></i>
                            </span>
                            <span className="sidebar-text">Galerie</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/production" className="nav-link">
                            <span className="sidebar-icon">
                                <i className="fas fa-flask me-2"></i>
                            </span>
                            <span className="sidebar-text">Production Scientifique</span>
                        </a>
                    </li>
                    <li className="nav-item mt-auto">
                        <a href="/" className="nav-link text-danger">
                            <span className="sidebar-icon">
                                <i className="fas fa-sign-out-alt me-2"></i>
                            </span>
                            <span className="sidebar-text">Exit</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;
