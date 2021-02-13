import axios from 'axios';

interface LoginForm {
  email: string;
  password: number;
}

const login = (loginForm: LoginForm) => {
  const { email, password } = loginForm;
  //console.log(email, password);
};

export { login };
