// [SGLEE:20240220TUE_172300] Created

const _reservation_add_test = async (
  cust_id: number,
  reg_id: number,
  start_time: Date,
  end_time: Date
): Promise<string> => {
  return "";
};

// # 예약 추가
export const reservation_add = async (
  cust_id: number,
  reg_id: number,
  start_time: Date,
  end_time: Date
): Promise<string> => {
  return await _reservation_add_test(cust_id, reg_id, start_time, end_time);
};
