import '../styles/styles.css'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import TextInput from '../components/TextInput';

export const RegisterFormikPage = () => {
return (
    <div>

        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
                confPassword: ""
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={Yup.object(
                {
                    name: Yup
                        .string()
                        .min(2, "Minimo 2 carácteres")
                        .max(15, "Máximo 15 carácteres")
                        .required(),
                    email: Yup
                        .string()
                        .email('Email no tiene formsto válido')
                        .required(),
                    password: Yup.string()
                        .min(8, 'La contraseña debe tener al menos 8 caracteres')
                        .required('La contraseña es obligatoria'),
                    confPassword: Yup.string()
                        .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
                        .required('La confirmación de la contraseña es obligatoria'),
                }
            )}
        >

            {({ handleReset }) => (
                <Form>
                    <h1>Register Page</h1>
                    <TextInput
                        label='Nombre'
                        name="name"
                        placeholder='Nombre'
                    />

                    <TextInput
                        label='Email'
                        name="email"
                        type='email'
                        placeholder='email@email.com'
                    />

                    <TextInput
                        label='Password'
                        name="password"
                        type='password'
                        placeholder='Your password'
                    />

                    <TextInput
                        label='Password'
                        name="confPassword"
                        type='password'
                        placeholder='Your password'
                    />

                    <button type="submit">
                        Submit
                    </button>
                    <button onClick={handleReset}>
                        Reset
                    </button>
                </Form>
            )

            }

        </Formik>
    </div>
)
}
