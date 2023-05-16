'use client'
import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

export default function Map() {
  useEffect(() => {
    // mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY ?? ''

    if (
      !process.env.NEXT_PUBLIC_MAPBOX_KEY &&
      process.env.NODE_ENV === ('development' || 'test')
    ) {
      throw Error('Invalid Mapbox Key.')
    }

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY ?? ''

    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [126.9784, 37.5665],
      zoom: 12
    })

    return () => map.remove()
  }, [])

  return (
    <div className='rounded-lg p-8 mb-24 mx-12'>
      <div
        id='map-container'
        className='rounded-lg h-[800px]'
      />
    </div>
  )
}
