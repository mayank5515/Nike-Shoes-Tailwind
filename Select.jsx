import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";
export default function Select({
  title,
  options,
  inCart = true,
  className,
  onChange,
  value,
}) {
  return (
    <div className="relative dark:text-black">
      <select
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
        className={twMerge(
          `border border-gray-300 appearance-none bg-white w-24 p-4 ${className} `
        )}
      >
        {inCart && (
          <option value={""} disabled hidden>
            {title}
          </option>
        )}
        {options.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-4 ">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
