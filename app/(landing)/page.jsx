import Hero from '@/components/landing/Hero'
import NewProducts from '@/components/landing/NewProducts'

const LandingPage = () => {
  return (
    <div className="mx-auto max-w-screen-xl h-full w-full">
      <Hero />

      <NewProducts />
    </div>
  )
}

export default LandingPage
