// [SGLEE:20240226MON_134600] Created

import axios from "axios";

const _test_driving_control = (rendId: number, control: string): string => {
  return "";
};

export const driving_control = async (
  rentId: number,
  control: string
): Promise<string> => {
  // return _test_driving_control(rentId, control);

  try {
    const params = `rent_id=${rentId}&control=${control}`;
    const resp = await axios.get("/rental/api/driving?" + params);

    return resp.data.result === "ok" ? "" : resp.data.message;
  } catch (err) {
    console.error(err);
  }

  return "/ERROR/";
};
