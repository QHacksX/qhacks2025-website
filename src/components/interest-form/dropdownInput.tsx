import { Dropdown } from "primereact/dropdown";
import { Dispatch, SetStateAction, use, useState } from "react";
import {
  DropdownTypes,
  dropdownOptions,
} from "@/src/data/dropdown-options/options";

export default function DropdownInput({
  type,
  value,
  setValue,
}: {
  type: DropdownTypes;
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
}) {
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
