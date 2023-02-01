import * as C from './styles'
type Props = {
    name:string,
    bg:string,
    color:string,
    size:string
}
export default function ButtonProp({name, bg, color, size}:Props){
    return(
        <C.Button name={name} bg={bg} color={color} size={size}>
            <C.ButtonTitle >{name}</C.ButtonTitle>
        </C.Button>
    )
} 

