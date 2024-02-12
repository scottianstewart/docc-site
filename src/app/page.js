"use client";

import colors from "dictionary-of-colour-combinations";

export default function Home() {
  const map = colors.reduce((map, color, i) => {
    color.combinations.forEach((id) => {
      if (map.has(id)) map.get(id).push(i);
      else map.set(id, [i]);
    });
    return map;
  }, new Map());

  const palettes = [...map.entries()]
    .sort((a, b) => a[0] - b[0])
    .map((e) => e[1]);

  const dyad = palettes.filter((palette) => palette.length === 2);
  const triad = palettes.filter((palette) => palette.length === 3);
  const tetrad = palettes.filter((palette) => palette.length === 4);

  return (
    <main className="m-6 lg:m-10">
      {/* Filter section */}
      {/* <button onClick={() => setFilter(2)}>two</button> */}

      <p className="font-bold mb-16">2色の配色帖</p>
      <div className="flex flex-wrap gap-y-16">
        {palettes.map((palette, i) => {
          const paletteWidth =
            (palette.length > 3 && "md:w-full 2xl:w-full") ||
            (palette.length > 2 && "lg:w-full 2xl:w-1/2") ||
            "w-full lg:w-1/2 2xl:w-1/3";
          return (
            <div key={i} className={paletteWidth + " flex gap-6"}>
              <p className="w-6">{i.toString().padStart(3, "0")}</p>
              <div className="flex pl-6 border-l">
                {palette.map((color, i) => {
                  return (
                    <div key={i} className="flex flex-col items-center gap-4">
                      <div
                        style={{ backgroundColor: colors[color].hex }}
                        className="h-24 w-24 md:h-32 md:w-32 xl:h-48 xl:w-48"
                      />
                      <div className="text-xs max-w-24 md:max-w-none text-center">
                        {colors[color].name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
