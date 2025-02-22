import { ButtonProps } from "@components/ui/button/Button.type";

export const Button = ({
  label = "Button",
  onClick = () => {},
}: ButtonProps) => {
  return (
    <>
      <button
        className="bg-primary text-white p-2 px-5 rounded-md"
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};
