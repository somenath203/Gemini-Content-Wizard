'use client';

import { SignUpButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


const Hero = () => {

  const router = useRouter();

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-100">

      <div className="mx-auto max-w-screen-xl mt-24 px-4 py-32 lg:flex lg:h-screen">

        <div className="mx-auto max-w-xl text-center">

          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary sm:block">

            Gemini Content Wizard

          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-500">
            A powerful AI tool that streamlines content creation, social media optimization, and code generation using the Google Gemini API.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <div
              className="w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto flex items-center justify-center gap-2 hover:cursor-pointer"
              onClick={() => router.push('/dashboard')}
            >
              <span className="font-bold">+</span> <span>Create content with AI</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;