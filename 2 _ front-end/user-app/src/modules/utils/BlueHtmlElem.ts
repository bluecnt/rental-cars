// [SGLEE:20240205MON_202200] Created

export const _$ = (sel: string): HTMLElement | null => {
  const el = document.querySelector<HTMLElement>(sel);
  if (el === null) {
    console.error(`[_$()] Invalid selector('${sel}')!`);

    debugger;
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

type _ElemRect = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export const _getElemRect = (id: string): _ElemRect => {
  const el = _$(`#${id}`);
  const r = el?.getBoundingClientRect();

  const x = Math.round(r?.x as number);
  const y = Math.round(r?.y as number);
  const w = Math.round(r?.width as number);
  const h = Math.round(r?.height as number);
  return { x, y, w, h };
};

export const _setElemSize = (id: string, w?: number, h?: number) => {
  const el = _$(`#${id}`);
  if (w !== undefined && el?.style) el.style.width = `${w}px`;
  if (h !== undefined && el?.style) el.style.height = `${h}px`;
};
