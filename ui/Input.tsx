interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: () => void;
  required?: boolean;
}

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  required = false,
}: InputProps) {
  return (
    <input
      className="w-full sm:w-[400px] lg:w-[500px] bg-white p-4 rounded-lg text-black shadow-custom  outline-none"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
