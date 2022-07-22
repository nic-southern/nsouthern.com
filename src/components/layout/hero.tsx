import React from "react";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <>
      <div className="hero min-h-fit bg-base-200 pt-20 pb-20 mt-10 mb-10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              I am a software engineer, programmer, and a project manager by
              trade. I do IT consulting and in the spare time I like to cook,
              fly, and travel.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-y-16 gap-x-16">
        <div className="card w-96 bg-base-100 shadow-xl glass image-full">
          <figure>
            <img src="/images/programming.png" alt="Programming" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Programming</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl glass image-full">
          <figure>
            <img src="/images/flying.jpeg" alt="Flying" />
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
            <img src="/images/food.jpeg" alt="Food" />
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
    </>
  );
}
