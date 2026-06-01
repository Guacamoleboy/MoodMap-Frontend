// Pathing
// _______
// src/layout/DevlogLayout.jsx

import { Outlet } from 'react-router-dom'
import Preloader from "@components/shared/preloader/Preloader";

function DevlogLayout() {
  return (
    <>
      <Preloader />
      <Outlet />
    </>
  )
}

export default DevlogLayout;