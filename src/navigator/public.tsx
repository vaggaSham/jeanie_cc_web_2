import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const PublicRoute = ({ component: Component, ...rest }: any) => {
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  return <>{isLoggedIn ? <Navigate to="/alerts" /> : <Component />}</>;
};

export default PublicRoute;
