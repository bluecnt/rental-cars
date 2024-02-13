// [SGLEE:20220828SUN_165800] Created
// [SGLEE:20220829MON_202600]
//    naver.maps.Service.geocode() API 사용시 출력되는 경고 메시지
//    "TypeError: Cannot read properties of undefined (reading 'length')"는
//    네이버 지도 공식 샘플에서도 표시된다.
//    (https://navermaps.github.io/maps.js.ncp/docs/tutorial-3-geocoder-geocoding.example.html)
//    API 버그?
/*
  문서: 
    Geocoder를 활용한 주소와 좌표 검색 API 호출하기
    https://navermaps.github.io/maps.js.ncp/docs/tutorial-Geocoder-Geocoding.html
*/

export interface NaverMapLocationReject {
  loc: NaverMapLocation;
  msg: string;
}

// const DebuggerOnError = true;

class NaverMapLocation {
  // + Setters

  set Tag(value: any) {
    this.mTag = value;
  }

  // + Getters

  get Addr(): string {
    return this.mAddr;
  }

  get Coord(): naver.maps.Coord {
    return this.mCoord;
  }

  // 좌표로 주소를 얻었을 때
  get AddrRoad(): string {
    return this.mAddrRoad;
  }

  get AddrEng(): string {
    return this.mAddrEng;
  }

  // 검색된 주소가 여러 개 일 때
  get Addrs(): string[] {
    return this.mAddrs;
  }

  get Tag(): any {
    return this.mTag;
  }

  // - Private variables

  private mAddr = "";
  private mCoord = new naver.maps.LatLng(0, 0);

  private mAddrRoad = "";
  private mAddrEng = "";
  private mAddrs: string[] = [];

  private mTag?: any;

  // Constructor(s)

  // constructor() {}

  static async fromAddr(addr: string, tag?: any): Promise<NaverMapLocation> {
    try {
      const loc = new NaverMapLocation();
      loc.Tag = tag;
      return await loc.addrToCoord(addr);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  static fromCoord(
    coord: naver.maps.LatLng,
    tag?: any
  ): Promise<NaverMapLocation> {
    const loc = new NaverMapLocation();
    loc.Tag = tag;
    return loc.coordToAddr(coord);
  }

  // + Public methods

  isValid(): boolean {
    return this.isValidAddr() || this.isValidCoord();
  }

  isValidAddr(): boolean {
    return this.mAddr !== "";
  }

  isValidCoord(): boolean {
    const lat = this.mCoord.lat();
    const lng = this.mCoord.lng();
    // console.log(`lat: ${lat}, lng: ${lng}`);

    return lat !== 0 && lng !== 0;
  }

  // resolve: this
  // reject: { loc: this, msg: `Invalid address('${addr}')!` }
  async addrToCoord(addr: string): Promise<NaverMapLocation> {
    if (addr === "") return Promise.reject(`Error => Empty address!`);

    this.mAddr = addr;
    return new Promise((resolve, reject) => {
      naver.maps.Service.geocode({ query: addr }, (status, response): void => {
        if (status === naver.maps.Service.Status.ERROR) {
          this.mAddr = "";
          this.mAddrRoad = "";
          this.mAddrEng = "";
          this.mCoord = new naver.maps.LatLng(0, 0);

          reject(`Error => ${response.v2.errorMessage}`);
        } else {
          if (response.v2.addresses.length > 0) {
            const addr = response.v2.addresses[0];

            this.mAddr = addr.jibunAddress;
            this.mAddrRoad = addr.roadAddress;
            this.mAddrEng = addr.englishAddress;
            this.mCoord = new naver.maps.LatLng(
              parseFloat(addr.y),
              parseFloat(addr.x)
            );

            for (let i = 0; i < response.v2.addresses.length; i++) {
              const addr = response.v2.addresses[i];

              this.mAddrs.push(addr.jibunAddress);
            }

            resolve(this);
          } else {
            this.mAddr = "";
            this.mAddrRoad = "";
            this.mAddrEng = "";
            this.mCoord = new naver.maps.LatLng(0, 0);

            const obj: NaverMapLocationReject = {
              loc: this,
              msg: `Invalid address('${addr}')!`,
            };
            reject(obj);
          }
        }
      });
    });
  }

  async coordToAddr(coord: naver.maps.LatLng): Promise<NaverMapLocation> {
    return new Promise((resolve, reject) => {
      naver.maps.Service.reverseGeocode(
        {
          coords: coord,
          orders: [
            naver.maps.Service.OrderType.ADDR,
            naver.maps.Service.OrderType.ROAD_ADDR,
          ].join(","),
        },
        (status, response): void => {
          // console.log(status, response);

          if (status === naver.maps.Service.Status.ERROR) {
            reject(
              `NaverMapLocation.coordToAddr(): Invalid coord(${coord.lat()},${coord.lng()})!`
            );
          } else {
            // console.log(response);

            const addr = response.v2.address;
            this.mAddr = addr.jibunAddress;
            this.mAddrRoad = addr.roadAddress;
            this.mCoord = coord;
            //
            this.adjustAddrSpaces();
            //
            resolve(this);
          }
        }
      );
    });
  }

  toString(pad = 0): string {
    const _pad = " ".repeat(pad);

    let addrs = "";
    this.mAddrs.forEach((addr, idx) => {
      if (idx === 0) addrs += `[${idx}] '` + addr + "' \n";
      else addrs += _pad + " ".repeat(12) + `[${idx}] '` + addr + "' \n";
    });
    addrs = addrs.substring(0, addrs.length - 2);

    return (
      _pad +
      `- Addr:     '${this.Addr}' \n` +
      _pad +
      `- Coord:    (${this.Coord.x}, ${this.Coord.y}) \n` +
      _pad +
      `- AddrRoad: '${this.AddrRoad}' \n` +
      _pad +
      `- AddrEng:  '${this.AddrEng}' \n` +
      _pad +
      `- Addrs:    ${addrs === "" ? "''" : addrs}`
    );
  }

  getNative(): naver.maps.Coord {
    return this.mCoord;
  }

  // - Private methods

  private adjustAddrSpaces() {
    // [SGLEE:20220307MON_072200] 위치를 주소로 변환 시, 스페이스가 2개인 경우가 있음
    //  ex) { addr: '서울특별시 중랑구 상봉동  500,
    //        addrRoad: '서울특별시 중랑구 망우로  353 상봉 프레미어스 엠코',
    //        addrEng: '', coords: (lat:37.5979973,lng:127.0905059) }

    this.mAddr = this.Addr.replace("  ", " ");
    this.mAddrRoad = this.AddrRoad.replace("  ", " ");
    this.mAddrEng = this.AddrEng.replace("  ", " ");
  }
}

export default NaverMapLocation;
