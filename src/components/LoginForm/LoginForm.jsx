import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'


const initialValues = {
    login: '',
    password: '',
}

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().required().min(6).max(12),
});

export const LoginForm = () => {
    const handleFormSubmit = (values,{resetForm}) => {
        console.log(values);
        resetForm();
}
    return (
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit} validationSchema={schema}>
        <Form autoComplete="off" >
            <label>
                Login
                    <Field type="text" name="login" />
                    <ErrorMessage name="login" component="div"/>
            </label>
            <label>
             Password
                    <Field type="text" name="password" />
                    <ErrorMessage name="password"component="div" />
            </label>
 <button type="submit">Submit</button>
            </Form>
            </Formik>
  )  
}