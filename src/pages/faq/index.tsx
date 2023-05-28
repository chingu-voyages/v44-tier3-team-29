import React from 'react'
import Layout from '../components/Layout'
import * as Accordion from '@radix-ui/react-accordion'

type TFAQItem = {
  question: string
  answer: string
}

type TFAQItems = TFAQItem[]

export default function FAQ() {
  const faq: TFAQItems = [
    {
      question: 'What is Artemis?',
      answer: `Artemis is a crowd-sourced platform that aims to provide assistance to stray animals in your area. It allows users to upload photos of stray animals that require attention or assistance.`
    },
    {
      question: 'What is the primary objective of Artemis?',
      answer: `The primary objective of Artemis is to aid in reducing the number of stray animals on the streets by facilitating their rescue, rehabilitation, and adoption.`
    },
    {
      question: 'Why was the name "Artemis" chosen for this project?',
      answer: `The name Artemis was chosen because it is the Greek God associated with animals and their protection. It represents the project's inspiration, which is the love and compassion that people have for animals and the desire to create a better world for them.`
    },
    {
      question: 'When did the Artemis project come into existence?',
      answer: `The Artemis project came into existence during Chingu's 44th Voyage, which ran from May 1st, 2023, to June 11th, 2023.`
    },
    {
      question: 'How does Artemis work?',
      answer: `Artemis works as a crowd-sourced platform where users can upload photos of stray animals in their area. These photos can then be viewed by other users who can offer assistance, such as reporting the location to animal rescue organizations or providing temporary shelter for the animal.`
    },
    {
      question: 'Who can use Artemis?',
      answer: `Artemis is open to anyone who wishes to contribute to the cause of assisting stray animals. Users can be animal lovers, volunteers, or individuals looking to ways to help animals in their area.`
    },
    {
      question: 'Are there any costs associated with using Artemis? ',
      answer: `Artemis is a free platform to use. However, there may be costs involved in terms of any adoption fees, veterinary care, or other expenses associated with rescuing and caring for stray animals.`
    },
    {
      question: 'How can I get involved with Artemis?',
      answer: `To get involved with Artemis, you can start by signing up as a user on the platform. From there, you can upload photos of stray animals, browse and offer assistance to animals in need, and connect with local animal rescue organizations.`
    },
    {
      question: 'How can I ensure the safety of the stray animals I encounter?',
      answer: `It's important to prioritize your safety and the safety of the stray animals. If you encounter a stray animal that seems aggressive or dangerous, it's best to contact local animal control or animal rescue organizations for assistance. Always exercise caution and avoid putting yourself or the animal in harm's way.`
    },
    {
      question: 'How can I report issues or provide feedback about Artemis?',
      answer: `Artemis does not currently have a feedback feature on the platform where you can report issues or provide feedback. Instead, you can reach out to the developers of Artemis through the official channels provided (Meet the Devs).`
    }
  ]

  return (
    <Layout>
      <div className='mb-[150px] p-5 mt-10 flex flex-col items-center'>
        <h2 className='text-5xl lg:text-6xl mb-8 mt-16 text-center'>FAQ</h2>
        <Accordion.Root
          type='multiple'
          className='w-full max-w-[800px]'>
          {faq.map((item, index) => {
            return (
              <Accordion.Item
                key={index}
                value={`item-` + index}
                className='m-5'>
                <Accordion.Header className='font-bold border border-artemis-green rounded-lg px-5 py-3'>
                  <Accordion.Trigger className='flex justify-between w-full text-left'>
                    {item.question}
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className='data-[state=open]:animate-slideDown data- animate-slideUp overflow-hidden mx-2'>
                  {''} <br />
                  {item.answer}
                </Accordion.Content>
              </Accordion.Item>
            )
          })}
        </Accordion.Root>
      </div>
    </Layout>
  )
}
