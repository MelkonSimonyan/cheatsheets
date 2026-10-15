import type { Cycle } from "@/data/types";
import { PostCard, SoonCard } from "./PostCard";

export function CycleSection({ cycle }: { cycle: Cycle }) {
  const posts = [...cycle.posts];

  const last = posts[posts.length - 1]?.n;
  return (
    <section className="group">
      <div className="ghead">
        <div
          className="gbadge"
          style={{ background: cycle.color }}
        >
          {cycle.badge}
        </div>
        <div className="gtext">
          <h2>{cycle.name}</h2>
          <p>{cycle.tags}</p>
        </div>
        {cycle.magazine && (
          <div className="gmag">
            <a
              href={cycle.magazine}
              target="_blank"
            >
              Full magazine (PDF)
            </a>
          </div>
        )}
        <div className="gcount">
          <div>
            {posts.length}/{cycle.total}
          </div>
          <small>sheets</small>
        </div>
      </div>
      <div className="grid">
        {posts.map((p) => (
          <PostCard
            key={p.n}
            post={p}
            total={cycle.total}
            isNew={p.n === last}
          />
        ))}
        {posts.length < cycle.total && (
          <SoonCard
            n={posts.length + 1}
            total={cycle.total}
          />
        )}
      </div>
    </section>
  );
}
