/* eslint-disable react/prop-types */
import { useLocation, Navigate } from "react-router-dom";
function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }
  if (location.pathname.includes("/admin") && user?.role !== "admin") {
    return <Navigate to="/shop/home" />;
  }
  return <>{children}</>;
}
export default CheckAuth;
