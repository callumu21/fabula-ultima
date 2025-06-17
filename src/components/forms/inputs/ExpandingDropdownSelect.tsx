import { useState, type FC } from "react";

interface Props {
  options: string[];
  placeholder: string;
  handleChange: (selectedValues: string[]) => void;
}

const ExpandingDropdownSelect: FC<Props> = ({
  options,
  placeholder,
  handleChange,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([""]);

  const handleSelect = (index: number, value: string) => {
    const updated = [...selectedOptions];
    updated[index] = value;
    setSelectedOptions(updated);
    handleChange(updated);
  };

  const addSelectField = () => {
    setSelectedOptions((currentlySelectedOptions) => [
      ...currentlySelectedOptions,
      "",
    ]);
  };

  const removeSelectField = (index: number) => {
    const updated = selectedOptions.filter((_, i) => i !== index);
    setSelectedOptions(updated);
    handleChange(updated);
  };

  return (
    <div className="flex flex-col gap-2">
      {selectedOptions.map((selectedOption, i) => {
        const selectedOthers = selectedOptions.filter(
          (_, index) => i !== index
        );
        const filteredOptions = options.filter(
          (option) =>
            !selectedOthers.includes(option) || option === selectedOption
        );
        return (
          <div key={i} className="flex items-center space-x-2">
            <select
              value={selectedOption}
              onChange={(e) => {
                handleSelect(i, e.target.value);
              }}
              className="border px-2 py-1 rounded cursor-pointer"
              required
            >
              <option value="">{placeholder}</option>
              {filteredOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {selectedOptions.length > 1 && (
              <button
                type="button"
                onClick={() => removeSelectField(i)}
                className="text-red-500"
              >
                ✖
              </button>
            )}
          </div>
        );
      })}

      {!selectedOptions.includes("") && (
        <button
          type="button"
          onClick={addSelectField}
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 cursor-pointer"
        >
          + Add Another
        </button>
      )}
    </div>
  );
};

export default ExpandingDropdownSelect;
