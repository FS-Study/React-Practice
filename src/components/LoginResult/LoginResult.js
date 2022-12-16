import LoginContext from "../../store/login-context";
import { useContext } from "react";
import Modal from "../UI/Modal";

const LoginResult = (props) => {
  const userCtx = useContext(LoginContext);
  console.log(userCtx);
  return (
    <Modal>
      <ul>
        <li>{userCtx.userData.firstName}</li>
        <li>{userCtx.userData.lastName}</li>
        <li>{userCtx.userData.emailAddress}</li>
      </ul>
      <button onClick={props.onClose}>Close</button>
    </Modal>
  );
};

export default LoginResult;
