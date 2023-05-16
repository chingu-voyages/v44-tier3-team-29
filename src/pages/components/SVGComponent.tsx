import Image from 'next/image'

interface SVGComponentProps {
  url: string
  alt: string
  width: number
  height: number
}

const SVGComponent: React.FC<SVGComponentProps> = ({
  url,
  alt,
  width,
  height
}) => {
  return (
    <Image
      src={url}
      alt={alt}
      width={width}
      height={height}
    />
  )
}

export default SVGComponent
