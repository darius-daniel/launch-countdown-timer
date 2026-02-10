import "./App.css";
import CountDownTimer from "./components/CountdownTimer";
import LinkToSocial from "./components/LinkToSocial";

function App() {
  return (
    <main className="flex flex-col gap-20">
      <h1 className="uppercase text-center font-bold text-white text-2xl tracking-[0.25em]">
        We&apos;re launching soon
      </h1>

      <CountDownTimer />

      <div className="socials flex gap-4 items-center w-full justify-center">
        <LinkToSocial
          href="https://www.facebook.com/"
          iconSrc="/src/assets/images/icon-facebook.svg"
        />

        <LinkToSocial
          href="https://www.pinterest.com/"
          iconSrc="/src/assets/images/icon-pinterest.svg"
        />

        <LinkToSocial
          href="https://www.instagram.com/"
          iconSrc="/src/assets/images/icon-instagram.svg"
        />
      </div>

      <div className="attribution text-white">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://darius-daniel.vercel.app">Darius Daniel</a>.
      </div>
    </main>
  );
}

export default App;
