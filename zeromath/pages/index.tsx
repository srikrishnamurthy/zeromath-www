import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import { sanityClient, urlFor } from "../sanity"
import {Post} from "../typings";

interface Props {
  posts: [Post];
}

const Home: NextPage<Props> = ({posts}) => {
  console.log(posts);
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
          <h1 className="text-6xl max-w-xl md:text-4xl lg:text-6xl font-rsfbold"> 
            <span className="underline decoration-white decoration-4"> <span className=" text-fuchsia-500">zero</span>math </span> 
            takes you from 
            <span className=" text-fuchsia-500"> zero </span> 
            math knowledge to zero knowledge circuit 
            <span className=" text-fuchsia-500"> hero </span> 
          </h1>
          <h2 className="text-lg font-rsfmedium"> 
            Read, learn, and practice fundamental number theory concepts to eventually build zero knowledge circuits 
          </h2>
        </div>
        <img className="hidden px-24 h-32 md:h-64 md:inline-flex lg:h-96"src="/solo-inv-pink.png" alt=""/>
      </div>
      {/* posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 font-rsfmedium">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden  bg-black">
              <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt=""/>
              <div className="flex justify-between p-5">
                <div className='items-center	'>
                  <p className="text-lg font-bold text-fuchsia-500">{post.title}</p>
                  <p className="text-xs text-white">{post.description}</p>
                  <p className="text-xs text-white">by {post.author.name}</p>
                </div>
                <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()!} alt=""/>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

// this is where the server prebuilds the page
export const getServerSideProps = async () => {
  const query  = `*[_type == "post"]{
    _id,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query); //  TypeError: Cannot read properties of undefined (reading 'fetch')
  
  return { props: { posts } };
};

export default Home;
