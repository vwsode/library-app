import React, { Dispatch, FC, SetStateAction } from 'react'
import { StyledDropdown, DropdownItem, DropdownContent } from './DropdownMenu.styles'
import { IoIosArrowDown } from 'react-icons/io';
import { IDropdownItem } from '../../../core/intefaces/IDropdownItem.interface';

interface IDropdownMenu {
  isActive: boolean;
  options: IDropdownItem[];
}

const DropdownMenu: FC<IDropdownMenu> = ({ options, isActive, ...props }) => {
  return (
    <StyledDropdown>
        <IoIosArrowDown/>
        <DropdownContent>
          {isActive && options.map((item) => (
            <DropdownItem key={item.id}>{item.title}</DropdownItem>
          )) }
        </DropdownContent>
    </StyledDropdown>
  )
}

export default DropdownMenu