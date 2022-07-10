import { useState, useCallback } from "react"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

export const Map = ({ center }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCNv4OkuFcFX30VsoIv9bOiWVAmfON1oyM",
  })

  const containerStyle = {
    border: "none",
    width: "100%",
    height: "400px",
  }
  const [map, setMap] = useState(null)

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      mapContainerClassName="map-container"
      center={center}
      zoom={12}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  )
}
