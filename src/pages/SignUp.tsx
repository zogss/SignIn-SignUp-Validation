import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field } from 'formik';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import loginImg from '../assets/Login-Image.jpg';

type SignUpData = {
  name: string,
  email: string,
  password:string,
  passwordConfirmation: string
}

const MySwal = withReactContent(Swal);

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Nome muito curto!')
    .max(50, 'Nome muito longo!')
    .required('Nome é obrigatório'),
  email: Yup.string()
    .email("Email inválido")
    .required("Email é obrigatório"),
  password: Yup.string()
    .required("Senha é obrigatória")
    .min(8, "A Senha precisa ter no mínimo 8 caracteres"),
  passwordConfirmation: Yup.string()
    .required("As senhas não batem")
    .oneOf([Yup.ref("password"), null])
});

const Home: React.FC = () => {
  const onSubmit = async (values:SignUpData) => {
    try {
      await validationSchema.validate(values);
    } catch (error) {
      MySwal.fire(
        "Erro",
        (error as Error).message,
        "error"
      )
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img 
        className="w-full h-full object-cover" 
        src={loginImg} alt=""
        />
      </div>

      <div className="bg-gray-800 flex flex-col justify-center">
      <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            passwordConfirmation:''
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form 
            className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
            >
              <h2 className="text-4xl dark:text-white font-bold text-center">CRIAR CONTA</h2>
              <div className="flex flex-col text-gray-400 py-2">
                <label htmlFor="name">Nome</label>
                <Field 
                className="rounded-lg bg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" 
                type="text" 
                name="name" 
                id="name"
                placeholder="Insira o nome"
                />
                {errors.name && touched.name ? (
                  <div className="text-red-600">{errors.name}</div>
                ) : null}
              </div>

              <div className="flex flex-col text-gray-400 py-2">
                <label htmlFor="email">E-mail</label>
                <Field 
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" 
                type="email" 
                name="email" 
                id="email"
                placeholder="Insira o email"
                />
                {errors.email && touched.email ? (
                  <div className="text-red-600">{errors.email}</div>
                ) : null}
              </div>

              <div className="flex flex-col text-gray-400 py-2">
                <label htmlFor="password">Senha</label>
                <Field 
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" 
                type="password" 
                name="password" 
                id="password"
                placeholder="Insira a senha"
                />
                {errors.password && touched.password ? (
                  <div className="text-red-600">{errors.password}</div>
                ) : null}
              </div>

              <div className="flex flex-col text-gray-400 py-2">
                <label htmlFor="password">Confirmar senha</label>
                <Field 
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" 
                type="password" 
                name="passwordConfirmation" 
                id="passwordConfirmation"
                placeholder="Confirme a senha"
                />
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <div className="text-red-600">{errors.passwordConfirmation}</div>
                ) : null}
              </div>

              <div className="flex justify-between text-gray-400 py-2 ">
                <p className="flex items-center ">
                  <input 
                  className="mr-2 rounded-[3.5px] bg-gray-700 hover:bg-blue-800 focus:border-blue-500 focus:bg-gray-800 focus:outline-none transition duration-400 cursor-pointer" 
                  type="checkbox" 
                  />
                  Lembrar-me
                </p>
                <p>
                  <Link className="text-blue-500" to="/">
                    Esqueceu a senha?
                  </Link>{" "}
                </p>
              </div>

              <button 
              type="submit" 
              className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 text-gray-300 font-semibold rounded-lg"
              >
                Criar
              </button>

              <div className="mt-2 flex justify-center text-gray-400 py-1">
                <p>
                  Já possui uma conta? clique{" "} 
                  <Link className="text-blue-500" to="/sign-in">
                    aqui
                  </Link>{" "}
                </p>     
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
};

export default Home;
