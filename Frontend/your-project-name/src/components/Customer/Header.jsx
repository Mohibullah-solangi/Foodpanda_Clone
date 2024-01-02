import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();
 

  return (
    <>
      {location.pathname.includes("partner") ?  null : (
        <header className="shadow-lg rounded-md mb-8">
          <div className="flex justify-around  pb-4">
            <div className="text-[#ff0090] text-2xl font-semibold">
              foodpanda
            </div>
            <div className="px-44">Address</div>
            <div>Name & Language</div>
            <div>Fav & Cart</div>
          </div>
          <nav className="text-start px-24">Menu</nav>
        </header>
      )}
    </>
  );
};

export default Header;
