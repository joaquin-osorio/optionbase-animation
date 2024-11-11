import TokensAnimation from "./components/TokensAnimation";
import textLogo from "./assets/textLogo.svg";

function App() {
  return (
    <div>
      <div className="w-full flex flex-col items-center gap-10 mt-10 mb-1 bg-transparent">
        <img src={textLogo} alt="textLogo" className='w-4/5 sm:w-2/5' />
        <p className="font-sfpro bg-transparent text-center mx-5">The only exchange where you can trade spot and options on any crypto asset.</p>
      </div>
      <TokensAnimation />
    </div>
  );
}
export default App;
