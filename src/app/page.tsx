import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Navbar2 from "../components/Navbar2";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <main className="flex flex-row">
      <Navbar2 />
      <Portfolio />
    </main>
  );
}
