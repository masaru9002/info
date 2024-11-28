import Background from "./components/Background";
import TypewriterText from "./components/TypewriterText";
import Navbar from "./components/Navbar/Navbar";
import "@fontsource/space-grotesk";

function App() {
  return (
    <div className="relative min-h-screen select-none">
      <Background />
      <Navbar />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <div className="w-full max-w-4xl mx-auto min-h-screen flex items-center justify-center font-['Space_Grotesk']">
          <TypewriterText />
        </div>
      </main>
    </div>
  );
}

export default App;
