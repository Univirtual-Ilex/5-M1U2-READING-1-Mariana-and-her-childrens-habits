import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import ButtonX from '../ButtonX'
import estilos_home from './Home_styles'
import { ButtonLink } from '../ButtonX'


const Home_base = function ({...props}) { // se le pasan las props para recibir los styled components

    return (
        <Container {...props}  row bgImage="src/bg.png">

                    <div className='bloque-izquierdo'>
                        <div className='bloque-izquierdo-container'>
                            <h1> Mariana and her children's habits </h1>
                            <p>
                            Read Mariana's text about her habits and identify the ones that are healthy and unhealthy. Complete the exercise using the model example.
                            <span className='negrilla'> <br/> <br/> ¡Time to practice your reading skill!</span></p>
                            <ButtonLink to='/actividad1'>Start</ButtonLink>
                        </div>
                    </div>
                    <div className='bloque-derecho'>
                        <figure>
                            <img src='./src/cover.png' alt='Logo' />    
                        </figure>

                    </div>

        </Container>
    )
}

const Home = styled(Home_base)`
    ${ estilos_home }
`

export default Home