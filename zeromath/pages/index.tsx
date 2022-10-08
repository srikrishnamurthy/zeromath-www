import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    /* Navigation Header and Landing Text */
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>zeromath</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <Header/>
    
      <div className="flex justify-between items-center bg-black border-y border-black py-10">
        <div className="px-10 space-y-5 text-center lg:text-left text-white">
          <h1 className="text-6xl max-w-xl md:text-4xl lg:text-6xl"> 
            <span className="underline decoration-white decoration-4"> <span className=" text-fuchsia-500">zero</span>math </span> 
            takes you from 
            <span className=" text-fuchsia-500"> zero </span> 
            math knowledge to zero knowledge circuit 
            <span className=" text-fuchsia-500"> hero </span> 
          </h1>
          <h2 className="text-lg"> 
            Read, learn, and practice fundamental number theory concepts to eventually build zk circuits 
          </h2>
        </div>
        <img className="hidden px-24 h-32 md:h-64 md:inline-flex lg:h-96"src="/solo-inv-pink.png" alt=""/>
      </div>
    </div>
  )
}

export default Home
