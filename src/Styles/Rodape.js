import styled from 'styled-components'

const Cor = {
    CinzaClaro: "#D9D9D9",
    CinzaMedio: "#C5C5C5",
    CinzaMedio2: "#B0B0B0",
    CinzaEscuro: "#626161",
    White: "#ffffff"
}

export const Footer = styled.footer`
    background-color: ${Cor.White};
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    gap: 0.5em;
`
export const ImgLogo = styled.img`
    width: 23px;
    height: 30px;
    margin-bottom: -10px;
`

export const Links = styled.div`
    color: black;
    display: flex;
`
export const Span = styled.div`
    margin-left: 15px;
    margin-right: 15px;
`

export const RedesSociais = styled.div`
    display: flex;
    align-items: center;
`

export const LinkRedesSociais = styled.a`
margin-right: 10px;
`
export const IconFacebook = styled.img`
    width: 18px;
    height: 18px;
`
export const IconX = styled.img`
    width: 18px;
    height: 18px;
`
export const IconInstagram = styled.img`
    width: 25px;
    height: 25px;
`

export const Linha = styled.div`
    height: 30px;
    background-color: ${Cor.CinzaEscuro};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextoLinha = styled.h1`
    color: ${Cor.CinzaClaro};
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
`
