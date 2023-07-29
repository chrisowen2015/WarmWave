import About from '@/components/Homepage/about'
import Contact from '@/components/Homepage/contact'
import Gallery from '@/components/Homepage/gallery'
import Header from '@/components/Homepage/header'
import Spacer from '@/components/spacer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Spacer height={60} />
      <Gallery />
      <Spacer height={100} />
      <Contact />
      <Spacer height={75} />
    </>
  )
}
