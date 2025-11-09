import { Navigate, Outlet } from "react-router-dom";

const UserRoute = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (!user?.token || user?.role !== "traveler") {
    return <Navigate to="/unauthorized" replace />;
  }
  return <Outlet />;
};

export default UserRoute;