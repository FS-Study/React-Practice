import Modal from "../UI/Modal";

const TermCondition = (props) => {
  return (
    <Modal>
      <span>
        제 1 장 총 칙 제 1 조 (목적) 이 약관은 (이하 "사이트"라 합니다)에서
        제공하는 인터넷서비스(이하 "서비스"라 합니다)의 이용 조건 및 절차에 관한
        기본적인 사항을 규정함을 목적으로 합니다. 제 2 조 (약관의 효력 및 변경)
        ① 이 약관은 서비스 화면이나 기타의 방법으로 이용고객에게 공지함으로써
        효력을 발생합니다. ② 사이트는 이 약관의 내용을 변경할 수 있으며, 변경된
        약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.
      </span>
      <button onClick={props.onClose}>Close</button>
    </Modal>
  );
};

export default TermCondition;
