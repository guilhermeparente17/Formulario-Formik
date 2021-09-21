import React from 'react'
import { Formik, Form } from 'formik'

import {
    FormikContainer,
    FormikTitle,
    FormikCampo,
    FormikLabel,
    FormikButton
} from './FormElements'

const FormFormik = () => {
    return (
        <FormikContainer>
            <FormikTitle>Coleta de Dados</FormikTitle>
            <Formik
            initialValues={{nome: "", idade: "", email: "", cidade: ""}}
            onSubmit={(values) => {
               alert(JSON.stringify(values,null,2)) 
            }}
            >
                <Form>
                    <FormikLabel>Nome</FormikLabel>
                    <FormikCampo width={30} name="nome" type="text" />

                    <br />

                    <FormikLabel>Idade</FormikLabel>
                    <FormikCampo width={15} name="idade" type="text" />
                    
                    <br />

                    <FormikLabel>Email</FormikLabel>
                    <FormikCampo width={30} name="email" type="text" />
                    
                    <br />

                    <FormikLabel>Cidade</FormikLabel>
                    <FormikCampo width={15} name="cidade" type="text" />
                    
                    <br />

                    <FormikButton type="submit">Enviar</FormikButton>
                </Form>
            </Formik>
        </FormikContainer>
    )
}

export default FormFormik
