import styled, { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`

       
.contenedorButton{
    text-align:right;
    padding-right:3em;
}

li{
    margin:0.5em 0;
}
.container-content{
    margin-top: 3em;
}
.check{
    margin-top: 5.8em;
    margin-left: 69em;
}
`
export const Olist = styled.ol`
    color:${Ilex.textos};
    text-align:center;
    list-style:none;
    counter-reset:contador;

`

export const Item = styled.li`
    font-weight:normal;
    counter-increment:contador;
    padding:0;
    margin:0.2em 0;
    &::before{
        content:counter(contador)')';
        font-weight:bold;
        margin-right:0.75em;
    }
`
export const UiButtonsContainer = styled.div`
    width:6.5em;
    height:3em;
    display: flex;
    justify-content:space-between;
    position:absolute;
    right:${props => props.right || '1.6' }em;
    top:${props => props.top || '1' }em;

`


export default styles
    