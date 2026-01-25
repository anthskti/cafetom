interface StudyScoreProps {
  score: number;
  size?: "sm" | "md";
}

export function StudyScore({ score, size = "md" }: StudyScoreProps) {
  const dotSize = size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2";
  const gap = size === "sm" ? "gap-1" : "gap-1.5";

  return (
    <div className={`flex items-center ${gap}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`${dotSize} rounded-full transition-colors ${
            i <= score ? "bg-primary" : "bg-border"
          }`}
        />
      ))}
    </div>
  );
}
