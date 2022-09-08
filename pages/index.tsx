import type { NextPage } from 'next'
import { CubeTransparentIcon } from '@heroicons/react/24/outline'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-gray-800">
      <p className="my-3 text-xl">Concept A</p>
      <CubeTransparentIcon />
    </div>
  )
}

export default Home
