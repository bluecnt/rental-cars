// [SGLEE:20240205MON_202200] Created

export const _$ = (sel: string): HTMLElement | null => {
  const el = document.querySelector<HTMLElement>(sel);
  if (el === null) {
    throw new Error(`[_$()] Invalid selector('${sel}')!`);
  }

  return el;
};

export const _$$ = (tag = "div"): HTMLElement | undefined => {
  const el = document.createElement(tag);

  return el;
};

export const _focus = (id: string) => {
  const el = _$(`#${id}`);
  el?.focus();
};

export const _getValue = (id: string): string => {
  const el = _$(`#${id}`) as HTMLInputElement;
  let value = "";
  if (el) {
    value = el ? el.value : "";
  }

  return value;
};

export const _setValue = (id: string, value: string) => {
  const el = _$(`#${id}`) as HTMLInputElement;
  if (el) {
    el.value = value;
  }
};

export type _ElemRect = {
  x?: number;
  y?: number;
  w?: number;
  h?: number;
};

export const _getElemRect = (el: HTMLElement): _ElemRect => {
  const rc = el.getBoundingClientRect();
  const x = Math.round(rc?.x as number);
  const y = Math.round(rc?.y as number);
  const w = Math.round(rc?.width as number);
  const h = Math.round(rc?.height as number);
  return { x, y, w, h };
};

export const _setElemRect = (el: HTMLElement, rc: _ElemRect) => {
  if (rc.x !== undefined) el.style.left = `${rc.x}px`;
  if (rc.y !== undefined) el.style.top = `${rc.y}px`;
  if (rc.w !== undefined) el.style.width = `${rc.w}px`;
  if (rc.h !== undefined) el.style.height = `${rc.h}px`;
};
