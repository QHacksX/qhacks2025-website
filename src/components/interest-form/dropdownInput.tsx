import { Dropdown } from "primereact/dropdown";
import { Dispatch, SetStateAction } from "react";
import {
  DropdownTypes,
  dropdownOptions,
} from "@/src/data/dropdown-options/options";
import "../../css/style.css";

/**
 * Dropdown component for a given DropdownType.
 * @param type - the type of dropdown
 * @param value - the value to display
 * @setValue - setter for the value
 * @returns
 */
export default function DropdownInput({
  title,
  type,
  value,
  setValue,
}: {
  title: string
  type: DropdownTypes;
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
}) {
  // We get the config for the dropdown by the type
  const dropdownConfig = dropdownOptions.get(type);

  const itemTemplate = (item: any) => {
    return (
      <div className='bg-white p-4 text-black hover:bg-gray-300'>
        {item.value}
      </div>
    );
  };

  return (
    <div>
      <label
        htmlFor='phone'
        className='block mb-2 text-xl font-thin text-gray-900 dark:text-gray-300'
      >
        {title}
      </label>
      <Dropdown
        value={value}
        onChange={(e) => setValue(e.value)}
        options={dropdownConfig?.options}
        optionLabel={dropdownConfig?.label}
        placeholder={dropdownConfig?.placeholder}
        className='w-min md:w-14rem text-lg font-thin text-gray-300 ml-5'
        filter={type === DropdownTypes.age ? false : true}
        itemTemplate={itemTemplate}
        filterPlaceholder='Search'
        emptyFilterMessage={()=><></>}
      />
    </div>
  );
}
