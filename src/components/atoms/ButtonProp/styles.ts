
import styled from 'styled-components';

export const Button = styled.div`
    background: ${props => props.bg};
    border:1px solid ${props => props.bg};
    padding: 5px 15px;
    width:100%;
    max-width:150px;
    display:flex;
    align-items: center;
    justify-content: center;
`;
export const ButtonTitle = styled.a`
    color:${props => props.color};
    font-size:${props => props.size};
`;
