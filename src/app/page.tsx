import { CycleSection } from "@/components/CycleSection";
import { site } from "@/data/cycles";

export default function Home() {
  const { cycles, next } = site;
  return (
    <div className="wrap">
      <div className="pill">
        <b>FE</b>Frontend interview prep
      </div>
      <h1>
        Frontend Interview<span>Cheat Sheets</span>
      </h1>
      <p className="sub">Tables, code and traps. One page, one topic, every day.</p>

      <main>
        {cycles.map((c) => (
          <CycleSection
            key={c.name}
            cycle={c}
          />
        ))}
        {next && (
          <div className="next">
            <b>Next cycle</b>
            <strong>{next.name}</strong>
            <span>{next.sheets} sheets</span>
          </div>
        )}
      </main>

      <footer>
        <div>
          <b>Melkon Simonyan</b>
          <span>Frontend Software Engineer</span>
        </div>
        <a
          href="https://www.linkedin.com/in/melkon-simonyan/"
          target="_blank"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
