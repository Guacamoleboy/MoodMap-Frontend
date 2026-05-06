// Pathing
// _______
// src/layout/AppLayout.jsx

import { Outlet } from 'react-router-dom'
import Navbar from "@components/shared/navbar/Navbar";
import Footer from "@components/shared/Footer";
import AnnouncementBar from "@components/shared/announcementbar/AnnouncementBar"
import Preloader from "@components/shared/Preloader";

function AppLayout() {
  return (
    <>
      <Preloader />
      <AnnouncementBar message="MoodMap is currently under construction - Some features may not be working as intended" />
      <Navbar />

      {/* Page Specific */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default AppLayout;