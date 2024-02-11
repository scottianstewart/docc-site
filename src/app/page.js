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

  const deux = palettes.filter((palette) => palette.length === 2);
  const trois = palettes.filter((palette) => palette.length === 3);
  const quatre = palettes.filter((palette) => palette.length === 4);

  return (
    <main className="m-10">
      {/* Filter section */}
      {/* <button onClick={() => setFilter(2)}>two</button> */}

      <p className="font-bold opacity-50 mb-16">2色の配色帖</p>
      <div className="flex flex-wrap gap-16">
        {palettes.map((palette, i) => {
          return (
            <div key={i} className="w-50 flex gap-6">
              <p className="w-6 opacity-50">{i.toString().padStart(3, "0")}</p>
              <div className="flex border-l pl-6 border-black/50">
                {palette.map((color, i) => {
                  return (
                    <div key={i} className="flex flex-col items-center gap-4">
                      <div
                        style={{ backgroundColor: colors[color].hex }}
                        className="h-48 w-48"
                      />
                      <div className="opacity-50">{colors[color].name}</div>
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
