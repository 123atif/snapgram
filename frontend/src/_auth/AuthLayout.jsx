import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const AuthLayout = () => {
  const isAuthenicate = false;

  return (
    <>
      {isAuthenicate ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-between items-center mt-10 xl:mt-0">
            {/*py-10 */}
            <Outlet />
            <img
              src="/assets/images/side-img.svg"
              alt="logo"
              className="
          hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
            />
          </section>
        </>
      )}
    </>
  );
};

export default AuthLayout;
