import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserAuthContext } from "../../Context/AuthContext/AuthContext";
import Loading from "../../Shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserAuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user?.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
