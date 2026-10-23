import type { Cycle } from "@/data/types";
import { PostCard, SoonCard } from "./PostCard";

export function CycleSection({ cycle }: { cycle: Cycle }) {
  const posts = [...cycle.posts];

  const last = posts[posts.length - 1]?.n;
  // The closing post is not a cheat sheet, so it does not count towards the `listed/total` counter.
  const listed = posts.filter((p) => !p.closing).length;
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
        <div className="gcount">
          <div>
            {listed}/{cycle.total}
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
            isNew={!p.closing && p.n === last}
          />
        ))}
        {listed < cycle.total && (
          <SoonCard
            n={listed + 1}
            total={cycle.total}
          />
        )}
      </div>
    </section>
  );
}
