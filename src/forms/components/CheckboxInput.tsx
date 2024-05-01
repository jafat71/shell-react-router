/* eslint-disable @typescript-eslint/no-explicit-any */

import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    [x: string]: any;
}

const CheckboxInput = ({ label, ...props }: Props) => {
    const [field] = useField({ ...props, type: 'checkbox' });

    return (
        <>
            <label htmlFor={props.id || props.name}>
                <input
                    type="checkbox"
                {...field}
                {...props}
                    />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span"/>
        </>
    )
}

export default CheckboxInput