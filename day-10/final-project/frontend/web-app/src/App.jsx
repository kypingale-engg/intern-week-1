import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  ClipboardCheck,
  MessageSquareWarning,
} from "lucide-react";

import Complaints from "./pages/Complaints";
import Inspections from "./pages/Inspections";
import Dashboard from "./pages/Dashboard";
import Facilities from "./pages/Facilities";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <aside className="sidebar">
          <div className="brand">
            <div className="brand-mark">SF</div>
            <div>
              <strong>Smart Facility</strong>
              <span>Management</span>
            </div>
          </div>

          <nav className="nav-menu">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>

            <NavLink
              to="/facilities"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <Building2 size={18} />
              Facilities
            </NavLink>

            <NavLink
              to="/inspections"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <ClipboardCheck size={18} />
              Inspections
            </NavLink>

            <NavLink
              to="/complaints"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <MessageSquareWarning size={18} />
              Complaints
            </NavLink>
          </nav>

          <div className="sidebar-footer">
            <span>Internship Final Project</span>
            <small>Facility Management System</small>
          </div>
        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/inspections" element={<Inspections />} />
            <Route path="/complaints" element={<Complaints />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;