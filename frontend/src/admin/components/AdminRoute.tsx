import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (!user?.token || user?.role !== "admin") {
    return <Navigate to="/unauthorized" replace />;
  }
  return <Outlet />;
};

export default AdminRoute;
