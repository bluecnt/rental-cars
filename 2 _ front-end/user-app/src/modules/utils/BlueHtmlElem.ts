// [SGLEE:20240205MON_202200] Created

export const _$ = (sel: string): HTMLElement | null => {
  const el = document.querySelector<HTMLElement>(sel);
  if (el === null) {
    console.error(`[_$()] Invalid selector('${sel}')!`);

    debugger;
  }

  return el;
};
