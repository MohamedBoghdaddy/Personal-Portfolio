import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function OsShell() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

