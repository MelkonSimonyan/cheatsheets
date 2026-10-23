import type { Post } from "@/data/types";
import { pad } from "@/lib";
import { PostModal } from "./PostModal";

export function PostCard({ post, total, isNew }: { post: Post; total: number; isNew: boolean }) {
  const label = post.closing ? "Wrap-up" : `${pad(post.n)}/${total}`;
  return (
    <div className="card">
      <PostModal
        label={label}
        title={post.title}
        thumb={post.thumb}
        text={post.text}
        pdf={post.pdf}
        linkedin={post.linkedin}
        isNew={isNew}
      />
      <div className="num">{label}</div>
      <div className="title">{post.title}</div>
      <div className="links">
        {Boolean(post.linkedin) && (
          <a
            href={post.linkedin}
            target="_blank"
          >
            LinkedIn
          </a>
        )}
        <a
          className="pdf"
          href={post.pdf}
          target="_blank"
        >
          PDF
        </a>
      </div>
    </div>
  );
}

export function SoonCard({ n, total }: { n: number; total: number }) {
  return (
    <div className="card soon">
      <div className="box">
        <div>
          Coming soon
          <span>
            {pad(n)}/{total}
          </span>
        </div>
      </div>
    </div>
  );
}
