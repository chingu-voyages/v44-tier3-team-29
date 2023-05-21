import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import SVGComponent from '../components/SVGComponent'

type TDevInfo = {
  name: string
  portfolioURL: string
  githubURL: string
  responsibilities: string
}

type TDevInfos = TDevInfo[]

export default function MeetTheDevs() {
  const devsInfos: TDevInfos = [
    {
      name: 'anna',
      portfolioURL: 'https://haanna.com',
      githubURL: 'https://github.com/ha-anna',
      responsibilities: 'Responsible for design, wireframes, frontend...'
    },
    {
      name: 'devim',
      portfolioURL: '',
      githubURL: 'https://github.com/devimalka',
      responsibilities: 'Responsible for backend, frontend...'
    },
    {
      name: 'horus',
      portfolioURL: '',
      githubURL: 'https://github.com/nubiv',
      responsibilities: 'Responsible for backend, frontend...'
    },
    {
      name: 'lei',
      portfolioURL: '',
      githubURL: 'https://github.com/leixdd',
      responsibilities: 'Responsible for backend, frontend...'
    }
  ]

  return (
    <Layout>
      <div className='mb-[150px] relative z-[1] p-5 mt-10 flex flex-col items-center'>
        <h2 className='text-5xl lg:text-6xl mb-8 mt-16 text-center'>Meet the Devs</h2>
        <div className='p-4 max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-center'>
          {devsInfos.map(dev => {
            return (
              <div
                key={dev.name}
                className='p-4 bg-artemis-white min-h-[200px] border-2 border-artemis-black rounded-lg w-[250px] md:w-[350px]'>
                <div className='flex p-1'>
                  <SVGComponent
                    url={`/images/icons/${dev.name}-icon.svg`}
                    alt={''}
                    width={46}
                    height={46}
                    CSSclass={''}
                  />
                  <div className='ml-3 mt-1.5'>
                    <h3 className='capitalize font-semibold'>{dev.name}</h3>
                    <Link href={dev.portfolioURL}>portfolio</Link> |{' '}
                    <Link href={dev.githubURL}>github</Link>
                  </div>
                </div>
                <p className='mt-2 p-2'>{dev.responsibilities}</p>
              </div>
            )
          })}
        </div>
      </div>
      <SVGComponent
        url={`/images/meet-the-devs.svg`}
        alt={''}
        width={100}
        height={100}
        CSSclass={'absolute top-0 left-0 right-0 w-full h-full z-0 overflow-hidden hidden lg:block'}
      />
      <SVGComponent
        url={`/images/meet-the-devs-mobile.svg`}
        alt={''}
        width={100}
        height={100}
        CSSclass={'absolute top-[200px] opacity-70 left-0 right-0 w-full h-full z-0 overflow-hidden lg:hidden'}
      />
    </Layout>
  )
}
