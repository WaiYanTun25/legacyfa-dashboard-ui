import { ButtonProps } from "@components/ui/button/Button.type";

export const Button = ({
  label = "Button",
  disabled = false,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <>
      <button
        className="bg-primary text-white my-4 p-2 px-5 rounded-md"
        onClick={onClick}
        disabled={disabled}
      >
        {disabled ? "Loading..." : label}
      </button>
    </>
  );
};
