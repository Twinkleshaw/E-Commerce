import ShoppingHeader from "./Header";
import { Outlet } from "react-router-dom";
function ShoppingLayout() {
  return (
    <>
      <ShoppingHeader />
      <h1>welcome to shopping page</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default ShoppingLayout;
