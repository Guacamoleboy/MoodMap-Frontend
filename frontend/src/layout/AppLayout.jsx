// Pathing
// _______
// src/layout/AppLayout.jsx

import Navbar from "@components/shared/navbar/Navbar";
import Footer from "@components/shared/Footer";
import AnnouncementBar from "@components/shared/announcementbar/AnnouncementBar"

function AppLayout({ children }) {
  return (
    <>
      <AnnouncementBar message="MoodMap is currently under construction - Some features may not be working as intended" />
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;