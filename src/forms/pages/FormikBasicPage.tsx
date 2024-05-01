import '../styles/styles.css'
import { FormikErrors, useFormik } from 'formik'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

const FormikBasicPage = () => {

    const validate = (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {};
        if (!values.firstName) {
            errors.firstName = "Required"
        } else if (values.firstName.length > 15) {
            errors.firstName = "Must be 15 characters or less"
        }

        if (!values.lastName) {
            errors.lastName = "Required"
        } else if (values.lastName.length > 10) {
            errors.lastName = "Must be 10 characters or less"
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-sZ0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        onSubmit: values => {
            console.log(values)
        },
        validate,
    })

    return (
        <div>
            <h1>Formik Form</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' onBlur={handleBlur} name="firstName" onChange={handleChange} value={values.firstName} />
                {
                    touched.firstName && errors.firstName && <span>{errors.firstName}</span>
                }

                <label htmlFor='lastName'>Last Name</label>
                <input type='text' onBlur={handleBlur} name="lastName" onChange={handleChange} value={values.lastName} />
                {
                    touched.lastName && errors.lastName && <span>{errors.lastName}</span>
                }

                <label htmlFor='email'>Email</label>
                <input type='email' onBlur={handleBlur} name="email" onChange={handleChange} value={values.email} />
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

export default FormikBasicPage
