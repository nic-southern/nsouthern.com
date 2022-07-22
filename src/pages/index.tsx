import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Hero from "../components/layout/hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicolas Southern</title>
        <meta
          name="description"
          content="I am a software engineer, programmer, and a project manager by trade. I do IT consulting and in the spare time I like to cook, fly, and explore."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center p-4">
        <Hero />
        <div className="flex justify-center gap-y-16 gap-x-16">
          <div className="card w-96 bg-base-100 shadow-xl glass image-full h-96">
            <figure>
              <Image
                src="/images/programming.png"
                alt="Programming"
                layout="fill"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Programming and IT</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl glass image-full">
            <figure>
              <Image src="/images/flying.jpg" alt="Flying" layout="fill" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Flying</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl glass image-full">
            <figure>
              <Image src="/images/food.jpg" alt="Food" layout="fill" />
            </figure>

            <div className="card-body">
              <h2 className="card-title">Food & Travel</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
