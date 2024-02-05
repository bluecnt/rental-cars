// [SGLEE:20230226SUN_221200] Created

const DebuggerOnError = true;

export const _str = (
  val: number | string,
  width: number,
  fillChar = " ",
  rightAlignLength = 0
): string => {
  if (fillChar.length !== 1) {
    console.error(`_str() : fillChar.length<${fillChar.length}> !== 1`);
    if (DebuggerOnError) debugger;
    return "";
  }

  const s = typeof val === "number" ? val.toString() : val;
  const len = width - s.length;
  const p = len > 0 ? fillChar.repeat(len) : "";
  let ret = p + s;

  if (rightAlignLength > ret.length)
    ret = " ".repeat(rightAlignLength - ret.length) + ret;

  return ret;
};

export const _2 = (num: number, fillChar = "0", rightAlignLength = 0): string =>
  _str(num, 2, fillChar, rightAlignLength);

export const _4 = (num: number, fillChar = "0", rightAlignLength = 0): string =>
  _str(num, 4, fillChar, rightAlignLength);

export const _8 = (num: number, fillChar = "0", rightAlignLength = 0): string =>
  _str(num, 8, fillChar, rightAlignLength);

export const _raStr = (str: string, rightAlignLength: number): string =>
  _str(str, 0, " ", rightAlignLength);

//

export const _leftStr = (str: string, length = 1): string => {
  if (length > str.length) {
    console.warn(`_leftStr() : length<${length}> > str.length<${str.length}>`);
    return str;
  }

  const ret = str.substring(0, length);
  return ret;
};

export const _rightStr = (str: string, length = 1): string => {
  if (length > str.length) {
    console.warn(`_rightStr() : length<${length}> > str.length<${str.length}>`);
    return str;
  }

  const ret = str.substring(str.length - length);
  return ret;
};

export const _checkLeftStr = (
  str: string,
  left: string,
  caseSensitive = true
): boolean => {
  const a = _leftStr(str, left.length);
  const b = left;
  const aa = a.toLowerCase();
  const bb = b.toLowerCase();

  const ret = caseSensitive ? a === b : aa === bb;
  return ret;
};

export const _checkRightStr = (
  str: string,
  right: string,
  caseSensitive = true
): boolean => {
  const a = _rightStr(str, right.length);
  const b = right;
  const aa = a.toLowerCase();
  const bb = b.toLowerCase();

  const ret = caseSensitive ? a === b : aa === bb;
  return ret;
};

export const _removeLeftStr = (
  str: string,
  left: string,
  caseSensitive = true
): string => {
  if (!_checkLeftStr(str, left, caseSensitive)) return str;

  const ret = str.substring(left.length);
  return ret;
};

export const _removeRightStr = (
  str: string,
  right: string,
  caseSensitive = true
): string => {
  if (!_checkRightStr(str, right, caseSensitive)) return str;

  const ret = str.substring(0, str.length - right.length);
  return ret;
};

export const _1stUpper = (str: string) => {
  const s = str.charAt(0).toUpperCase() + str.substring(1);
  return s;
};

export const _1stLower = (str: string) => {
  const s = str.charAt(0).toLowerCase() + str.substring(1);
  return s;
};

//

// "0,000,000,000"
export const _makeCurrencyStr = (value: number): string => {
  const nf = Intl.NumberFormat("ko");
  const ret = nf.format(value);
  return ret;
};
