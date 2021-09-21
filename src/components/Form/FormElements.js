import styled from 'styled-components'
import { Field } from 'formik'

export const FormikContainer = styled.div`
    margin-left: 10%;
`

export const FormikTitle = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    color: #4a4a4a;
    font-size: 44px;
    margin-bottom: 40px;
`

export const FormikLabel = styled.label`
    margin-right: 20px;
`

export const FormikCampo = styled(Field)`
    padding: 5px;
    width: ${props => props.width}%;
    font-size: 16px;
    margin-bottom: 20px;
    border: 2px solid #46FA6F;
    font-family: 'Open Sans', sans-serif;
    outline: none;
    border-radius: 5px;
`

export const FormikButton = styled.button`
    width: 150px;
    height: 40px;
    padding: 10px;
    text-align: center;
    background-color: #504AFF;
    outline: none;
    border: 1px solid white;
    cursor: pointer;
    border-radius: 15px;

    &:hover{
        background-color: #372FF4;
        color: white;
    }
`   



