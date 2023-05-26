'use client'
import React, { useEffect, useState } from 'react'
import mapboxgl, { LngLat } from 'mapbox-gl'

export default function Map() {
  const [location, setLocation] = useState<LngLat | null>(null)
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_MAPBOX_KEY) {
      throw Error('Invalid Mapbox Key.')
    }

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY

    // TODO: ask for user consent
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude, position.coords.longitude)
        setLocation(
          new LngLat(position.coords.longitude, position.coords.latitude)
        )
      })
    } else {
      console.log('user consent failed.')
    }

    const mapCenter = location ?? new LngLat(126.9784, 37.5665)

    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: mapCenter,
      zoom: 12
    })

    if (consent) {
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          // When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
          // Draw an arrow next to the location dot to indicate which direction the device is heading.
          showUserHeading: true
        })
      )
    }

    return () => map.remove()
  }, [])

  return (
    <div className='rounded-lg mb-[300px] h-[80vh] p-4 mx-10 translate-y-[150px]'>
      <div
        id='map-container'
        className='rounded-lg h-full relative z-10'
      />
    </div>
  )
}
