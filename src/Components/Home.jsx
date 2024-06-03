import { Secao1, Secao2, TituloSecao2, ParagrafoSecao2, TextosSecao2, DivImgSecao2, TextoCalendario, Hr, Secao3, ImgSecao3, DivSequencias, Sequencia, BlocoSequencia, TextoSequencia } from '../Styles/Home'

import Img3 from '../../images/imgSecao3.png'


const Home = () => {
    return (
        <>
            <Secao1></Secao1>
            <Secao2>
                <TextosSecao2>
                    <TituloSecao2>LOREM IPSUM</TituloSecao2>
                    <ParagrafoSecao2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a gall
                        ey of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets c
                        ontaining Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lo
                        rem Ipsum.</ParagrafoSecao2>
                </TextosSecao2>
                <DivImgSecao2>
                    <TextoCalendario>CALENDÁRIO<Hr></Hr></TextoCalendario>
                </DivImgSecao2>
            </Secao2>
            <Secao3>
                <ImgSecao3 src={Img3} alt='#' />
                <DivSequencias>
                    <Sequencia>
                        <BlocoSequencia></BlocoSequencia>
                        <TextoSequencia>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</TextoSequencia>
                    </Sequencia>
                    <Sequencia>
                        <BlocoSequencia></BlocoSequencia>
                        <TextoSequencia>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</TextoSequencia>
                    </Sequencia>
                    <Sequencia>
                        <BlocoSequencia></BlocoSequencia>
                        <TextoSequencia>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</TextoSequencia>
                    </Sequencia>
                </DivSequencias>

            </Secao3>
        </>
    )
}

export default Home;