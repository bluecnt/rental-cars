// [SGLEE:20221015SAT_221300] Created

import NaverMapLocation from "./NaverMapLocation";
import NaverMapView from "./NaverMapView";

const DebuggerOnError = true;

export enum NaverMapItemType {
  Marker,
  Polyline,
  CustomOverlay,
  Label,
  //
  Custom0 = 1000,
  Custom1,
  Custom2,
  Custom3,
  Custom4,
  Custom5,
  Custom6,
  Custom7,
  //
  None = -1,
}

export type NaverMapItemClickEventHandler = (sender: NaverMapItem) => void;

export interface NaverMapItemParams {
  view: NaverMapView;
  // 상속받은 인터페이스에서 loc을 제공하는 경우 불필요
  loc?: NaverMapLocation;
  // 상속받은 클래스에서 type을 지정해야함
  type?: NaverMapItemType;
  // 상속받은 인터페이스에서 sn을 제공하는 경우 불필요
  sn?: number;
  tag?: any;
  //
  visible?: boolean; // default: true
  //
  zIndex?: number;
  //
  onClick?: NaverMapItemClickEventHandler;
  onRightClick?: NaverMapItemClickEventHandler;
  //
  clickEventSender?: NaverMapItem;
}

class NaverMapItem {
  // + Setters

  set Location(value: NaverMapLocation | undefined) {
    if (!this.mParams || !value) return;

    const params = { ...this.mParams, loc: value };
    this.updateParams(params);
  }

  set Tag(value: any) {
    if (!this.mParams) return;

    const params = { ...this.mParams, tag: value };
    this.updateParams(params);
  }

  set Visible(value: boolean) {
    if (!this.mParams) return;

    const params = { ...this.mParams, visible: value };
    this.updateParams(params);
  }

  // + Gettters

  get Params(): NaverMapItemParams | undefined {
    return this.mParams;
  }

  get View(): NaverMapView | undefined {
    return this.mParams?.view;
  }

  get Location(): NaverMapLocation | undefined {
    return this.mParams?.loc;
  }

  get Type(): NaverMapItemType {
    return this.mParams && this.mParams.type !== undefined
      ? this.mParams.type
      : NaverMapItemType.None;
  }

  get Sn(): number {
    return this.mParams && this.mParams.sn ? this.mParams.sn : 0;
  }

  get Tag(): any {
    return this.mParams?.tag;
  }

  get Visible(): boolean {
    return this.mParams && this.mParams.visible !== undefined
      ? this.mParams.visible
      : false;
  }

  // - Private variables

  private mParams?: NaverMapItemParams;

  // Constructor(s)

  // [SGLEE:20221016SUN_15300] 생성자에서 super() 호출 이후 멤버 값 초기화됨!!
  constructor() {}

  // + Public methods

  create(params: NaverMapItemParams): void {
    this.mParams = params;
    this.onMakeParamsDefault();
    const chkParamMsg = this.checkParams();
    if (chkParamMsg !== "") {
      console.error(`NaverMapItem.create(): ${chkParamMsg} `);
      if (DebuggerOnError) debugger;
      return;
    }
    this.onCreate();
    this.setEventHandlers(true);
  }

  destroy() {
    this.setEventHandlers(false);
    this.onDestroy();
  }

  getNative(): any {
    return this.onGetNative();
  }

  toString(pad = 0): string {
    const _pad = " ".repeat(pad);
    return (
      _pad +
      `- loc     : '${this.Location ? this.Location.Addr : ""}' \n` +
      _pad +
      `- type    : ${NaverMapItem.typeToStr(this.Type)} \n` +
      _pad +
      `- sn      : ${this.Sn} \n` +
      _pad +
      `- visible : ${this.Visible}`
    );
  }

  static isSameItem(item1: NaverMapItem, item2: NaverMapItem): boolean {
    return item1.Type === item2.Type && item1.Sn === item2.Sn;
  }

  static typeToStr(type: NaverMapItemType) {
    switch (type) {
      case NaverMapItemType.Marker:
        return "Marker";

      case NaverMapItemType.Polyline:
        return "Polyline";

      case NaverMapItemType.CustomOverlay:
        return "CustomOverlay";

      case NaverMapItemType.Label:
        return "Label";

      case NaverMapItemType.Custom0:
        return "Custom0";

      case NaverMapItemType.Custom1:
        return "Custom1";

      case NaverMapItemType.Custom2:
        return "Custom2";

      case NaverMapItemType.Custom3:
        return "Custom3";

      case NaverMapItemType.Custom4:
        return "Custom4";

      case NaverMapItemType.Custom5:
        return "Custom5";

      case NaverMapItemType.Custom6:
        return "Custom6";

      case NaverMapItemType.Custom7:
        return "Custom7";
    }
  }

  // - Private methods

  private checkParams(): string {
    return this.onCheckParams();
  }

  private updateParams(params: NaverMapItemParams): void {
    if (!this.mParams) return;

    if (this.mParams.loc !== params.loc) {
      if (this.mParams.loc !== undefined && params.loc !== undefined) {
        if (this.onUpdateLocation(this.mParams.loc, params.loc))
          this.mParams.loc = params.loc;
      }
    } else if (this.mParams.tag !== params.tag) {
      if (this.onUpdateTag(this.mParams.tag, params.tag))
        this.mParams.tag = params.tag;
    }
    if (this.mParams.visible !== params.visible) {
      if (
        this.onUpdateVisible(
          this.mParams.visible !== undefined ? this.mParams.visible : false,
          params.visible !== undefined ? params.visible : false
        )
      )
        this.mParams.visible = params.visible;
    }
  }

  private setEventHandlers(add: boolean): void {
    this.onSetEventHandlers(add);
  }

  // # Overridables methods

  protected onCreate(): void {
    console.error(`NaverMapItem.onCreate(): You must override this method!`);
    if (DebuggerOnError) debugger;
  }

  protected onDestroy(): void {
    console.error(`NaverMapItem.onDestroy(): You must override this method!`);
    if (DebuggerOnError) debugger;
  }

  protected onMakeParamsDefault(): void {
    if (!this.mParams) return;

    const setIfUndef = (param: string, value: any) => {
      const _params = this.mParams as { [key: string]: any };
      if (_params[param] === undefined) _params[param] = value;
    };

    this.mParams.visible = true;

    //
  }

  protected onCheckParams(): string {
    if (!this.mParams) return "!this.mParams";

    if (this.mParams.loc !== undefined && !this.mParams.loc.isValid())
      return "Invalid location!";
    if (
      this.mParams.type === undefined ||
      this.mParams.type === NaverMapItemType.None
    )
      return "Invalid item type!";

    return "";
  }

  protected onSetEventHandlers(add: boolean): void {}

  // true: continue, false: break
  protected onUpdateLocation(
    prev: NaverMapLocation,
    next: NaverMapLocation
  ): boolean {
    return true;
  }

  protected onUpdateTag(prev: any, next: any): boolean {
    return true;
  }

  protected onUpdateVisible(prev: boolean, next: boolean): boolean {
    return true;
  }

  protected onGetNative(): any {
    return undefined;
  }
}

export default NaverMapItem;
