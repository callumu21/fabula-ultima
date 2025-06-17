import {
  type ChangeEventHandler,
  type FC,
  type HTMLInputTypeAttribute,
} from "react";

interface Props {
  labelText: string;
  id: string;
  value: string;
  onChange: ChangeEventHandler;
  isDisabled?: boolean;
  isRequired?: boolean;
  type?: HTMLInputTypeAttribute;
  name?: string;
}

export const Input: FC<Props> = ({
  labelText,
  id,
  type = "text",
  isDisabled = false,
  isRequired = false,
  name,
  onChange,
  value,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        min={0}
        disabled={isDisabled}
        placeholder=""
        required={isRequired}
        name={name}
        onChange={onChange}
        value={value}
        className="block py-2.5 px-0 w-full text-4 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-primaryBlue focus:outline-none focus:ring-0 peer"
      />
      <label
        htmlFor={id}
        className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 peer-focus:text-primaryBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {labelText}
      </label>
    </div>
  );
};

export default Input;
