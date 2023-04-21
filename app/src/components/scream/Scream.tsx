import { addDoc, collection } from 'firebase/firestore';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { Firebase } from '../../utilities/firebase';

function Scream() {
  const user = useContext(UserContext);

  async function postScream(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson: any = Object.fromEntries(formData.entries());

    await addDoc(collection(Firebase.db, 'screams'), {
      author_uid: user?.uid,
      date: new Date().toISOString(),
      message: formJson.scream,
      nest: null,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });

    e.target.reset();
  }

  return (
    <div className="flex-1 px-2">
      <form onSubmit={postScream}>
        <textarea
          className="p-2 text-sm w-full"
          name="scream"
          maxLength={420}
        />
        <button
          className="bg-Primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          scream
        </button>
      </form>
    </div>
  );
}

export default Scream;
