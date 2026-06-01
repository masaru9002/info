import { SmoothScroll } from "./components/smooth-scroll";
import { Hero } from "./components/hero";
import { Works } from "./components/works";
import { Clients } from "./components/clients";
import { Contact } from "./components/contact";
import Ribbons from "./components/Ribbons";

// not gonna hide it since its not anything sensitive really
// export const API_URL = "https://portfolio-api-three-rose.vercel.app/api";
export const API_URL = "http://localhost:4000/api";
export const FALLBACK_AVATAR =
  "https://res.cloudinary.com/do8zlfjb8/image/upload/v1780243677/sillycat5_gak1gv.png";

export default function App() {
  return (
    <SmoothScroll>
      <div
        className="fixed inset-0 z-9999 pointer-events-none [&_canvas]:pointer-events-none"
        aria-hidden
      >
        <Ribbons
          baseThickness={15}
          colors={["#fc5db0"]}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={false}
        />
      </div>
      <main className="bg-background text-foreground">
        <Hero />
        <Works />
        <Clients />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
