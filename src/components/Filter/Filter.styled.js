import styled from 'styled-components'

export const FilterLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #757575;
`

export const FilterInput = styled.input`
    width: 150px;
    border: 1px solid;
    border-radius: 4px;
    :hover, :focus{
        border: 1px solid #188ce8;
        box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    }
`