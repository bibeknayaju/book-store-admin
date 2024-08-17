import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const userLoggedIn = localStorage.getItem("isLoggedIn");

  return userLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
}
