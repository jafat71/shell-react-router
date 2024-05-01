import '../styles/styles.css'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

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
                            .oneOf([true],"Debe aceptar las condiciones. "),
                        jobType: Yup
                            .string()
                            .notOneOf(['Z','Opción no permitida'])
                            .required('Required')
                    }
                )}
            >

                {() => (
                    <Form>
                        <label htmlFor='firstName'>First Name</label>
                        <Field name="firstName" type="text"/>
                        <ErrorMessage component="span" name='firstName'/>

                        <label htmlFor='lastName'>Last Name</label>
                        <Field name="lastName" type="text"/>
                        <ErrorMessage component="span" name='lastName'/>

                        <label htmlFor='email'>Email</label>
                        <Field name="email" type="text"/>
                        <ErrorMessage component="span" name='email'/>

                        <label htmlFor='jobType'>Job Type</label>
                        <Field name="jobType" as="select">
                            <option value="A">Pick A</option>
                            <option value="B">Pick B</option>
                            <option value="C">Pick C</option>
                            <option value="Z">Pick Z</option>
                        </Field>
                        <ErrorMessage component="span" name='jobType'/>

                        <label>
                            <Field name="terms" type="checkbox"/>
                            Terms and Conditions
                        </label>
                        <ErrorMessage component="span" name='terms'/>

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

export default FormikComponents
