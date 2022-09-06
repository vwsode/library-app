import React, { FC } from 'react'
import LogoImg from '../../../assets/images/logo.svg'


const Logo: FC = () => {
  return (
    <div style={{ display: 'flex'}}>
      <img src={LogoImg} width={40} height={40} alt="" />
      <div style={{ fontWeight: 700}}>
          BOOK<br/>
          <span style={{ fontWeight: 400, fontSize: '18px'}}>world</span>
      </div>
    </div>
  )
}

export default Logo