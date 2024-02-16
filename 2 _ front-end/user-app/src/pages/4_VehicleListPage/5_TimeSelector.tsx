import "./5_TimeSelector.css";

import { Button } from "react-bootstrap";
import { useState } from "react";
import {
  _dateToStr,
  _timeToStr,
  _updateDate,
  _updateTime,
} from "../../modules/utils/BlueTime";

type ClickOkEvent = (startTime: Date, endTime: Date) => void;

interface TimeSelectProps {
  startTime: Date;
  endTime: Date;
  onClickOk: ClickOkEvent;
}

interface TimeSelectorState {
  startTime: Date;
  endTime: Date;
}

const TimeSelector = (props: TimeSelectProps) => {
  const [state, setState] = useState<TimeSelectorState>({
    startTime: props.startTime,
    endTime: props.endTime,
  });

  const handleInputDate = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const t = e.currentTarget as HTMLInputElement;
    const id = t.id;
    const val = t.value;

    // console.log(id, val);

    const arr = val.split("-");
    const y = parseInt(arr[0]);
    const m = parseInt(arr[1]);
    const d = parseInt(arr[2]);

    if (id === "startDate") {
      setState((prev) => ({
        ...prev,
        startTime: _updateDate(prev.startTime, y, m, d),
      }));
    } else {
      setState((prev) => ({
        ...prev,
        endTime: _updateDate(prev.endTime, y, m, d),
      }));
    }
  };

  const handleInputTime = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const t = e.currentTarget as HTMLInputElement;
    const id = t.id;
    const val = t.value;

    // console.log(id, val);

    const arr = val.split(":");
    const h = parseInt(arr[0]);
    const m = parseInt(arr[1]);

    if (id === "startTime") {
      setState((prev) => ({
        ...prev,
        startTime: _updateTime(prev.startTime, h, m, 0),
      }));
    } else {
      setState((prev) => ({
        ...prev,
        endTime: _updateTime(prev.startTime, h, m, 0),
      }));
    }
  };

  const handleClickOk = () => {
    props.onClickOk(state.startTime, state.endTime);
  };

  return (
    <div className="container">
      <div className="header">이용 시간 설정</div>
      <div className="body">
        {/* 대여 일시 */}
        <div className="rent-datetime">
          <div className="rent-datetime-title">대여 일시</div>
          <div className="rent-datetime-content-date">
            {/* {_dateToStr(startTimeRef.current)} */}
            <input
              id="startDate"
              type="date"
              value={_dateToStr(state.startTime, true)}
              onInput={handleInputDate}
            ></input>
          </div>
          <div className="rent-datetime-content-time">
            {/* {_timeToStr(startTimeRef.current)} */}
            <input
              id="startTime"
              type="time"
              value={_timeToStr(state.startTime)}
              onInput={handleInputTime}
            ></input>
          </div>
        </div>
        {/* 반납 일시 */}
        <div className="rent-datetime">
          <div className="rent-datetime-title">반납 일시</div>
          <div className="rent-datetime-content-date">
            {/* {_dateToStr(startTimeRef.current)} */}
            <input
              id="endDate"
              type="date"
              value={_dateToStr(state.endTime, true)}
              onInput={handleInputDate}
            ></input>
          </div>
          <div className="rent-datetime-content-time">
            {/* {_timeToStr(startTimeRef.current)} */}
            <input
              id="endTime"
              type="time"
              value={_timeToStr(state.endTime)}
              step={600}
              onInput={handleInputTime}
            ></input>
          </div>
        </div>
      </div>
      <div className="footer">
        <Button onClick={handleClickOk}>확인</Button>
      </div>
    </div>
  );
};

export default TimeSelector;
