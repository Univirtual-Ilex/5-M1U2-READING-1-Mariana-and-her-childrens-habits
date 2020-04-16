//Import
import React, {useState} from 'react'
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
import Data from './Actividad2_data'
import Modal from '../Generales/Modal'

// Componente base
const Actividad2_base = ({...props}) => {

    const [okInput0, setInput0] = useState(false)
    const [okInput1, setInput1] = useState(false)
    const [okInput2, setInput2] = useState(false)
    const [okInput3, setInput3] = useState(false)
    const [okInput4, setInput4] = useState(false)
    const [okInput5, setInput5] = useState(false)
    const [okInput6, setInput6] = useState(false)
    const [okInput7, setInput7] = useState(false)
    const [okInput8, setInput8] = useState(false)
    const [okInput9, setInput9] = useState(false)

    const [errInput0, setErrInput0] = useState(false)
    const [errInput1, setErrInput1] = useState(false)
    const [errInput2, setErrInput2] = useState(false)
    const [errInput3, setErrInput3] = useState(false)
    const [errInput4, setErrInput4] = useState(false)
    const [errInput5, setErrInput5] = useState(false)
    const [errInput6, setErrInput6] = useState(false)
    const [errInput7, setErrInput7] = useState(false)
    const [errInput8, setErrInput8] = useState(false)
    const [errInput9, setErrInput9] = useState(false)

    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)



    const checkAnswer = (id, text) => {
        var data = Data[id]
        if(text.toLowerCase() === data.answer.toLowerCase()){
            data.right = 1
            console.log(id)
            eval("setInput" + id)(true)
            eval("setErrInput" + id)(false)
        }else{
            data.right = 0
            console.log(id)
            eval("setErrInput" + id)(true)
            eval("setInput" + id)(false)
        }
    }

    const checkActivity = () => {
        var count = 0

        Data.map((data) => {
            if(data.right === 1)
                count ++
            else{
                setOk(false)
                setErr(true)
                setModal(true)
            }

            if(count === Data.length){
                setOk(true)
                setModal(true)
            }
        })
    }


    return (
        <Container {...props} bgImage='./src/bg_actividad1.png' w={69} h={38.8}>
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Read the text and then answer correctly' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => { window.location.reload() } } />
            </UiButtonsContainer>

            <div className='container-content'>
                <MainTitle color={Ilex.violeta2}> COMPLETE THE SENTENCES WITH THE CORRECT WORDS FROM THE CONVERSATION </MainTitle>
            </div>

            <IRow>                
                <ICol py={1.5}>
                    <Olist>
                        <Item> Mariana  <InputWords changeCheck={checkAnswer} idArr={0} ok={okInput0} err={errInput0} /> fruit in Cali.</Item>
                        <Item> Mariana's children   <InputWords changeCheck={checkAnswer} idArr={1} ok={okInput1} err={errInput1} /> outside. </Item>
                        <Item> She doesn't  <InputWords changeCheck={checkAnswer} idArr={2} ok={okInput2} err={errInput2} /> a healthy brekfast. </Item>
                        <Item> She <InputWords changeCheck={checkAnswer} idArr={3} ok={okInput3} err={errInput3} /> the bus to go to work.</Item>
                        <Item> Mariana's children   <InputWords changeCheck={checkAnswer} idArr={4} ok={okInput4} err={errInput4} /> a lot of TV. </Item>
                        <Item> Mariana <InputWords changeCheck={checkAnswer} idArr={5} ok={okInput5} err={errInput5}/> to work.</Item>
                        <Item> Mariana <InputWords changeCheck={checkAnswer} idArr={6} ok={okInput6} err={errInput6} /> to the doctor. </Item>
                        <Item> She  <InputWords changeCheck={checkAnswer} idArr={7} ok={okInput7} err={errInput7} /> a lot of junk food. </Item>
                        <Item> Her doctor says she  <InputWords changeCheck={checkAnswer} idArr={8} ok={okInput8} err={errInput8} /> to change her food habits.</Item>
                        <Item> They need to  <InputWords changeCheck={checkAnswer} idArr={9} ok={okInput9} err={errInput9} /> exercise. </Item>
                    </Olist>


                </ICol>
            </IRow>
            <ButtonCheck onClick={checkActivity} className="check" text={'CHECK'} />
            
            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'#/actividad2'} finished={ok} />
        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`

export default Actividad2
