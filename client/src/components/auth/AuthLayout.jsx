import { Outlet } from "react-router-dom";
function AuthLayout() {
  return (
    <>
      <div>
        <div>
          <h1>welcome to my ecommerce</h1>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
