import { Dropdown } from "primereact/dropdown";
import { Dispatch, SetStateAction } from "react";
import {
  DropdownTypes,
  dropdownOptions,
} from "@/src/data/dropdown-options/options";

/**
 * Dropdown component for a given DropdownType. 
 * @param type - the type of dropdown 
 * @param value - the value to display
 * @setValue - setter for the value
 * @returns 
 */
export default function DropdownInput({
  type,
  value,
  setValue,
}: {
  type: DropdownTypes;
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
}) {

  // We get the config for the dropdown by the type
  const dropdownConfig = dropdownOptions.get(type);

  return (
    <Dropdown
      value={value}
      onChange={(e) => setValue(e.value)}
      options={dropdownConfig?.options}
      optionLabel={dropdownConfig?.label}
      placeholder={dropdownConfig?.placeholder}
      className='w-full md:w-14rem'
    />
  );
}
