import { useTheme } from "@src/hooks";

export const LoadingSkeleton = ({
  width = "100%",
  height = "200px",
  className = "",
  colSpan = "",
  responsiveHeights = {},
}: {
  width?: string;
  height?: string;
  className?: string;
  colSpan?: string;
  responsiveHeights?: {
    base?: string;
    sm?: string;
    md?: string;
    lg?: string;
  };
}) => {
  const { theme } = useTheme();

  const heightClasses = Object.entries(responsiveHeights)
    .map(([breakpoint, h]) => `${breakpoint}:h-[${h}]`)
    .join(" ");

  const bgColor = theme === "dark" ? "bg-gray-800/50" : "bg-gray-200/50";
  const shimmerVia = theme === "dark" ? "via-gray-500/20" : "via-white/20";

  return (
    <div
      className={`relative ${bgColor} backdrop-blur-md rounded-2xl shadow overflow-hidden ${colSpan} ${heightClasses} ${className}`}
      style={{ width, height: responsiveHeights.base || height }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent ${shimmerVia} to-transparent opacity-50 animate-shimmer`}
      ></div>
    </div>
  );
};
