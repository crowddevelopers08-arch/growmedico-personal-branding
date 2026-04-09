import { marqueeItems } from "./content";

export function MarqueeBand() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden bg-[#33bdb0] py-3.5">
      <div className="flex w-max animate-[marquee_22s_linear_infinite] whitespace-nowrap">
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-3.5 px-9 text-[0.9rem] font-bold uppercase tracking-[0.1em] text-[#080c0b]"
          >
            <span className="h-1 w-1 rounded-full bg-[rgba(0,0,0,0.3)]" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

