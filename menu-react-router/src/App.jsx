import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="w-auto inline-block">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-50 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
