import {Horario,Motivo, Text,SelectDay, Div1, Div2, Container } from '../Styles/Agendamento.js'

const Sobre = ({ paragraph }) => {
    return (
        <Container>
            <Div1>
                <Div1>{paragraph}</Div1>
                <Div1 style={{backgroundColor:"#a9a9a9", padding:'80px 100px', margin:'10px'}}></Div1>
            </Div1>
            <Div2>
                <SelectDay>
                    <h3>selecione o dia</h3>
                    <p>calendario</p>
                </SelectDay>
                <Horario>
                    <h4>horarios</h4>
                    <div style={{display:'flex'}}>
                    <p>8:0</p>
                    <p>9:1</p>
                    <p>11:0</p>
                    </div>
                </Horario>
                <Motivo>
                    <h3>motivo</h3>
                    <input type="text" />
                    <button>confirmar agendamente</button>
                </Motivo>
            </Div2>
        </Container>
    )
}

export default Sobre;