interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  centered = false,
  light = false,
}: SectionTitleProps) {
  const align = centered ? "text-center" : "text-left";
  const textColor = light ? "text-white" : "text-slate-900";
  const descColor = light ? "text-slate-300" : "text-slate-600";
  const eyebrowColor = light ? "text-cyan-400" : "text-blue-600";

  // Replace highlight in title
  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) {
      return <span>{title}</span>;
    }
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`${align} max-w-3xl ${centered ? "mx-auto" : ""} mb-12`}>
      {eyebrow && (
        <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${textColor}`}>
        {renderTitle()}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${descColor}`}>{description}</p>
      )}
    </div>
  );
}
