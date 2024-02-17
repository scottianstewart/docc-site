"use client";

import colors from "dictionary-of-colour-combinations";
import PalettesSection from "./components/PalettesSection";

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
    .map((e, i) => [i.toString(), e[1]]);

  const dyad = palettes.filter((palette) => palette[1].length === 2);
  const triad = palettes.filter((palette) => palette[1].length === 3);
  const tetrad = palettes.filter((palette) => palette[1].length === 4);

  const dyadTitleColors = ["#8b835b", "#c27544"];
  const triadTitleColors = ["#a94151", "#c19f2c", "#97acc8"];
  const tetradTitleColors = ["#ae5224", "#00939b", "#40456a", "#fcb315"];

  return (
    <main className="m-4 lg:m-10">
      <PalettesSection palettes={dyad} titleColors={dyadTitleColors} />
      <PalettesSection palettes={triad} titleColors={triadTitleColors} />
      <PalettesSection palettes={tetrad} titleColors={tetradTitleColors} />
    </main>
  );
}
