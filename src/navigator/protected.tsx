import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppLayout } from "../components/layout";
const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  return (
    <>
      {isLoggedIn ? (
        <AppLayout>
          <Component />
        </AppLayout>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
