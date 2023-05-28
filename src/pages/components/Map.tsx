'use client'
import React, { useEffect, useState } from 'react'
import mapboxgl, { LngLat } from 'mapbox-gl'
import { useMap } from '@/lib/hooks/useMap'

export default function Map() {
  const [location, setLocation] = useState<LngLat | null>(null)
  const [consent, setConsent] = useState(false)
  const map = useMap({
    container: 'map-container',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: new LngLat(126.9784, 37.5665),
    zoom: 12,
    accessToken: process.env.NEXT_PUBLIC_MAPBOX_KEY ?? ''
  })

  useEffect(() => {
    if (!consent || !map) return

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

    map.addControl(
      new mapboxgl.GeolocateControl({
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
      })
    )
    // eslint-disable-next-line
  }, [consent])

  useEffect(() => {
    if (!location || !map) return

    map.setCenter(location)
    // eslint-disable-next-line
  }, [location])

  return (
    <div className='rounded-lg mb-[300px] h-[80vh] p-4 mx-10 translate-y-[150px]'>
      {/* <button onClick={() => setConsent(true)}>Agreed</button> */}
      <div
        id='map-container'
        className='rounded-lg h-full relative z-10'
      />
    </div>
  )
}
