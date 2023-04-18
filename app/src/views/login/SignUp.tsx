import logo from '../../assets/birdscreams.gif';
import { Firebase } from '../../utilities/firebase';

function SignUp() {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson: any = Object.fromEntries(formData.entries());

    const res = await Firebase.createUser(formJson.email, formJson.password);
    if (!res) {
      console.log('we had errors');
    }
  }

  return (
    <div className="text-center">
      <header className="bg-slate-500 flex flex-col items-center justify-center min-h-screen text-white">
        <img
          src={logo}
          className="animate-[spin_20s_linear_infinite] rounded-full text-xl w-60 z-10"
          alt="logo"
        />

        <div className="bg-slate-50 max-w-sm overflow-hidden p-8 rounded shadow-lg text-black text-start w-full z-20">
          <p className="font-bold text-2x uppercase">Sign Up</p>

          <form className="mt-8" onSubmit={handleSubmit}>
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
              Sign Up
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default SignUp;
