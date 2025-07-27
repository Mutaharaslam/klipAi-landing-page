import { BottomCurvedProps } from "@/types/ui";

export const BottomCurved: React.FC<BottomCurvedProps> = ({
  children,
  bgColor,
  curveColor,
}) => {
  return (
    <div
      className={`relative overflow-hidden`}
      style={{ backgroundColor: curveColor }}
    >
      {/* Your Content Here */}
      <div
        className={`w-full h-full md:pt-36 md:pb-72 pt-92 pb-92
             md:rounded-bl-[50%] rounded-bl-[400px] md:rounded-br-[50%] rounded-br-[400px]`}
        style={{ backgroundColor: bgColor }}
      >
        {children}
      </div>
    </div>
  );
};
