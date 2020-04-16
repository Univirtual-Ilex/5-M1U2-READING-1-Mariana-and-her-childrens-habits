import React from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import ButtonCheck from '../ButtonCheck'
import {ICol, IRow} from '../Grid'
import PersonaHover from '../PersonaHover'
// Styles
import styled from 'styled-components'
import styles, { UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'

// Data
import data from './Actividad_data'








const Actividad_base =  ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} h={38}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Read the text and then answer correctly' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => { window.location.reload() } } />
            </UiButtonsContainer>

            <IRow pt={1.5}>
                <ICol py={ 0.5 }>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    READ MARIANA'S TEXT ABOUT HER HABITS AND IDENTIFY THE ONES THAT ARE HEALTHY AND UNHEALTHY
                    </MainTitle>  
                </ICol>
                
            <div className="fondo-texto">
                 <h6>Mariana and her children's habits</h6>
                 <p>Mariana and her childern live in Cali. She is from a small town in Risaralda, Belén de Umbría.</p>
                 <p> Many things are different in Cali. The food is very different from the usual food she eats in Belén.
                    When Maria is in Belén, she has a big lunch with lots of vegestables. She also likes to eat tomato salad but now that she lives in Cali,
                    she doesn't eat healthy. She eats food with fat, sugar and oil in Cali. </p>
                 <p>A typical breakfast for Mariana and her children is eggs, aborrajado, bread, sausages and soda. She doesn't walk that much in Cali
                    because it i a busy city. Mariana often prefers to drive or take a bus to go to work. So, Mariana's body is a little different now.</p>
                 <p> Mariana eats junk food like hot dogs, pizza or hamburgers for dinner because she doesn't have time to prepare food at home. Also,
                    her children eat the same food because the don't know how to cook.</p>
                  <p>  Her children like watching T.V a lot. They do not go outside to play.</p>
                  <p> Every time Mariana goes to the doctor, he says she needs to eat more fruit and vegetables. He says that too much junk food is bad for her. 
                    He says that that she and her children need to exercise more.
                 </p>
            </div>
           
                <ButtonCheck link={'/Actividad2'} className="next" text={'Next'}></ButtonCheck>
            </IRow>
            
            
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad