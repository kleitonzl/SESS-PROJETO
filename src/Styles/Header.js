import styled from "styled-components"

const Cor = {
    CinzaClaro: "#D9D9D9",
    CinzaMedio: "#C5C5C5",
    CinzaMedio2: "#B0B0B0",
    CinzaEscuro: "#626161",
    White: "#ffffff"
}

export const Navbar = styled.nav`
    background-color: ${Cor.White};
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 120px;
`

export const DivLogo = styled.div`
    display: flex;
    align-items: center;
`

export const LogoTexto = styled.h1`
    color: black;
    font-weight: 800;
    font-size: 20px;
    margin-left: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export const Img = styled.img`
    width: 33px;
    height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const Paginas = styled.div`
    color: black;
`