import { Firebase } from '../../utilities/firebase';

function Main() {
  return (
    <div className="bg-slate-500 flex flex-col items-center justify-center min-h-screen text-white">
      <p>HI!</p>
      <button
        className="bg-Primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={async () => {
          await Firebase.signOut();
        }}
        type="button"
      >
        Log Out
      </button>
    </div>
  );
}

export default Main;
