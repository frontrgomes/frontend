import * as C from './styles'
type Props = {
    name:string,
    bg:string,
    color:string,
    size:string
}
export default function ButtonProp({name, bg, color, size}:Props){
    return(
        <C.Button name={name} bg={bg}>
            <C.ButtonTitle color={color} size={size}>{name}</C.ButtonTitle>
        </C.Button>
    )
} 

