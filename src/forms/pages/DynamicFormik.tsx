/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Form, Formik } from 'formik'
import formJson from '../data/custom-form.json'
import TextInput from '../components/TextInput'
import SelectInput from '../components/SelectInput'
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
    initialValues[input.name] = input.value

    if(!input.validations) continue

    let schema = Yup.string();

    for (const rule of input.validations) {
        if  (rule.type === "required"){
            schema = schema.required("Este campo es requerido")
        }

        if(rule.type === "minLength"){
            schema = schema.min(rule.value! as any || 2,"Tamaño minimo de carácteres:" + rule.value!)
        }

        
        if(rule.type === "email"){
            schema = schema.email("Formato de correo no válido")
        }
    }

    requiredFields[input.name] = schema;
}

const validationScehma = Yup.object({...requiredFields})

export const DynamicFormik = () => {
    return (
        <div>
            <h1>Dinamic Form</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationScehma}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                {(formik) => (
                    <Form noValidate>
                        {
                            formJson.map(({ type, name, placeholder, label, options }) => {

                                if (type === 'input' || type === 'password' || type === 'email'){
                                    return (
                                        <TextInput
                                            key={name}
                                            type={(type as any)}
                                            name={name}
                                            label={label}
                                            placeholder={placeholder}
                                        />
                                    )
                                }else if(type === "select"){
                                    return (
                                        <SelectInput
                                            key={name}
                                            label={label}
                                            name={name}
                                        >
                                            <option value="">Select an option</option>
                                            {
                                                options?.map((option)=>(
                                                    <option 
                                                    key={option.id}
                                                    value={option.name}
                                                    >
                                                        {option.name}
                                                    </option>
                                                ))
                                            }
                                        </SelectInput>
                                    )
                                }
                                return <span>Type: {type} no soportado</span>
                            })
                        }
                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
