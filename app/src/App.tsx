import logo from './assets/birdscreams.gif';

function App() {
  return (
    <div className="text-center">
      <header className="bg-slate-500 flex flex-col items-center justify-center min-h-screen text-white">
        <img
          src={logo}
          className="animate-[spin_20s_linear_infinite] rounded-full text-xl w-60 z-10"
          alt="logo"
        />
        <p
          className="mt-2 text-2xl z-20"
          style={{
            textShadow:
              '-1px 1px 0 #282c34, 1px 1px 0 #282c34, 1px -1px 0 #282c34',
          }}
        >
          Birdscreams
        </p>
      </header>
    </div>
  );
}

export default App;
