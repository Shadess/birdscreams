/* eslint-disable jsx-a11y/label-has-associated-control */
import logo from '../../assets/birdscreams.gif';
import LoginForm from './components/LoginForm';

function Login() {
  return (
    <div className="text-center">
      <header className="bg-slate-500 flex flex-col items-center justify-center min-h-screen text-white">
        <img
          src={logo}
          className="animate-[spin_20s_linear_infinite] rounded-full text-xl w-60 z-10"
          alt="logo"
        />

        <LoginForm />
      </header>
    </div>
  );
}

export default Login;
