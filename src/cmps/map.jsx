import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

export const Map = ({ center }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC7-PFigwWJ4vca_uLhDjlUOtXhUGwD4zo",
  })

  const containerStyle = {
    border: "none",
    width: "100%",
    height: "400px",
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      mapContainerClassName="map-container"
      center={center}
      zoom={12}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  )
}
