////////////////////////////////////////////////////////////////////////////////
// [SGLEE:20240217SAT_003900] Created
////////////////////////////////////////////////////////////////////////////////

export const _setFullScreen = (flag: boolean): void => {
  if (flag === _isFullScreen()) return;

  if (flag)
    document.documentElement.requestFullscreen({
      navigationUI: "hide",
    });
  else document.exitFullscreen();
};

export const _isFullScreen = (): boolean => {
  const ret = document.fullscreenElement != null;
  return ret;
};

export const _toggleFullScreen = (): boolean => {
  const fullScr = _isFullScreen();
  _setFullScreen(!fullScr);

  return !fullScr;
};
