/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

// [SGLEE:20240207WED_145500] Created

import { useContext, useEffect } from "react";
import NaverMapLocation from "../../modules/naver-map/NaverMapLocation";
import NaverMapView from "../../modules/naver-map/NaverMapView";
import NaverMapMarker from "../../modules/naver-map/NaverMapMarker";
import { DataContext } from "../../contexts/DataContext";

type OnChangeAddrEvent = (loc: NaverMapLocation) => void;
type OnClickMarkerEvent = (marker: NaverMapMarker) => void;

interface VehicleListMapProps {
  onChangeAddr: OnChangeAddrEvent;
  onClickMarker: OnClickMarkerEvent;
}

const VehicleListMap = (props: VehicleListMapProps) => {
  const dataCtx = useContext(DataContext);

  useEffect(() => {
    console.log("[VehicleListMap] mount");
    //console.log(dataCtx.state.parkingLots);

    /*
    const asyncFunc = async () => {
      // console.log("[VehicleListMap] asyncFunc()");
      const locGuriStation = await NaverMapLocation.fromAddr(
        //"건원대로 34번길 32-29"
        props.addr
      );
      // const locDonongStation = await NaverMapLocation.fromAddr("경춘로 433");

      const view = NaverMapView.getInstance({
        mapElem: "map",
        centerLoc: locGuriStation,
        onCreate: (sender: NaverMapView) => {
          // const m1 = sender.addMarker(locGuriStation, 1);
          // const m2 = sender.addMarker(locDonongStation, 2);
          // m1.ImageUrl = "./images/marker-blue.png";
          // m2.ImageUrl = "./images/marker-gray.png";
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
     */
  }, []);

  useEffect(() => {
    console.log("[VehicleListMap] rendered");
    //console.log(dataCtx.state.parkingLots);

    const asyncFunc = async () => {
      const locGuriStation = await NaverMapLocation.fromAddr(
        dataCtx.state.mapCenterAddr
      );
      const view = NaverMapView.getInstance({
        mapElem: "map",
        centerLoc: locGuriStation,
        zoomControl: false,
        mapTypeControl: false,
        onClick: (sender, loc, item) => {
          if (!loc) return;

          //alert(loc);
          props.onChangeAddr(loc);

          if (item instanceof NaverMapMarker) {
            props.onClickMarker(item as NaverMapMarker);
          }
        },
      });

      dataCtx.state.parkingLots.forEach(async (pl, idx) => {
        const loc = await NaverMapLocation.fromAddr(pl.address);
        const m = view.addMarker(loc, pl.pl_id);
        if (pl.vehicle_usable_count === 0) {
          m.ImageUrl = "./images/markers/marker-gray.png";
        } else {
          m.ImageUrl = "./images/markers/marker-blue.png";
        }
      });
    };

    asyncFunc();
  });

  return (
    <div
      id="map"
      style={{
        // alignSelf: "stretch",
        // flex: "1",
        margin: "-1rem",
      }}
    />
  );
};

export default VehicleListMap;
