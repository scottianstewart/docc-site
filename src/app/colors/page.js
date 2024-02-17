"use client";

import colors from "dictionary-of-colour-combinations";

export default function Home() {
  return (
    <main className="m-4 lg:m-10">
      <p className="font-bold mb-16">Colors</p>
      <div className="flex flex-wrap gap-16">
        {colors.map((color, i) => {
          return (
            <div key={i} className={"flex flex-col gap-6"}>
              <div
                style={{ backgroundColor: color.hex }}
                className="h-48 w-48"
              />
              <p className="text-sm opacity-50">{color.name}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
