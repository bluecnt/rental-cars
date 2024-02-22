// [SGLEE:20240222THU_141100] Created

import "./8_ReservationListPage.css";

import { ReactNode, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { reservations_get } from "../../modules/rest-client/reservations";

type ButtonClickEvent = () => void;

interface ReservationListPageProps {
  cust_id: number;
  onClickOk: ButtonClickEvent;
}

interface ReservationListPageState {
  body: ReactNode;
}

const ReservationListPage = (props: ReservationListPageProps) => {
  // const dataCtx = useContext(DataContext);
  const [state, setState] = useState<ReservationListPageState>({
    body: <div>loading..</div>,
  });

  useEffect(() => {
    // console.log("[ReservationListPage] mounted");

    const asyncFunc = async () => {
      const dtos = await reservations_get(props.cust_id);
      const body = dtos.map((dto) => {
        return <div key={dto.rent_id}>?</div>;
      });
      setState((prev) => ({ ...prev, body }));
    };

    asyncFunc();
  }, []);

  useEffect(() => {
    // console.log("[ReservationListPage] rendered");
  });

  return (
    <div className="rlp-container">
      <div className="rlp-header">예약 내역</div>
      <div className="rlp-body">{state.body}</div>
      <div className="rlp-footer">
        <Button style={{ flex: 1 }} onClick={props.onClickOk}>
          확인
        </Button>
      </div>
    </div>
  );
};

export default ReservationListPage;
