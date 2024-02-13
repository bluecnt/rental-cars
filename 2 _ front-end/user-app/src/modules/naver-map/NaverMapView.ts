// [SGLEE:20221015SAT_215100] Created
/*
  콘솔: https://console.ncloud.com/naver-service/application
  API 매뉴얼: https://navermaps.github.io/maps.js.ncp/docs/index.html
  --------
  Web Server URLs (2022.10.07.FRI 21:29:00)
    http://localhost:5001
    http://127.0.0.1:5001
    http://192.168.0.2:5001
    http://bluent.iptime.org:5001

    http://www.aaa.com:1000 ~~~~
  --------
  👉 네이버 맵 자바스크립트 모듈 로드 (window.onload 핸들러보다 먼저 호출해야 한다)
    NaverMap.loadJsModule();
  👉 타입스크립트 for Naver Maps
    npm install @types/navermaps
  --------
  React App은 index.html에서 직접 모듈 로드 => <script scr=""></script>
  <script src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=?&&submodules=geocoder"></script>

*/
/*
  문서:
    Class: naver.maps.Map
    https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Map.html
*/

import NaverMapItem from "./NaverMapItem";
import NaverMapLocation from "./NaverMapLocation";
import NaverMapMarker, { NaverMapMarkerParams } from "./NaverMapMarker";

const DebuggerOnError = true;

export type NaverMapViewCreteEventHandler = (sender: NaverMapView) => void;

export type NaverMapViewClickEventHandler = (
  sender: NaverMapView,
  // 맵을 클릭한 경우 유효
  loc: NaverMapLocation | null,
  // 아이템을 클릭한 경우 유효
  item: NaverMapItem | null
) => void;

type IterateItemsCallback = (
  sender: NaverMapView,
  item: NaverMapItem
) => boolean;

export interface NaverMapViewParams {
  mapElem: string;

  centerLoc: NaverMapLocation;
  zoom?: number; // default: 13
  zoomControl?: boolean; // default: true
  mapTypeControl?: boolean; // default: true
  baseTileOpacity?: number; // default: 1

  onCreate?: NaverMapViewCreteEventHandler;

  onClick?: NaverMapViewClickEventHandler;
  onRightClick?: NaverMapViewClickEventHandler;
}

class NaverMapView {
  // + Setters

  set BaseTileOpacity(value: number) {
    if (!this.mParams || !this.mMap) return;

    this.mParams.baseTileOpacity = value;
    this.mMap.setOptions("baseTileOpacity", this.mParams.baseTileOpacity);
  }

  // + Getters

  get BaseTileOpacity(): number {
    return this.mParams !== undefined && this.mParams.baseTileOpacity
      ? this.mParams.baseTileOpacity
      : 1;
  }

  // - Private variables

  private static mInstance: NaverMapView | null = null;

  private mParams?: NaverMapViewParams;
  private mMap?: naver.maps.Map;
  private mNextSn = 1;

  private mOnClickListener?: naver.maps.MapEventListener;
  private mOnRightClickListener?: naver.maps.MapEventListener;

  private mItems: NaverMapItem[] = [];

  // Constructor(s)

  private constructor(params: NaverMapViewParams) {
    this.mParams = params;

    this.makeParamsDefault();
    this.mMap = new naver.maps.Map(params.mapElem, this.makeOpts());
    this.setEventHandlers();

    this.mParams?.onCreate?.(this);
  }

  // + Public methods

  static getInstance(params: NaverMapViewParams): NaverMapView {
    if (!NaverMapView.mInstance)
      NaverMapView.mInstance = new NaverMapView(params);

    return NaverMapView.mInstance;
  }

  /*
  create(params: NaverMapViewParams): void {
    if (this.mMap) {
      console.error(`NaverMapViewClass.create(): Already created!`);
      if (DebuggerOnError) debugger;
      return;
    }

    this.mParams = params;
    this.makeParamsDefault();
    const opts = this.makeOpts();
    this.mMap = new naver.maps.Map(params.mapElem, opts);

    this.setEventHandlers();
  }
  */

  destroy(): void {
    this.setEventHandlers(false);
  }

  getNative(): naver.maps.Map | undefined {
    return this.mMap;
  }

  getNextSn(): number {
    return this.mNextSn++;
  }

  resetNextSn(): void {
    this.mNextSn = 1;
  }

  setCenter(loc: NaverMapLocation): void {
    if (!this.mMap) return;

    this.mMap.setCenter(loc.Coord);
  }

  // + Items methods

  addItem(item: NaverMapItem): number {
    /*
    const _item = this.getItemBySn(item.Type, item.Sn);
    if (_item) {
      console.error(
        `You have same item(type<${item.Type}:${NaverMapItem.typeToStr(
          item.Type
        )}>,` + `sn<${item.Sn}>)!`
      );
      if (DebuggerOnError) debugger;
      return -1;
    }
    */

    const len = this.mItems.push(item);

    return len - 1;
  }

  updateItem(sn: number, item: NaverMapItem): number {
    return -1;
  }

  deleteItemBySn(sn: number): number {
    const item = this.getItemBySn(sn);
    if (!item) return -1;

    const itemSn = item.Sn;
    item.destroy();
    this.mItems = this.mItems.filter((_item) => _item.Sn !== item.Sn);

    return itemSn;
  }

  getItemCount(): number {
    return this.mItems.length;
  }

  isValidItemBySn(sn: number): boolean {
    for (let i = 0; i < this.mItems.length; i++) {
      const _item = this.mItems[i];
      if (_item.Sn === sn) return true;
    }

    return false;
  }

  getItemBySn(sn: number): NaverMapItem | null {
    for (let i = 0; i < this.mItems.length; i++) {
      const item = this.mItems[i];
      if (item.Sn === sn) return item;
    }

    return null;
  }

  getLastItem(): NaverMapItem | null {
    return this.mItems.length > 0 ? this.mItems[this.mItems.length - 1] : null;
  }

  iterateItems(cb: IterateItemsCallback): void {
    for (let i = 0; i < this.mItems.length; i++) {
      const item = this.mItems[i];
      if (!cb(this, item)) break;
    }
  }

  deleteAllItems(): number {
    const cnt = this.mItems.length;

    this.mItems.forEach((item) => item.destroy());
    this.mItems = [];

    return cnt;
  }

  //

  addMarker(
    loc: NaverMapLocation,
    sn: number,
    clickEventSender?: NaverMapItem
  ): NaverMapMarker {
    const p: NaverMapMarkerParams = {
      view: this,
      loc,
      sn,
      //
      onClick: (sender) => {
        if (this.mParams?.onClick) {
          this.mParams.onClick(this, loc, sender);
        }
      },
      onRightClick: (sender) => {
        if (this.mParams?.onRightClick) {
          this.mParams.onRightClick(this, loc, sender);
        }
      },
      //
      clickEventSender,
    };
    const m = new NaverMapMarker();
    m.create(p);

    this.addItem(m);
    return m;
  }

  performClickItem(item: NaverMapItem): void {
    if (this.mParams?.onClick) this.mParams.onClick(this, null, item);
  }

  performRightClickItem(item: NaverMapItem): void {
    if (this.mParams?.onRightClick) this.mParams.onRightClick(this, null, item);
  }

  // - Private methods

  private makeParamsDefault(): void {
    if (!this.mParams) return;

    const setIfUndef = (param: string, value: any) => {
      const _params = this.mParams as { [key: string]: any };
      if (_params[param] === undefined) _params[param] = value;
    };

    setIfUndef("zoom", 14);
    setIfUndef("zoomControl", true);
    setIfUndef("mapTypeControl", true);
    setIfUndef("baseTileOpacity", 1);
  }

  private makeOpts(): naver.maps.MapOptions | undefined {
    if (!this.mParams) return;

    const opts: naver.maps.MapOptions = {
      center: this.mParams.centerLoc?.getNative(),
      zoom: this.mParams.zoom,
      zoomControl: this.mParams.zoomControl,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
      mapTypeControl: this.mParams.mapTypeControl,
      baseTileOpacity: this.mParams.baseTileOpacity,
      disableKineticPan: false,
    };
    return opts;
  }

  private setEventHandlers(set = true): void {
    if (!this.mParams || !this.mMap) return;
    if (set) {
      // click
      this.mOnClickListener = naver.maps.Event.addListener(
        this.mMap,
        "click",
        async (evt: naver.maps.PointerEvent) => {
          if (this.mParams && this.mParams.onClick) {
            const loc = await NaverMapLocation.fromCoord(
              evt.coord as naver.maps.LatLng
            );
            this.mParams.onClick(this, loc, null);
          }
        }
      );

      // right click
      this.mOnClickListener = naver.maps.Event.addListener(
        this.mMap,
        "rightclick",
        async (evt: naver.maps.PointerEvent) => {
          // let t = document.elementFromPoint(
          //   evt.offset.x,
          //   evt.offset.y
          // ) as HTMLDivElement;

          if (this.mParams && this.mParams.onRightClick) {
            const loc = await NaverMapLocation.fromCoord(
              evt.coord as naver.maps.LatLng
            );
            this.mParams.onRightClick(this, loc, null);
          }
        }
      );
    } else {
      if (this.mOnClickListener)
        naver.maps.Event.removeListener(this.mOnClickListener);
      if (this.mOnRightClickListener)
        naver.maps.Event.removeListener(this.mOnRightClickListener);
    }
  }
}

export default NaverMapView;
