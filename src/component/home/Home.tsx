import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

function Home() {
  return (
    <div className="flex flex-col w-full mt-24" id="home">
      <Carousel className="" placeholder={undefined} autoplay loop={true}>
        <div className="relative h-full w-full">
          <img
            src="/assets/img1.jpg"
            alt="1"
            className="h-full w-full object-cover"
            width={30}
            height={30}
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xs md:text-4xl lg:text-5xl"
                placeholder={undefined}
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-xs md:text-xl lg:text-2xl"
                placeholder={undefined}
              >
                It is not so much for its beauty that the forest makes a claim
              </Typography>
              <div className="flex justify-center gap-2">
                <Button
                  // size="sm"
                  // size={{ base: "sm", md: "md", lg: "lg" }}
                  color="white"
                  placeholder={undefined}
                  className="md:w-md lg:w-lg"
                >
                  Explore
                </Button>
                <Button
                  // size="sm"
                  // size={{ base: "sm", md: "md", lg: "lg" }}
                  color="white"
                  variant="text"
                  placeholder={undefined}
                  className="md:w-md lg:w-lg"
                >
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="/assets/img4.jpg"
            alt="1"
            className="h-full w-full object-cover"
            width={30}
            height={30}
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xs md:text-4xl lg:text-5xl"
                placeholder={undefined}
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-xs md:text-xl lg:text-2xl"
                placeholder={undefined}
              >
                amazing
              </Typography>
              <div className="flex gap-2">
                <Button size="sm" color="white" placeholder={undefined}>
                  Explore
                </Button>
                <Button
                  size="sm"
                  color="white"
                  variant="text"
                  placeholder={undefined}
                >
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="/assets/img4.jpg"
            alt="1"
            className="h-full w-full object-cover"
            width={30}
            height={30}
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xs md:text-4xl lg:text-5xl"
                placeholder={undefined}
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-xs md:text-xl lg:text-2xl"
                placeholder={undefined}
              >
                It is not so much for its beauty that the forest makes a claim
              </Typography>
              <div className="flex gap-2">
                <Button size="sm" color="white" placeholder={undefined}>
                  Explore
                </Button>
                <Button
                  size="sm"
                  color="white"
                  variant="text"
                  placeholder={undefined}
                >
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
