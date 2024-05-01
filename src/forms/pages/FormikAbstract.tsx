import '../styles/styles.css'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import TextInput from '../components/TextInput'
import SelectInput from '../components/SelectInput'
import CheckboxInput from '../components/CheckboxInput'

const FormikAbstract = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>

            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    terms: false,
                    jobType: ""
                }}
                onSubmit={
                    values => {
                        console.log(values)
                    }
                }
                validationSchema={Yup.object(
                    {
                        firstName: Yup.string()
                            .max(15, "Máximo 15 carácteres")
                            .required(),
                        lastName: Yup.string()
                            .max(15, "Máximo 15 carácteres")
                            .required(),
                        email: Yup
                            .string()
                            .email('Email no tiene formsto válido')
                            .required(),
                        terms: Yup
                            .boolean()
                            .oneOf([true], "Debe aceptar las condiciones. "),
                        jobType: Yup
                            .string()
                            .notOneOf(['Z', 'Opción no permitida'])
                            .required('Required')
                    }
                )}
            >

                {() => (
                    <Form>
                        <TextInput
                            label={'First Name'}
                            name={'firstName'}
                            placeholder='Your Name'
                        />

                        <TextInput
                            label={'Last Name'}
                            name={'lastName'}
                            placeholder='Your Last Name'
                        />

                        <TextInput
                            label={'Email'}
                            name={'email'}
                            placeholder='youremail@email.com'
                        />

                        <SelectInput
                            label={'Job Type'}
                            name={'jobType'}>
                            <option value="A">Pick A</option>
                            <option value="B">Pick B</option>
                            <option value="C">Pick C</option>
                            <option value="Z">Pick Z</option>
                        </SelectInput>

                        <CheckboxInput 
                            label={'Terms and conditions'} 
                            name={'terms'}/>

                        <button type='submit'>
                            Submit
                        </button>
                    </Form>
                )

                }
            </Formik>


        </div>
    )
}

export default FormikAbstract
