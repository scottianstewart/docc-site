import colors from "dictionary-of-colour-combinations";

const PalettesSection = ({ palettes, titleColors }) => {
  const paletteLength = palettes[0][1].length;

  return (
    <div>
      <div className="flex flex-col mb-16 mt-16 gap-2">
        <p
          className="font-bold text-white p-2 pl-10"
          style={{ backgroundColor: titleColors[0] }}
        >
          {paletteLength}色の配色帖
        </p>
        <div style={{ backgroundColor: titleColors[1] }} className="h-10" />
        {titleColors[2] && (
          <div style={{ backgroundColor: titleColors[2] }} className="h-10" />
        )}
        {titleColors[3] && (
          <div style={{ backgroundColor: titleColors[3] }} className="h-10" />
        )}
      </div>
      <div className="flex flex-wrap gap-y-16">
        {palettes.map((palette, i) => {
          const paletteWidth =
            (palette[1].length > 3 && "md:w-full 2xl:w-full") ||
            (palette[1].length > 2 && "lg:w-full 2xl:w-1/2") ||
            "w-full lg:w-1/2 2xl:w-1/3";
          return (
            <div key={i} className={paletteWidth + " flex gap-6"}>
              <p className="w-6">{palette[0].toString().padStart(3, "0")}</p>
              <div className="flex pl-6 border-l">
                {palette[1].map((color, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-4 md:gap-2"
                    >
                      <div
                        style={{ backgroundColor: colors[color].hex }}
                        className="h-24 w-24 md:h-32 md:w-32 xl:h-48 xl:w-48"
                      />
                      <div className="text-xs max-w-24 h-6 md:h-4 md:max-w-none text-center">
                        {colors[color].name}
                      </div>
                      <div className="text-xs opacity-50 max-w-24 md:max-w-none text-center">
                        {colors[color].hex}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PalettesSection;