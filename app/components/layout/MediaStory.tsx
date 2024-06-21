"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const assets = [
  {
    id: 1,
    img: "/poster images/damn.jpg",
  },
  {
    id: 2,
    img: "/poster images/Miles.jpg",
  },
  {
    id: 3,
    img: "/poster images/musicRetro.jpg",
  },
  {
    id: 4,
    img: "/poster images/sza.jpg",
  },
];

export default function MediaStory() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(Array(assets.length).fill(0));

  useEffect(() => {
    const autoChangeStory = setInterval(() => {
      setCurrentStoryIndex((prev) => (prev < assets.length - 1 ? prev + 1 : 0));
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        newProgress[currentStoryIndex] = newProgress[currentStoryIndex] + 2;

        if (newProgress[newProgress.length - 1] >= 100) {
          setProgress(Array(assets.length).fill(0));
        }
        return newProgress;
      });
    }, 100);

    return () => {
      clearInterval(autoChangeStory);
      clearInterval(progressInterval);
    };
  }, [currentStoryIndex]);

  function handleStoryChange(index: number) {
    setCurrentStoryIndex(index);
    for (let i = 0; i < progress.length; i++) {
      if (i < index) {
        progress[i] = 100;
      } else {
        progress[i] = 0;
      }
    }
  }

  return (
    <section className="media_story w-full h-full relative bg-[var(--vista-blue)] rounded-xl overflow-hidden">
      <div className="h-full w-full relative">
        <Image
          src={assets[currentStoryIndex].img}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="flex gap-4 absolute z-10 bottom-4 left-4 right-4 ">
        {progress.map((p, index) => (
          <button
            key={index}
            onClick={() => handleStoryChange(index)}
            className="flex-1 h-1 rounded-full cursor-pointer overflow-hidden relative"
            style={{
              backgroundColor: "var(--vista-blue)",
            }}
          >
            <div
              className="h-full"
              style={{
                transition: "width 0.5s ease",
                backgroundColor: "var(--light-red)",
                width: `${p}%`,
              }}
            ></div>
          </button>
        ))}
      </div>
    </section>
  );
}
