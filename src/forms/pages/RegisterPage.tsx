import '../styles/styles.css'
import useForm from '../hooks/useForm'

export const RegisterPage = () => {

    const {
        name, email, password, confPassword,
        data,
        onChange,
        resetForm,
        isValidEmail } = useForm({
            name: '',
            email: '',
            password: '',
            confPassword: ''
        });

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(data)
    }


    return (
        <div>
            <h1>Register Page</h1>

            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {
                    name.trim().length <= 0 && (<span>Este campo es necesario</span>)
                }


                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className={`${isValidEmail(email) && 'has-error'}`}
                />
                {
                    !isValidEmail(email) && <span>Email no es válido</span>
                }

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    className={`${password.trim().length <= 6 && 'has-error'} ${password.trim().length < 6 && 'has-error'} `}
                />
                {
                    password.trim().length <= 0 && (<span>Este campo es necesario</span>)
                }
                {
                    password.trim().length < 6 && (<span>Contraseña no es de tamaño adecuado (6 carácteres)</span>)
                }

                <input
                    type="password"
                    placeholder="Confirm assword"
                    name="confPassword"
                    value={confPassword}
                    onChange={onChange}
                    className={`${confPassword.trim().length <= 6 && 'has-error'} ${confPassword.trim().length < 6 && 'has-error'} `}
                    />
                {
                    confPassword.trim().length <= 0 && (<span>Este campo es necesario</span>)
                }
                {
                    confPassword.trim().length < 6 && (<span>Contraseña no es de tamaño adecuado (6 carácteres)</span>)
                }
                <button type="submit">
                    Submit
                </button>

                <button onClick={resetForm}>
                    Reset
                </button>
            </form>
        </div>
    )
}
