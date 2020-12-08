import {createGlobalStyle} from 'styled-components'

export const lightTheme = {
    body: '#fff',
    fontColor: 'black'
}

export const darkTheme = {
    body: '#2b2d2f',
    fontColor: '#fff'
}

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${(props) => props.theme.body};
    }

`;