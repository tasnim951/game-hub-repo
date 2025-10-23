import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div >
      {/* Navbar stays on top */}
      <Navbar />

      {/* This is where your pages will be rendered */}
      <main >
        <Outlet />
      </main>

      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
