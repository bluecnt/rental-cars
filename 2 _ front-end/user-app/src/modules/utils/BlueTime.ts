// [SGLEE:20230227MON_165300] Created

import { _2, _4, _leftStr, _str } from "./BlueString";

// "hh:mm:ss" or "hh:mm:ss.mil"
export const _timeToStr = (time?: Date, millis = false): string => {
  if (time === undefined) time = new Date();

  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  const m2 = time.getMilliseconds();

  const hh = _2(h);
  const mm = _2(m);
  const ss = _2(s);
  const mil = _str(m2, 3, "0");

  return `${hh}:${mm}:${ss}${millis ? "." + mil : ""}`;
};

// "yyyy.mm.dd.ddd". stdFormat: yyyy-mm-dd
export const _dateToStr = (date?: Date, stdFormat = false): string => {
  if (date === undefined) date = new Date();

  const weekNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const w = date.getDay();

  const yyyy = _4(y);
  const mm = _2(m);
  const dd = _2(d);
  const week = weekNames[w];

  if (stdFormat) return `${yyyy}-${mm}-${dd}`;
  else return `${yyyy}.${mm}.${dd}.${week}`;
};

// "yyyy.mm.dd.ddd hh:mm:ss" or "yyyymmddddd_hhmmss". stdFormat: yyyy-mm-dd hh:mm
export const _dateTimeToStr = (
  dateTime?: Date,
  isFileName = false,
  millis = false,
  stdFormat = false
): string => {
  let d = _dateToStr(dateTime);
  let t = _timeToStr(dateTime, millis);
  let ret = "";

  if (isFileName) {
    d = d.replaceAll(".", "");
    t = t.replaceAll(":", "");
    if (millis) t = t.replace(".", "_");
    ret = d + "_" + t;
  } else {
    ret = d + " " + t;
  }

  if (stdFormat) {
    ret = _dateToStr(dateTime, stdFormat) + " " + _timeToStr(dateTime);
  }

  return ret;
};

// timestamp: beginning of January 1, 1970, UTC (the epoch)
export const _isoTimeStrKr = (timestamp = new Date().getTime()): string => {
  const date = new Date(timestamp);

  const tzOffset2 = date.getTimezoneOffset() * 60000;
  const d = new Date(date.getTime() - tzOffset2);
  const iso = d.toISOString();
  // -4: ".mil", -1: "Z"
  const ret = _leftStr(iso, iso.length - 4 - 1) + "+09:00";

  return ret;
};

export const _fromIsoTimeStr = (str: string): Date => {
  const t = new Date(str);
  return t;
};

// 다음 30분 단위로 시간을 얻는다
export const _next30Min = (time?: Date): Date => {
  if (time === undefined) time = new Date();

  let h = time.getHours();
  let m = time.getMinutes();

  h = m > 30 ? h + 1 : h;
  m = m > 30 ? 0 : 30;

  time.setHours(h);
  time.setMinutes(m);
  time.setSeconds(0);

  return time;
};

// 시간 추가
export const _addTime = (
  time: Date,
  hours: number,
  mins = 0,
  secs = 0
): Date => {
  const newTime = new Date(time);

  const h = newTime.getHours() + hours;
  const m = newTime.getMinutes() + mins;
  const s = newTime.getSeconds() + secs;

  newTime.setHours(h);
  newTime.setMinutes(m);
  newTime.setSeconds(s);

  return newTime;
};

// 날짜 설정
export const _updateDate = (
  dateTime: Date,
  y: number,
  m: number,
  d: number
): Date => {
  const newDateTime = new Date(dateTime);
  newDateTime.setFullYear(y, m - 1, d);
  return newDateTime;
};

// 시간 설정
export const _updateTime = (
  dateTime: Date,
  h: number,
  m: number,
  s: number
): Date => {
  const newDateTime = new Date(dateTime);
  newDateTime.setHours(h);
  newDateTime.setMinutes(m);
  newDateTime.setSeconds(s);
  return newDateTime;
};

// 시간 차 계산
export const _calcTimeDiff = (
  start: Date,
  end: Date
): { hours: number; minutes: number } => {
  const differenceInMilliseconds = Math.abs(end.getTime() - start.getTime());
  const hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor(
    (differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );
  return { hours, minutes };
};
