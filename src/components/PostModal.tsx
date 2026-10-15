"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  label: string;
  title: string;
  thumb: string;
  text: string;
  pdf: string;
  linkedin: string;
  isNew: boolean;
};

const cache = new Map<string, Promise<string>>();

/** Loads a post text once; the .txt is decoded as UTF-8 regardless of the server's Content-Type charset. */
function loadText(url: string): Promise<string> {
  let p = cache.get(url);
  if (!p) {
    p = fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.arrayBuffer();
      })
      .then((buf) => new TextDecoder("utf-8").decode(buf))
      .catch((e) => {
        cache.delete(url);
        throw e;
      });
    cache.set(url, p);
  }
  return p;
}

export function PostModal({ label, title, thumb, text, pdf, linkedin, isNew }: Props) {
  const [open, setOpen] = useState(false);
  // Content stays mounted after the first open so it does not vanish while the dialog fades out.
  const [shown, setShown] = useState(false);
  const [body, setBody] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    // One temporary history entry so the Back button closes the popup instead of leaving the page.
    history.pushState({ modal: true }, "");
    setShown(true);
    setOpen(true);
  }, []);

  // Closing by cross, backdrop or Esc removes the entry we pushed; Back already did that itself.
  const requestClose = useCallback(() => {
    if (history.state?.modal) history.back();
    else setOpen(false);
  }, []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPop = () => setOpen(false);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    let alive = true;
    setFailed(false);
    loadText(text).then(
      (t) => alive && setBody(t),
      () => alive && setFailed(true),
    );
    return () => {
      alive = false;
    };
  }, [open, text]);

  const prefetch = () => void loadText(text).catch(() => {});

  return (
    <>
      <a
        className="thumb"
        href={thumb}
        target="_blank"
        onClick={openModal}
        onPointerEnter={prefetch}
        onFocus={prefetch}
      >
        <Image
          src={thumb}
          alt={`${label}: ${title}`}
          width={600}
          height={750}
        />
        {isNew && <i className="new">NEW</i>}
      </a>
      <dialog
        ref={dialogRef}
        className="modal"
        aria-label={`${label}: ${title}`}
        onCancel={(e) => {
          e.preventDefault();
          requestClose();
        }}
        onClick={(e) => e.target === e.currentTarget && requestClose()}
      >
        {shown && (
          <div className="modal-body">
            <button
              type="button"
              className="modal-close"
              aria-label="Close"
              onClick={requestClose}
            >
              ×
            </button>
            <div className="modal-img">
              <Image
                src={thumb}
                alt={`${label}: ${title}`}
                width={600}
                height={750}
                priority
              />
            </div>
            <div className="modal-side">
              <div className="num">{label}</div>
              <div className="title">{title}</div>
              <div className="modal-text">
                {body !== null
                  ? body
                  : failed
                    ? "Could not load the text. Open the LinkedIn post instead."
                    : "Loading…"}
              </div>
              <div className="links">
                {Boolean(linkedin) && (
                  <a
                    href={linkedin}
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                )}
                <a
                  className="pdf"
                  href={pdf}
                  target="_blank"
                >
                  PDF
                </a>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
