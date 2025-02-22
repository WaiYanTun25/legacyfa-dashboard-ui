import { InputProps } from "@components/ui/input/Input.type";

export const Input = ({
  type = "text",
  label = "Input",
  placeholder = "",
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <label
        htmlFor={type}
        className="text-left text-sm font-semibold text-gray-700"
      >
        {label}
      </label>
      <input
        id={type}
        type={type}
        className="p-3 border rounded-md w-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out hover:border-primary focus:border-primary"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
