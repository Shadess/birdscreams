import logo from '../assets/birdscream.gif';

export default function Home() {
  return (
    <>
      <div class="text-center">
        <header class="bg-gray-800 flex flex-col items-center justify-center min-h-screen text-white">
          <img
            src={logo}
            class="animate-[spin_20s_linear_infinite] rounded-full text-xl w-60 z-10"
            alt="logo"
          />
          <p
            class="mt-2 text-2xl z-20"
            style={{
              'text-shadow':
                '-1px 1px 0 #282c34, 1px 1px 0 #282c34, 1px -1px 0 #282c34',
            }}
          >
            Birdscreams
          </p>
        </header>
      </div>
    </>
  );
}
