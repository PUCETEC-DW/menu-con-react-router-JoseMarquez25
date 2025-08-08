import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  Info,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"; // o react-icons

const menuItems = [
  { to: "/", label: "Inicio", icon: <Home size={20} /> },
  { to: "/about", label: "Acerca de", icon: <Info size={20} /> },
  { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
  { to: "/settings", label: "Configuración", icon: <Settings size={20} /> },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`h-screen bg-white border-r p-4 transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        {!collapsed && <span className="text-lg font-bold">Beyond UI</span>}
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded hover:bg-gray-100 ${
                isActive ? "bg-gray-200 font-semibold" : ""
              }`
            }
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
