import LoginContext from "../../store/login-context";
import { useContext } from "react";
import Modal from "../UI/Modal";

const LoginResult = () => {
  const userCtx = useContext(LoginContext);
  console.log(userCtx);
  return (
    <Modal>
      <ul>
        {userCtx.userData.map((user) => (
          <li>{user.firstName}</li>
        ))}
      </ul>
      <button>Close</button>
    </Modal>
  );
};

export default LoginResult;
