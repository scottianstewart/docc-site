import colors from "dictionary-of-colour-combinations";

export default function Home() {
  console.log(colors);
  return (
    <main className="flex flex-wrap m-10">
      {colors.map((color, i) => {
        return (
          <div key={i} className="m-4">
            {color.name}
          </div>
        );
      })}
    </main>
  );
}
