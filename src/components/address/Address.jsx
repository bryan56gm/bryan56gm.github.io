import React, { useContext } from 'react'
// Styled Components
import { AddressBox, AddressItem, AddressIcon, AddressLink, AddressCopy } from './Address.styled'
import Social from '../social/Social'
// Language Context
import { LanguageContext } from '../../contexts/LanguageContext' 

const Address = () => {
  const { languageData } = useContext(LanguageContext);

  return (
    <AddressBox>
      <AddressItem>
        <AddressIcon src='/assets/icons/mobile.svg' alt='Icon Mobile'/>
        <AddressLink href="tel:+34683195755">(+34) 683 195 755</AddressLink>
      </AddressItem>

      <AddressItem>
        <AddressIcon src='/assets/icons/mail.svg' alt='Icon Mail'/>
        <AddressLink href="mailto:bryann56gm@gmail.com">bryann56gm@gmail.com</AddressLink>
      </AddressItem>

      <div>
        <AddressCopy>{`© 2024 Bryann56gm - ${languageData.contact?.developer}`}</AddressCopy>
        <a href="https://kevin-uxui.github.io/portfolio/">
          <AddressCopy>{`© 2024 Kevin-uxui - ${languageData.contact?.designer}`}</AddressCopy>
        </a>
      </div>

      <Social />
    </AddressBox>
  )
}

export default Address;