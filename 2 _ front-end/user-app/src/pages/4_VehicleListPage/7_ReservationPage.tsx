// [SGLEE:20240222THU_114700] Created

import "./7_ReservationPage.css";

import { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { DataContext } from "../../contexts/DataContext";
import { _calcTimeDiff, _dateTimeToStr } from "../../modules/utils/BlueTime";
import { calcPrice } from "../../modules/rest-client/reservations";
import { _makeCurrencyStr } from "../../modules/utils/BlueString";
import BlueDialog from "../../modules/ui/BlueDialog";

type OkButtonClickEvent = (
  cust_id: number,
  reg_id: number,
  start_time: Date,
  end_time: Date
) => void;
type ButtonClickEvent = () => void;

interface ReservationPageProps {
  startTime: Date;
  endTime: Date;
  regId: number;
  plId: number;
  vehicleId: number;
  onClickOk: OkButtonClickEvent;
  onClickCancel: ButtonClickEvent;
}

const ReservationPage = (props: ReservationPageProps) => {
  const dataCtx = useContext(DataContext);

  useEffect(() => {
    // console.log("[ReservationPage] mounted");
  }, []);

  useEffect(() => {
    // console.log("[ReservationPage] rendered");
  });

  const userDTO = dataCtx.state.userDTO;

  const pl = dataCtx.state.parkingLots.find(
    (value) => value.pl_id === props.plId
  );
  const vehicle = pl?.vehicles.find((v) => v.vehicle_id === props.vehicleId);

  const { hours: h, minutes: m } = _calcTimeDiff(
    props.startTime,
    props.endTime
  );
  const timeRange = `${h}시간 ${m}분`;
  const timeStart = _dateTimeToStr(props.startTime);
  const timeEnd = _dateTimeToStr(props.endTime);

  const price = calcPrice(
    props.startTime,
    props.endTime,
    vehicle?.price_per_hour as number
  );
  const priceStr = _makeCurrencyStr(price) + "원";

  const handleClickOkBtn = () => {
    console.error("==========");

    const cust_id = 0;
    const reg_id = 0;
    const start_time = new Date();
    const end_time = new Date();
    props.onClickOk(cust_id, reg_id, start_time, end_time);
  };

  return (
    // <div className="rp-container">
    //   <div className="rp-header">예약 및 결제</div>
    //   <div className="rp-body">
    //     {/* 차량 이미지, 이름 */}
    //     <div
    //       style={{
    //         // border: "1px solid blue",
    //         display: "flex",
    //         gap: "0.5rem",
    //       }}
    //     >
    //       <div>
    //         <img src="./images/vehicles/gn7.jpg" width={128} alt=""></img>
    //       </div>
    //       <div>
    //         <b>{vehicle?.name}</b>
    //         <br></br>
    //         {vehicle?.options}
    //       </div>
    //     </div>

    //     {/* 주행 요금 */}
    //     <div className="rp-sect">
    //       <div className="rp-sect-name">주행 요금</div>
    //       <div className="rp-sect-value">{vehicle?.price_per_km} 원/km</div>
    //     </div>

    //     {/* 대여 / 반납 장소 */}
    //     <div className="rp-sect">
    //       <div className="rp-sect-name">대여 / 반납 장소</div>
    //       <div className="rp-sect-value">{pl?.name}</div>
    //     </div>

    //     {/* 이용 시간 */}
    //     <div className="rp-sect">
    //       <div className="rp-sect-name">이용 시간</div>
    //       <div className="rp-sect-value">
    //         총 {timeRange} 이용
    //         <br></br>
    //         {timeStart}
    //         <br></br>
    //         {timeEnd}
    //         <br></br>
    //       </div>
    //     </div>

    //     {/* 결제 수단 */}
    //     <div className="rp-sect">
    //       <div className="rp-sect-name">결제 수단</div>
    //       <div className="rp-sect-value">
    //         {userDTO.credit_card_company} / {userDTO.credit_card_number}
    //       </div>
    //     </div>

    //     {/* 최종 결제 내역 */}
    //     <div className="rp-sect">
    //       <div className="rp-sect-name">최종 결제 내역</div>
    //       <div className="rp-sect-value">
    //         <b>{priceStr}</b>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="rp-footer">
    //     <Button style={{ flex: 1 }} onClick={props.onClickOk}>
    //       결제
    //     </Button>
    //     <Button
    //       variant="secondary"
    //       style={{ flex: 1 }}
    //       onClick={props.onClickCancel}
    //     >
    //       취소
    //     </Button>
    //   </div>
    // </div>

    <BlueDialog
      placeholderForPage={false}
      //
      title="예약 및 결제"
      //
      footerNode={
        <div className="rp-footer">
          <Button style={{ flex: 1 }} onClick={handleClickOkBtn}>
            결제
          </Button>
          <Button
            variant="secondary"
            style={{ flex: 1 }}
            onClick={props.onClickCancel}
          >
            취소
          </Button>
        </div>
      }
    >
      <div className="rp-body">
        {/* 차량 이미지, 이름 */}
        <div
          style={{
            // border: "1px solid blue",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <div>
            <img src="./images/vehicles/gn7.jpg" width={128} alt=""></img>
          </div>
          <div>
            <b>{vehicle?.name}</b>
            <br></br>
            {vehicle?.options}
          </div>
        </div>

        {/* 주행 요금 */}
        <div className="rp-sect">
          <div className="rp-sect-name">주행 요금</div>
          <div className="rp-sect-value">{vehicle?.price_per_km} 원/km</div>
        </div>

        {/* 대여 / 반납 장소 */}
        <div className="rp-sect">
          <div className="rp-sect-name">대여 / 반납 장소</div>
          <div className="rp-sect-value">{pl?.name}</div>
        </div>

        {/* 이용 시간 */}
        <div className="rp-sect">
          <div className="rp-sect-name">이용 시간</div>
          <div className="rp-sect-value">
            총 {timeRange} 이용
            <br></br>
            {timeStart}
            <br></br>
            {timeEnd}
            <br></br>
          </div>
        </div>

        {/* 결제 수단 */}
        <div className="rp-sect">
          <div className="rp-sect-name">결제 수단</div>
          <div className="rp-sect-value">
            {userDTO.credit_card_company} / {userDTO.credit_card_number}
          </div>
        </div>

        {/* 최종 결제 내역 */}
        <div className="rp-sect">
          <div className="rp-sect-name">최종 결제 내역</div>
          <div className="rp-sect-value">
            <b>{priceStr}</b>
          </div>
        </div>
      </div>
    </BlueDialog>
  );
};

export default ReservationPage;
