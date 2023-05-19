import Image from 'next/image'

interface SVGComponentProps {
  url: string
  alt: string
  width: number
  height: number
  CSSclass: string
}

const SVGComponent: React.FC<SVGComponentProps> = ({
  url,
  alt,
  width,
  height,
  CSSclass
}) => {
  return (
    <Image
      src={url}
      alt={alt}
      width={width}
      height={height}
      className={CSSclass}
    />
  )
}

export default SVGComponent
