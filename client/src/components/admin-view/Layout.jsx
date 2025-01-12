import AdminHeader from "./Header";
import AdminSidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
