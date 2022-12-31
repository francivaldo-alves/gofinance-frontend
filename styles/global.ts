import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle `
*{
    magin:0;
    paddind:0;
    box-sizing: border-box

}
body {
    background-color: ${(props) => props.theme.colors.black2};
    color: ${(props) => props.theme.colors.white};
}

`;