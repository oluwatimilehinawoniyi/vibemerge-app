"use client";
import { useEffect, useState } from "react";
import "./titbit.css";

export default function TitBits() {
  return (
    <section className="titbits flex gap-4 w-full">
      <ModelCard />
      <CardStacks />
    </section>
  );
}

function ModelCard() {
  return (
    <div className="titbit_image flex flex-col justify-between p-4 w-1/2">
      <span className="merged px-3 py-1 text-white rounded-full text-sm">
        merged
      </span>
      <div className="text-white">
        <h3 className="text-xl font-semibold text-[var(--aquamarine)]">
          All those jams <br /> merged on the go
        </h3>
      </div>
    </div>
  );
}

function CardStacks() {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "It's your vibe; You can merge it as you want!",
      color: "--aquamarine",
    },
    {
      id: 2,
      text: "Enjoy the mashup of your favourite artists altogether",
      color: "--light-red",
    },
    {
      id: 3,
      text: "Focus on your day while we make it a blissful one",
      color: "--ultra-violet",
    },
    {
      id: 4,
      text: "Enjoy the mashup of your favourite artists altogether",
      color: "--vista-blue",
    },
  ]);

  useEffect(() => {
    function cycleCards() {
      setCards([...cards.slice(1), cards[0]]);
    }

    const interval = setInterval(cycleCards, 5000);
    return () => clearInterval(interval);
  }, [cards]);

  return (
    <div className="flex gap-4 w-1/2 card_stacks">
      {cards.map((item) => (
        <div
          key={item.id}
          className="card p-4"
          style={{ backgroundColor: `var(${item.color})` }}
        >
          <p className="text-white">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
