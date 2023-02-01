
import * as C from './styles';
import Button from '@mui/material/Button';
import ButtonProp from '../../atoms/ButtonProp';
export default function Home () {
    return(
        <C.Container>
           <C.H1>Eueueu2</C.H1>
           <Button variant="contained">Hello World</Button>
           <ButtonProp name="voltar" bg="#000" color="#fff" size="23px"/>
        </C.Container>
    );
}