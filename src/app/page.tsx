import { CycleSection } from "@/components/CycleSection";
import { site } from "@/data/cycles";

const origin = "https://cheatsheets.melkonsimonyan.com";

const author = {
  "@type": "Person",
  name: "Melkon Simonyan",
  jobTitle: "Frontend Software Engineer",
  url: "https://www.linkedin.com/in/melkon-simonyan/",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      url: `${origin}/`,
      name: "Frontend Interview Cheat Sheets",
      inLanguage: "en",
      author,
    },
    {
      "@type": "ItemList",
      name: "Frontend Interview Cheat Sheets",
      itemListElement: site.cycles
        .flatMap((c) => c.posts.map((p) => ({ cycle: c.name, post: p })))
        .map(({ cycle, post }, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "LearningResource",
            name: post.title,
            isPartOf: cycle,
            url: `${origin}${post.pdf}`,
            image: `${origin}${post.thumb}`,
            encodingFormat: "application/pdf",
            inLanguage: "en",
            author,
          },
        })),
    },
  ],
};

export default function Home() {
  const { cycles, next } = site;
  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
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
