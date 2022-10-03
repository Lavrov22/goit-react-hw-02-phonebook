import styled from 'styled-components'

export const List = styled.ul`
    padding: 10px;
`

export const Item = styled.li`
    display: flex; 
    align-items:center;
    font-size: 14px;
    color: #757575;
    margin-bottom: 10px;
`

export const ButtonDelete = styled.button`
    color: #fff;
    background: #2196F3;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    border-radius: 4px;
    cursor: pointer;
    padding:5px 10px;
    margin-left: 10px;
    border: rgba(0,0,0,0);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover, :focus{
        background-color: #188ce8;
        color: black;
    }
`