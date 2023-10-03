import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold">All Caterogy</h2>
      {categories.map((categorie) => (
        <NavLink
          className=" block mt-5 space-y-7 text-xl font-medium text-center py-4"
          key={categorie.id}
        >
          {categorie.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;
