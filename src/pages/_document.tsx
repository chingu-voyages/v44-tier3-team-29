import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <title>Artemis | Helping strays, one location at a time.</title>
      <link
        href='https://api.mapbox.com/mapbox-gl-js/v2.4.1/mapbox-gl.css'
        rel='stylesheet'
      />
      <body className="min-h-screen flex flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
