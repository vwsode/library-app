import React, { FC, useState } from 'react'
import { Avatar, HeaderProfile } from './Profile.styles'
import AvtarLogo from '../../../../assets/images/avatar.png'
import { DropdownMenu } from '../../../ui'
import { DROPDOWN_MENU_DATA_LIST } from '../../../../core/data/dropdown-data'

const Profile: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <HeaderProfile onClick={() => setIsActive(!isActive)}>
        <Avatar src={AvtarLogo} />
        <DropdownMenu options={DROPDOWN_MENU_DATA_LIST} isActive={isActive}/>
    </HeaderProfile>
  )
}

export default Profile