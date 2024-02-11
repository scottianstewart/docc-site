import colors from "dictionary-of-colour-combinations";

export default function Home() {
  console.log(colors);
  return (
    <main className="flex flex-wrap m-10">
      {colors.map((color, i) => {
        return (
          <div key={i} className="m-4 flex flex-col gap-2 items-center">
            <div style={{ backgroundColor: color.hex }} className="h-6 w-6" />
            {color.name}
          </div>
        );
      })}
    </main>
  );
}
