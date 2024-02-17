"use client";

import colors from "dictionary-of-colour-combinations";

export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap mt-16 gap-16">
        {colors.map((color, i) => {
          return (
            <div key={i} className="flex flex-col gap-6">
              <div
                style={{ backgroundColor: color.hex }}
                className="h-48 w-48"
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm opacity-50">{color.name}</p>
                <p className="text-sm opacity-50">{color.hex}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
