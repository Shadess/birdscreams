import { Firebase } from '../../../utilities/firebase';

function LoginForm() {
  async function handleLogin(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson: any = Object.fromEntries(formData.entries());

    const res = await Firebase.signIn(formJson.email, formJson.password);
    if (!res) {
      console.log('we had errors');
    }
  }

  return (
    <div className="bg-slate-50 max-w-sm overflow-hidden p-8 rounded shadow-lg text-black text-start w-full z-20">
      <p className="font-bold text-2x uppercase">Log In</p>

      <form className="mt-8" onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="email"
          >
            Email
            <input
              className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="text"
              placeholder="email"
            />
          </label>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
            <input
              className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="****************"
            />
          </label>
        </div>

        <button
          className="bg-Primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Log In
        </button>
      </form>

      <div className="relative flex items-center justify-center">
        <span className="absolute bg-slate-50 border border-slate-300 px-1 rounded text-slate-400 text-sm">
          OR
        </span>
        <hr className="h-px my-8 bg-slate-100 border-0 dark:bg-slate-300 w-full" />
      </div>
      <div className="text-center">
        <p className="text-sm">
          Need an account?{' '}
          <a className="text-Primary uppercase underline" href="/signup">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
