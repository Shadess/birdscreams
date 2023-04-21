import Digestion from '../../components/digestion/Digestion';
import Profile from '../../components/profile/Profile';
import Scream from '../../components/scream/Scream';

function Main() {
  return (
    <div className="bg-slate-500 flex justify-center min-h-screen">
      <div className="flex max-w-4xl w-full">
        <div className="w-72">
          <Profile />

          <hr className="bg-slate-400 border-0 h-px my-4 w-full" />

          <Scream />
        </div>

        <div className="border-l border-r border-slate-400 flex-1">
          <Digestion />
        </div>
      </div>
    </div>
  );
}

export default Main;
