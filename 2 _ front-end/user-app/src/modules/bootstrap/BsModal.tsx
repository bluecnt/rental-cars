////////////////////////////////////////////////////////////////////////////////
// [SGLEE:20240216FRI_232800] Created
////////////////////////////////////////////////////////////////////////////////

import { Button, Modal } from "react-bootstrap";

type ButtonClickEvent = () => void;

interface BsModalProps {
  title: string;
  text: string;
  okBtnText?: string; // 확인
  cancelBtnText?: string; // 취소
  show: boolean;

  onClickOkBtn: ButtonClickEvent;
  onClickCancelBtn?: ButtonClickEvent;
}

const BsModal = (props: BsModalProps) => {
  const handleClickOkBtn = () => {
    props.onClickOkBtn();
  };

  const handleClickCancelBtn = () => {
    props.onClickCancelBtn && props.onClickCancelBtn();
  };

  return (
    <Modal show={props.show} backdrop="static" keyboard={false} centered>
      <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.text}</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClickOkBtn}>{props.okBtnText ?? "확인"}</Button>
        {props.cancelBtnText !== "" && (
          <Button onClick={handleClickCancelBtn}>
            {props.cancelBtnText ?? "취소"}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default BsModal;
