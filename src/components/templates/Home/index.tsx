
import * as C from './styles';
import ButtonProp from '../../atoms/ButtonProp';
import Title from '../../atoms/Title';
export default function Home () {
    return(
        <C.Container>
           <Title name="Vamos nessa" color="#ccc"/>
           <ButtonProp name="voltar" bg="#000" color="#fff" size="53px"/>
        </C.Container>
    );
}