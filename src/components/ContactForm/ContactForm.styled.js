import styled from 'styled-components'

export const FormContact = styled.form`
    border: 1px solid;
    width: 400px;
`

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #757575;
`
export const FormInput = styled.input`
    width: 150px;
    border: 1px solid;
    border-radius: 4px;
    :hover, :focus{
        border: 1px solid #188ce8;
        box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    }
`


export const ButtonSubmit = styled.button`
    display: block;
    font-size: 16px;
    text-align: center;
    color: #fff;
    background: #2196F3;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    border-radius: 4px;
    cursor: pointer;
    padding:8px 24px;
    margin-left: 10px;
    border: rgba(0,0,0,0);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover, :focus{
        background-color: #188ce8;
        color: black;
    }
`