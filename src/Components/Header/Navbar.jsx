import Container from "../Container/Container";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <div className="flex gap-4 items-center">
      <NavLink to="/" className="">
        Home
      </NavLink>
      <NavLink to="/books" className="">
        Books
      </NavLink>
      {/* <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-green-600 bg-white border border-green-600 px-4 py-2 rounded"
            : "text-white bg-green-600 border border-transparent px-4 py-2 rounded hover:bg-green-700"
        }
      >
        Home
      </NavLink> */}
      <NavLink to="/about" className="">
        About Us
      </NavLink>
    </div>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <Container>
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Book Vibe</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end gap-2 ">
            <a className="btn bg-[#23BE0A] text-white">Sign In</a>
            <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
