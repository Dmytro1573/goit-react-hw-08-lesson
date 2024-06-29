import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Tasks</NavLink>}
      </nav>
    </>
  );
}
