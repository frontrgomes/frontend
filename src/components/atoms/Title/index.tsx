import * as C from './styles'
type Props = {
    name:string,
    color:string,
    size:string,
    weight:string
}
export default function Title({name, color, size, weight}:Props){
    return(
        <C.H1 color={color} size={size} weight={weight}>{name}</C.H1>
    )
} 

