// [SGLEE:20221015SAT_224200] Created
// [SGLEE:20220829MON_214700]
//    https://navermaps.github.io/maps.js.ncp/docs/tutorial-UI-Event.html
//    ----
//    Android Chrome에서는 rightclick, longtap 이벤트 미발생
//    Windows Tablet에서는 touch시, rightClick 이벤트 발생
/*
  문서:
    Class: naver.maps.Marker
    https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html
*/

import NaverMapItem, {
  NaverMapItemParams,
  NaverMapItemType,
} from "./NaverMapItem";
import NaverMapLocation from "./NaverMapLocation";

export interface NaverMapMarkerParams extends NaverMapItemParams {
  imageUrl?: string;
  imageSize?: number[]; // [width, height]
}

class NaverMapMarker extends NaverMapItem {
  // + Setters

  set ImageUrl(value: string) {
    const params = this.Params as NaverMapMarkerParams;
    if (!params) return;

    params.imageUrl = value;
    this.setImageUrlAndSize();
  }

  set ImageSize(value: number[]) {
    const params = this.Params as NaverMapMarkerParams;
    if (!params) return;

    params.imageSize = value;
    this.setImageUrlAndSize();
  }

  // + Getters

  get ImageUrl(): string {
    const params = this.Params as NaverMapMarkerParams;
    return params && params.imageUrl ? params.imageUrl : "";
  }

  get ImageSize(): number[] {
    const params = this.Params as NaverMapMarkerParams;
    return params && params.imageSize ? params.imageSize : [0, 0];
  }

  // - Private variables

  private mMarker?: naver.maps.Marker;

  private mOnClickListener?: naver.maps.MapEventListener;
  private mOnRightClickListener?: naver.maps.MapEventListener;

  // Constructor(s)

  // [SGLEE:20221016SUN_15300] 생성자에서 super() 호출 이후 멤버 값 초기화됨!!
  constructor() {
    super();
  }

  // + Public methods

  // - Private methods

  private makeOpts(): naver.maps.MarkerOptions | undefined {
    const params = this.Params as NaverMapMarkerParams;

    if (params.loc === undefined) return;

    const map = params.view.getNative();
    if (!map) return undefined;

    const opts: naver.maps.MarkerOptions = {
      map,
      position: params.loc.getNative(),
    };

    return opts;
  }

  private setImageUrlAndSize(): void {
    const params = this.Params as NaverMapMarkerParams;

    const url = params.imageUrl !== undefined ? params.imageUrl : "";
    let scaledSize =
      params.imageSize !== undefined
        ? new naver.maps.Size(params.imageSize[0], params.imageSize[1])
        : undefined;

    if (scaledSize === undefined) {
      scaledSize = new naver.maps.Size(32, 32);
    }

    this.mMarker?.setIcon({
      url,
      scaledSize,
    });
  }

  // # Overridables methods

  protected onCreate(): void {
    const params = this.Params as NaverMapMarkerParams;

    const opts = this.makeOpts();
    if (!opts) return;

    this.mMarker = new naver.maps.Marker(opts);
  }

  protected onDestroy(): void {
    this.mMarker?.setMap(null);
  }

  protected onMakeParamsDefault(): void {
    super.onMakeParamsDefault();

    const params = this.Params as NaverMapMarkerParams;
    const setIfUndef = (param: string, value: any) => {
      const _params = params as { [key: string]: any };
      if (_params[param] === undefined) _params[param] = value;
    };

    params.type = NaverMapItemType.Marker;

    //
  }

  protected onCheckParams(): string {
    const params = this.Params as NaverMapMarkerParams;
    const msg = super.onCheckParams();
    if (msg !== "") return msg;

    if (params.loc === undefined) return "params.loc === undefined";
    if (params.sn === undefined) return "params.sn === undefined";

    return "";
  }

  protected onSetEventHandlers(add: boolean): void {
    const params = this.Params as NaverMapMarkerParams;
    if (!params) return;

    if (add) {
      // click
      this.mOnClickListener = naver.maps.Event.addListener(
        this.mMarker,
        "click",
        (evt) => {
          if (params.onClick) {
            params.onClick(
              params.clickEventSender ? params.clickEventSender : this
            );
          }
        }
      );
      // right click
      this.mOnRightClickListener = naver.maps.Event.addListener(
        this.mMarker,
        "rightclick",
        (evt) => {
          if (params.onRightClick) {
            params.onRightClick(
              params.clickEventSender ? params.clickEventSender : this
            );
          }
        }
      );
    } else {
      if (this.mOnClickListener) {
        naver.maps.Event.removeListener(this.mOnClickListener);
        this.mOnClickListener = undefined;
      }
      if (this.mOnRightClickListener) {
        naver.maps.Event.removeListener(this.mOnRightClickListener);
        this.mOnRightClickListener = undefined;
      }
    }
  }

  protected onUpdateLocation(
    prev: NaverMapLocation,
    next: NaverMapLocation
  ): boolean {
    this.mMarker?.setPosition(next.Coord);
    return true;
  }

  protected onUpdateTag(prev: any, next: any): boolean {
    return true;
  }

  protected onUpdateVisible(prev: boolean, next: boolean): boolean {
    this.mMarker?.setVisible(next);

    return true;
  }

  protected onGetNative(): any {
    return this.mMarker;
  }
}

export default NaverMapMarker;
