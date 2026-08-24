import type { ReactElement } from "react";

// Shared config for every generated Open Graph card. 1200x630 is the size every
// major scraper (X, LinkedIn, Facebook, Slack, WhatsApp) expects for a large card.
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Deliberately lifted off the site's #0A0A0A. Chat clients (Telegram, Slack,
// X in dark mode) paint near-black bubbles, and a card that matches them has no
// visible edge — it reads as a failed image rather than a picture.
const BG = "#101214";
const SURFACE = "#1A1D1F";
const EDGE = "rgba(255,255,255,0.10)";
const ACCENT = "#338FFF";
const ACCENT_DEEP = "#1C66C2";
const TEXT = "#FFFFFF";
const MUTED = "#C5C8D3";

type FontWeight = 400 | 600 | 700 | 800;

export interface OgFont {
  name: string;
  data: ArrayBuffer;
  weight: FontWeight;
  style: "normal";
}

/**
 * Fetches a Google font as TTF for satori, which cannot parse woff2. Requesting
 * without a browser UA makes the css2 endpoint hand back a truetype src, and the
 * `text` subset keeps the payload to just the glyphs this card draws.
 *
 * Returns null rather than throwing: a font hiccup at build time should degrade
 * the card to the default typeface, never fail the whole build.
 */
async function loadGoogleFont(
  family: string,
  weight: FontWeight,
  text: string,
): Promise<OgFont | null> {
  try {
    const url =
      `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}` +
      `&text=${encodeURIComponent(text)}`;

    const cssResponse = await fetch(url);
    if (!cssResponse.ok) return null;

    const css = await cssResponse.text();
    const src = css.match(/src:\s*url\((https:\/\/[^)]+)\)/)?.[1];
    if (!src) return null;

    const fontResponse = await fetch(src);
    if (!fontResponse.ok) return null;

    return {
      name: family,
      data: await fontResponse.arrayBuffer(),
      weight,
      style: "normal",
    };
  } catch {
    return null;
  }
}

/**
 * Loads the display + body faces for a card, subset to the glyphs it will draw.
 * Any face that fails to load is dropped and satori falls back to its default.
 */
export async function loadOgFonts(text: string): Promise<OgFont[]> {
  // Always include the chrome text that every card renders, plus ASCII so
  // punctuation and digits in dynamic titles never fall back mid-word.
  const glyphs = Array.from(
    new Set(
      (
        text +
        "Daniel Ezet Onoriode Software Engineer danielezet.dev" +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" +
        " .,:;!?'\"()[]{}&@#%+-–—/·"
      ).split(""),
    ),
  ).join("");

  const fonts = await Promise.all([
    loadGoogleFont("Bricolage Grotesque", 800, glyphs),
    loadGoogleFont("Inter Tight", 600, glyphs),
    loadGoogleFont("Inter Tight", 400, glyphs),
  ]);

  return fonts.filter((font): font is OgFont => font !== null);
}

export interface OgCardProps {
  /** Small tracked label above the title, e.g. "PROJECT". */
  eyebrow: string;
  title: string;
  description?: string;
  /** Rendered as chips under the description. Trimmed to fit one row. */
  tags?: string[];
}

/**
 * The card layout itself. Satori supports flexbox only — no grid, no floats —
 * and needs an explicit `display: flex` on every element with children.
 */
export function OgCard({
  eyebrow,
  title,
  description,
  tags = [],
}: OgCardProps): ReactElement {
  const visibleTags = tags.slice(0, 6);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: BG,
        padding: "64px 72px",
        position: "relative",
        fontFamily: "Inter Tight",
      }}
    >
      {/* Inset hairline so the card keeps a defined edge on any host background.
          Drawn as an overlay rather than a border on the root, so it cannot
          shrink the content box regardless of how satori resolves box-sizing. */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: `1px solid ${EDGE}`,
          display: "flex",
        }}
      />

      {/* Accent glow, bled off the top-right corner */}
      <div
        style={{
          position: "absolute",
          top: -260,
          right: -180,
          width: 640,
          height: 640,
          borderRadius: 9999,
          background: `radial-gradient(circle, ${ACCENT_DEEP}55 0%, ${ACCENT_DEEP}00 70%)`,
          display: "flex",
        }}
      />

      {/* Left edge rule */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 10,
          background: `linear-gradient(180deg, ${ACCENT} 0%, ${ACCENT_DEEP} 100%)`,
          display: "flex",
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 9999,
            backgroundColor: ACCENT,
            display: "flex",
            marginRight: 14,
          }}
        />
        <div
          style={{
            display: "flex",
            color: MUTED,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          danielezet.dev
        </div>
      </div>

      {/* Body — padded so a tall two-line title never crowds the footer */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "28px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            color: ACCENT,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.16em",
            marginBottom: 22,
          }}
        >
          {eyebrow.toUpperCase()}
        </div>

        <div
          style={{
            display: "flex",
            color: TEXT,
            fontFamily: "Bricolage Grotesque",
            fontWeight: 800,
            fontSize: title.length > 52 ? 60 : 74,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 960,
          }}
        >
          {title}
        </div>

        {description ? (
          <div
            style={{
              display: "flex",
              color: MUTED,
              fontSize: 28,
              lineHeight: 1.45,
              marginTop: 26,
              maxWidth: 900,
            }}
          >
            {description}
          </div>
        ) : null}

        {visibleTags.length > 0 ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: 32,
            }}
          >
            {visibleTags.map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  backgroundColor: SURFACE,
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 9999,
                  color: MUTED,
                  fontSize: 22,
                  fontWeight: 600,
                  padding: "10px 22px",
                  marginRight: 12,
                  marginTop: 12,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {/* Footer */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            color: TEXT,
            fontSize: 27,
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          Daniel Ezet Onoriode
        </div>
        <div
          style={{
            display: "flex",
            color: "rgba(255,255,255,0.28)",
            fontSize: 27,
            padding: "0 14px",
          }}
        >
          ·
        </div>
        <div style={{ display: "flex", color: MUTED, fontSize: 27 }}>
          Software Engineer
        </div>
      </div>
    </div>
  );
}

/** Collects every string a card will draw, for font subsetting. */
export function ogCardText({
  eyebrow,
  title,
  description,
  tags = [],
}: OgCardProps): string {
  return [eyebrow, eyebrow.toUpperCase(), title, description ?? "", ...tags].join(" ");
}
