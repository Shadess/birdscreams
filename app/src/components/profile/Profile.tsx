import { Firebase } from '../../utilities/firebase';

function Profile() {
  return (
    <button
      className="bg-Primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={async () => {
        await Firebase.signOut();
      }}
      type="button"
    >
      Log Out
    </button>
  );
}

export default Profile;
