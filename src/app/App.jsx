import { NavLink, Outlet } from "react-router-dom";
import "../app/styles.css";
import logo from "../assets/logo.svg";

export default function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src={logo} alt="Logo" className="logo" />

        {/* Odkaz na aktivní seznamy */}
        <NavLink
          to="/lists"
          className={({ isActive }) => (isActive ? "nav active" : "nav")}
        >
          🛒 My lists
        </NavLink>

        {/* Odkaz na archivované seznamy — odstraněna “hlava”, nahrazena 🧺 */}
        <NavLink
          to="/archived"
          className={({ isActive }) => (isActive ? "nav active" : "nav")}
        >
          🧺 Archived
        </NavLink>
      </aside>

      {/* Hlavní obsah */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
