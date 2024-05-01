import '../styles/styles.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormikYupPage = () => {

    const { handleSubmit, getFieldProps,
        errors, touched } = useFormik({
            initialValues: {
                firstName: "",
                lastName: "",
                email: ""
            },
            onSubmit: values => {
                console.log(values)
            },
            validationSchema: Yup.object(
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
                }
            )
        })

    return (
        <div>
            <h1>Formik Form</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor='firstName'>First Name</label>
                <input 
                type='text' 
                {...getFieldProps('firstName')}
                />
                {
                    touched.firstName && errors.firstName && <span>{errors.firstName}</span>
                }

                <label htmlFor='lastName'>Last Name</label>
                <input type='text' 
                {...getFieldProps('lastName')}
                />
                {
                    touched.lastName && errors.lastName && <span>{errors.lastName}</span>
                }

                <label htmlFor='email'>Email</label>
                <input type='email' 
                {...getFieldProps('email')}
                />
                {
                    touched.email && errors.email && <span>{errors.email}</span>
                }

                <button type='submit'>
                    Submit
                </button>

            </form>
        </div>
    )
}

export default FormikYupPage
