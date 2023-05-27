import mapboxgl from 'mapbox-gl'
import { Map, MapboxOptions } from 'mapbox-gl'
import { useEffect, useRef } from 'react'

export const useMap = (opts?: MapboxOptions): Map | null => {
  const mapRef = useRef<Map | null>(null)

  useEffect(() => {
    mapRef.current = new Map(opts)

    mapRef.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: false,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: false
      })
    )

    return () => {
      if (mapRef.current) mapRef.current.remove()
    }
  }, [opts])

  return mapRef.current
}
