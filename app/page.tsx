"use client";
import Image from "next/image";
import Link from "next/link";
interface Card {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
}
export default function Home() {
  const cardItem: Card[] = [
    {
      id: 1,
      icon: "/icons/upload.svg",
      title: "Smart Upload",
      subtitle: "AI-powered upload and organization",
    },
    {
      id: 2,
      icon: "/icons/preview.svg",
      title: "Video Preview",
      subtitle: "Instant AI-generated video previews",
    },
    {
      id: 3,
      icon: "/icons/crop.svg",
      title: "Intelligent Cropping",
      subtitle: "AI-driven image cropping and resizing",
    },
    {
      id: 4,
      icon: "/icons/enhance.svg",
      title: "Magic Enhancement",
      subtitle: "One-click AI enhancements for your media",
    },
  ];
  return (
    <section className="flex-grow">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center flex flex-col gap-4">
          <div className="max-w-md mb-[22rem] ">
            <h1 className="text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Cloudinary Showcase
              </span>
            </h1>
            <p className="py-6 text-lg text-gray-400">
              Unleash the power of AI to transform your media content. Upload,
              preview, and enhance your videos and images with cutting-edge
              technology.
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="card grid grid-cols-1 md:grid-cols-2 mb-8 gap-4 ">
                {cardItem.map((item, index) => (
                  <div
                    className=" flex flex-col justify-center items-center text-center bg-base-100 shadow-xl rounded-xl h-[200px] w-[200px] px-4 space-y-2"
                    key={index}
                  >
                    <Image
                      alt="icon"
                      src={item.icon}
                      height={30}
                      width={30}
                      className="object-cover"
                    />
                    <h2 className="text-xl text-gray-400 font-bold ">
                      {item.title}
                    </h2>
                    <p className="text-gray-400">{item.subtitle}</p>
                  </div>
                ))}
              </div>
              <Link className="mx-auto" href={"/home"}>
                <button className="btn btn-primary btn-wide">
                  Go to Homepage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
