import React, { useContext } from "react";
import { KakaoMapContext } from "./Map";
import InfoWindow from "./InfoWindow";

interface MapInfoWindowProps {
  position: {
    lat: number;
    lng: number;
  };
  options?: {
    /**
     * 인포윈도우를 열 때 지도가 자동으로 패닝하지 않을지의 여부 (기본값: false)
     */
    disableAutoPan?: boolean;

    /**
     * 삭제 가능한 인포윈도우
     */
    removable?: boolean;

    /**
     * 인포윈도우 엘리먼트의 z-index 속성 값
     */
    zIndex?: number;

    /**
     * 로드뷰에 올라있는 인포윈도우의 높이 값(m 단위)
     */
    altitude?: number;

    /**
     * 로드뷰 상에서 인포윈도우의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 인포윈도우는 보이지 않게 된다
     */
    range?: number;
  };
}

const MapInfoWindow: React.FC<MapInfoWindowProps> = ({
  position,
  children,
  options,
}) => {
  const map = useContext(KakaoMapContext);

  return (
    <InfoWindow
      map={map}
      position={new kakao.maps.LatLng(position.lat, position.lng)}
      options={options}
    >
      {children}
    </InfoWindow>
  );
};

export default MapInfoWindow;