interface SectionTitleProps {
  eyebrow?: string;
  index?: string; // ej. "02" — numeración dossier
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({
  eyebrow,
  index,
  title,
  highlight,
  description,
  centered = false,
  light = false,
}: SectionTitleProps) {
  const align = centered ? "text-center" : "text-left";
  const titleColor = light ? "text-paper" : "text-ink";
  const descColor = light ? "text-paper/70" : "text-ink-soft";

  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) return title;
    const [before, after] = title.split(highlight);
    return (
      <>
        {before}
        <span className="text-cobalt">{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <div className={`${align} max-w-3xl ${centered ? "mx-auto" : ""} mb-14`}>
      {(eyebrow || index) && (
        <p
          className={`kicker mb-5 flex items-center gap-3 ${
            centered ? "justify-center" : ""
          } ${light ? "!text-paper/60" : ""}`}
        >
          {index && <span className="text-cobalt">{index}</span>}
          {index && eyebrow && <span className="h-px w-6 bg-cobalt" />}
          {eyebrow && <span>{eyebrow}</span>}
        </p>
      )}
      <h2
        className={`font-display text-[2rem] font-medium leading-[1.06] tracking-[-0.02em] md:text-[2.6rem] ${titleColor}`}
      >
        {renderTitle()}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${descColor}`}>{description}</p>
      )}
    </div>
  );
}
