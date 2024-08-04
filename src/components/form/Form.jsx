import React, { useContext } from 'react'
// Styled Components
import { FormLetter, FormContent, FormField, FormLabel, FormInput, FormTextArea } from './Form.styled';
// Component
import Button from '../button/Button'
// Language Context
import { LanguageContext } from '../../contexts/LanguageContext';

const Form = () => {
    const { languageData } = useContext(LanguageContext);

    return(
        <FormLetter>
            <FormContent action="https://formsubmit.co/bryann56gm@gmail.com" method="POST">
                <FormField>
                    <FormLabel htmlFor="name">{languageData.contact?.name}</FormLabel>
                    <FormInput type="text" id='name' name='Name'/>
                </FormField>
                <FormField>
                    <FormLabel htmlFor="mail">{languageData.contact?.mail}</FormLabel>
                    <FormInput type="email" id='mail' name='Mail'/>
                </FormField>
                <FormField>
                    <FormLabel htmlFor="subject">{languageData.contact?.subject}</FormLabel>
                    <FormInput type="text" id='subject' name='Subject'/>
                </FormField>
                <FormField>
                    <FormLabel htmlFor="message">{languageData.contact?.message}</FormLabel>
                    <FormTextArea id="message" name="Message"></FormTextArea>
                </FormField>

                <Button icon='send'>{languageData.contact?.button}</Button>
            </FormContent>
        </FormLetter>
    )
}

export default Form;