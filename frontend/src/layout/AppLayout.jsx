// Pathing
// _______
// src/layout/AppLayout.jsx

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

function AppLayout({ children }) {
  return (
    <>
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;