// [SGLEE:20240222THU_141100] Created

import "./8_ReservationListPage.css";

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { reservations_get } from "../../modules/rest-client/reservations";
import BlueDialog from "../../modules/ui/BlueDialog";
import ReservationDTO from "../../modules/dto/ReservationDTO";
import { _dateTimeToStr } from "../../modules/utils/BlueTime";
import { driving_control } from "../../modules/rest-client/driving";

type ButtonClickEvent = () => void;

interface ReservationListPageProps {
  cust_id: number;
  onClickOk: ButtonClickEvent;
}

interface ReservationListPageState {
  data?: ReservationDTO[];
}

const ReservationListPage = (props: ReservationListPageProps) => {
  // const dataCtx = useContext(DataContext);
  const [state, setState] = useState<ReservationListPageState>({
    //
  });

  useEffect(() => {
    // console.log("[ReservationListPage] mounted");

    const asyncFunc = async () => {
      const dtos = await reservations_get(props.cust_id);
      setState((prev) => ({ ...prev, data: dtos }));
    };

    asyncFunc();
  }, [props.cust_id]);

  useEffect(() => {
    // console.log("[ReservationListPage] rendered");
  });

  //------------------------------------------------------------------

  const handleClickDriving = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const t = e.target as HTMLButtonElement;
    const rentId = parseInt(t.dataset.rentId as string);
    const control = t.dataset.control as string;
    // console.log(rentId, control);

    const result = await driving_control(rentId, control);
    // console.log(result);

    if (result === "") {
      if (control === "start") {
        alert("운행이 시작되었습니다");
      } else {
        alert("운행이 종료되었습니다");
      }
    }
  };

  //------------------------------------------------------------------

  return (
    // <div className="rlp-container">
    //   <div className="rlp-header">예약 내역</div>
    //   <div className="rlp-body">{state.body}</div>
    //   <div className="rlp-footer">
    //     <Button style={{ flex: 1 }} onClick={props.onClickOk}>
    //       확인
    //     </Button>
    //   </div>
    // </div>

    <BlueDialog
      placeholderForPage={false}
      //
      width="500px"
      //
      title="예약 내역"
      //
      footerNode={
        <div className="rlp-footer">
          <Button style={{ flex: 1 }} onClick={props.onClickOk}>
            확인
          </Button>
        </div>
      }
    >
      {/*
      <div className="rlp-body">
        {state.body === undefined ? (
          <div>loading..</div>
        ) : (
          <div>{state.body}</div>
        )}
      </div>
      */}

      {state.data?.map((dto) => (
        <div className="rlp-vehicle-container">
          {/* 차량 이미지 */}
          <div className="rlp-vehicle-img">
            <img src="./images/vehicles/gn7.jpg" width={96} alt=""></img>
          </div>
          {/* 차량 정보 */}
          <div className="rlp-vehicle-info">
            {/* 차량 이름 */}
            <div className="rlp-v-info-name">
              {state.data?.[0].vehicle_name}
            </div>
            {/* 이용 시간 */}
            <div className="rlp-v-info-time">
              대여: {_dateTimeToStr(dto.vehicle_start_time)} <br></br>
              반납: {_dateTimeToStr(dto.vehicle_end_time)}
            </div>
          </div>
          {/* 차량 제어 버튼 */}
          <div className="rlp-vehicle-btns">
            {/* 운행 시작 */}
            <Button
              size="sm"
              onClick={handleClickDriving}
              data-rent-id={1}
              data-control="start"
              // /(1) 운행 중/이 아닌 경우에는 활성화
              disabled={!(dto.vehicle_driving_status !== 1)}
            >
              운행 시작
            </Button>
            {/* 운행 종료 */}
            <Button
              size="sm"
              variant="secondary"
              onClick={handleClickDriving}
              data-rent-id={dto.rent_id}
              data-control="stop"
              // /(1) 운행 중/인 경우에만 활성화
              disabled={!(dto.vehicle_driving_status === 1)}
            >
              운행 종료
            </Button>
          </div>
        </div>
      ))}
    </BlueDialog>
  );
};

export default ReservationListPage;
