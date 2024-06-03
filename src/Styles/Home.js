import styled from "styled-components"

const Cor = {
    CinzaClaro: "#D9D9D9",
    CinzaMedio: "#C5C5C5",
    CinzaMedio2: "#B0B0B0",
    CinzaEscuro: "#626161",
    White: "#ffffff"
}

export const Secao1 = styled.section`
    background-color: ${Cor.CinzaMedio};
    min-width: 1300px;
    height: 600px;
    margin: 100px 100px;
    border-radius: 20px;
`

export const Secao2 = styled.section`
    display: flex;
    margin: 0px 100px;
    justify-content: space-between;
    margin-bottom: 100px;
`

export const TituloSecao2 = styled.h1`
    color: black;
    font-size: 30px;
`

export const ParagrafoSecao2 = styled.p`
    color: black;
    width: 700px;
`

export const TextosSecao2 = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
`

export const DivImgSecao2 = styled.div`
    height: 450px;
    width: 350px;
    background-color: ${Cor.CinzaMedio};
    border-radius: 20px;
`

export const TextoCalendario = styled.h3`
    font-family: Arial, Helvetica, sans-serif;
    color: ${Cor.CinzaEscuro};
    font-weight: 400;
    font-size: 15px;
    text-align: center;
`

export const Hr = styled.hr`
    margin: 10px;
`

export const Secao3 = styled.section`
    margin: 0px 150px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ImgSecao3 = styled.img`
    height: 480px;
    width: 400px;
`

export const DivSequencias = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const Sequencia = styled.div`
    display: flex;
    align-items: center;
`

export const BlocoSequencia = styled.div`
    background-color: ${Cor.CinzaMedio2};
    width: 50px;
    height: 50px;
    border-radius: 15px;
`

export const TextoSequencia = styled.h3`
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    width: 500px;
    margin-left: 30px;
`