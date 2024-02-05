// [SGLEE:20240205MON_202200] Created

export const _$ = (sel: string): HTMLElement | null => {
  const el = document.querySelector<HTMLElement>(sel);
  if (el === null) {
    console.error(`[_$()] Invalid selector('${sel}')!`);

    debugger;
  }

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
