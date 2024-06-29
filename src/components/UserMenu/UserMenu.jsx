import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors.js";
import { logOut } from "../../redux/auth/operations.js";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <p>Welcome {user.name}</p>
        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </div>
    </>
  );
}
