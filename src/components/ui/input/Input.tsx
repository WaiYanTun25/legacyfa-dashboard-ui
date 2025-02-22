import { InputProps } from "@components/ui/input/Input.type";

export const Input = ({
  type = "text",
  label = "Input",
  placeholder = "",
  onChange,
  trigger = () => {},
  error,
}: InputProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <label
        htmlFor={type}
        className="text-left text-sm font-semibold text-gray-600"
      >
        {label}
      </label>
      <input
        id={type}
        type={type}
        className={`p-3 border border-gray-300 rounded-md w-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out hover:border-primary focus:border-primary ${
          error && "border-red-500"
        }`}
        placeholder={placeholder}
        onChange={(event) => {
          onChange(event);
          trigger();
        }}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
