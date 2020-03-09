//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad2_styles'
import Container from '../Container'
import Ilex from '../../App/variables'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import InputWords from '../InputWords'
import ButtonUi from '../ButtonControlUI'
import ButtonCheck from '../ButtonCheck'

// styles from styled
import {Olist} from './Actividad2_styles'
import {Item}from './Actividad2_styles'
import { UiButtonsContainer } from './Actividad2_styles'
import ButtonModal from '../ButtonModal'
import { IRow, ICol } from '../Grid'


// Componente base
const Actividad2_base = ({...props}) => {
    return (
        <Container {...props} bgImage='./src/bg_actividad1.png' w={69} h={38.8}>
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Read the text and then answer correctly' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>

            <div className='container-content'>
                <MainTitle color={Ilex.violeta2}> COMPLETE THE SENTENCES WITH THE CORRECT WORDS FROM THE CONVERSATION </MainTitle>
            </div>

            <IRow>                
                <ICol py={1.5}>
                    <Olist>
                        <Item> Mariana  <InputWords /> fruit in Cali.</Item>
                        <Item> Mariana's children   <InputWords /> outside. </Item>
                        <Item> She doesn't  <InputWords /> a healthy brekfast. </Item>
                        <Item> She <InputWords /> the bus to go to work.</Item>
                        <Item> Mariana's children   <InputWords /> a lot of TV. </Item>
                        <Item> Mariana <InputWords/> to work.</Item>
                        <Item> Mariana <InputWords /> to the doctor. </Item>
                        <Item> She  <InputWords /> a lot of junk food. </Item>
                        <Item> Her doctor says she  <InputWords /> to change her food habits.</Item>
                        <Item> They need to  <InputWords /> exercise. </Item>
                    </Olist>


                </ICol>
            </IRow>
            <IRow>
                <ButtonCheck className="check"></ButtonCheck>
            </IRow>
        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`

export default Actividad2
