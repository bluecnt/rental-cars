/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

// [SGLEE:20240207WED_145500] Created

import { useEffect } from "react";
import NaverMapLocation from "../../modules/naver-map/NaverMapLocation";
import NaverMapView from "../../modules/naver-map/NaverMapView";
import NaverMapMarker from "../../modules/naver-map/NaverMapMarker";

type OnChangeAddrEvent = (loc: NaverMapLocation) => void;
type OnClickMarkerEvent = (marker: NaverMapMarker) => void;

interface VehicleListMapProps {
  addr: string;
  onChangeAddr: OnChangeAddrEvent;
  onClickMarker: OnClickMarkerEvent;
}

const VehicleListMap = (props: VehicleListMapProps) => {
  useEffect(() => {
    // console.log("[VehicleListMap] mount");

    const asyncFunc = async () => {
      // console.log("[VehicleListMap] asyncFunc()");

      const locGuriStation = await NaverMapLocation.fromAddr(
        //"건원대로 34번길 32-29"
        props.addr
      );
      const locDonongStation = await NaverMapLocation.fromAddr("경춘로 433");

      const view = NaverMapView.getInstance({
        mapElem: "map",
        centerLoc: locGuriStation,
        onCreate: (sender: NaverMapView) => {
          const m1 = sender.addMarker(locGuriStation, 1);
          const m2 = sender.addMarker(locDonongStation, 2);

          m1.ImageUrl = "./images/marker-blue.png";
          m2.ImageUrl = "./images/marker-gray.png";
        },
        onClick: (sender, loc, item) => {
          if (!loc) return;

          //alert(loc);
          props.onChangeAddr(loc);

          if (item instanceof NaverMapMarker) {
            props.onClickMarker(item as NaverMapMarker);
          }
        },
      });
    };

    asyncFunc();
  }, []);

  useEffect(() => {
    // console.log("[VehicleListMap] rendered");
  });

  return (
    <div
      id="map"
      style={{
        // backgroundColor: "lightblue",

        alignSelf: "stretch",
        flex: "1",
      }}
    />
  );
};

export default VehicleListMap;
