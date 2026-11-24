import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const directory = fileURLToPath(new URL("../assets/", import.meta.url));
mkdirSync(directory, { recursive: true });
const ink = "#101b21";
const white = "#eff5f3";
const muted = "#a6b8bd";
const mint = "#b9f6d2";
const font = "'Segoe UI',Arial,sans-serif";
const mono = "Consolas,'Courier New',monospace";
const escape = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const text = (x, y, value, size = 24, color = white, extra = "") => `<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" fill="${color}" ${extra}>${escape(value)}</text>`;
const label = (x, y, value, color = muted, size = 14) => `<text x="${x}" y="${y}" font-family="${mono}" font-size="${size}" fill="${color}" letter-spacing="2">${escape(value)}</text>`;
function svg(name, width, height, content, title, description) {
  const image = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc"><title id="title">${escape(title)}</title><desc id="desc">${escape(description)}</desc>${content}</svg>\n`;
  writeFileSync(join(directory, `${name}.svg`), image);
}
const base = (width, height) => `<rect x="1" y="1" width="${width - 2}" height="${height - 2}" rx="22" fill="${ink}" stroke="#30434a" stroke-width="2"/>`;

svg("header", 1200, 430, `
  <defs>
    <linearGradient id="surface" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#122b2d"/><stop offset="1" stop-color="#101b21"/></linearGradient>
    <linearGradient id="tile" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#3c6b61"/><stop offset="1" stop-color="#193b3c"/></linearGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#b9f6d2" stroke-opacity=".055"/></pattern>
  </defs>
  ${base(1200, 430)}
  <rect x="720" y="2" width="477" height="426" rx="20" fill="url(#surface)"/>
  <rect x="720" y="2" width="477" height="426" rx="20" fill="url(#grid)"/>
  <rect x="49" y="44" width="46" height="38" rx="9" fill="${mint}"/>
  ${text(57, 70, "S/", 23, ink, 'font-weight="700"')}
  ${label(114, 69, "FULL-STACK SOFTWARE ENGINEER", muted, 15)}
  ${text(49, 172, "Somil Agrawal.", 76, white, 'font-weight="700" letter-spacing="-3.5"')}
  ${text(52, 236, "Thoughtful interfaces.", 34, white, 'letter-spacing="-.6"')}
  ${text(52, 280, "Dependable systems.", 34, mint, 'letter-spacing="-.6"')}
  <path d="M52 326H649" stroke="#31464b"/>
  ${label(52, 367, "WEB / REAL-TIME / APPLIED AI", muted, 15)}
  <circle cx="965" cy="204" r="167" fill="none" stroke="#b9f6d2" stroke-opacity=".18"/>
  <circle cx="965" cy="204" r="128" fill="none" stroke="#b9f6d2" stroke-opacity=".22" stroke-dasharray="3 9"/>
  <circle cx="824" cy="115" r="6" fill="${mint}"/>
  <circle cx="1123" cy="257" r="5" fill="#f3cf92"/>
  <path d="M839 244L965 181 1091 244 965 307Z" fill="#203c3e" stroke="#47746a"/>
  <path d="M839 218L965 155 1091 218 965 281Z" fill="#2c514b" stroke="#649783"/>
  <path d="M839 190L965 127 1091 190 965 253Z" fill="url(#tile)" stroke="${mint}" stroke-width="1.5"/>
  <path d="M921 180L898 191 922 204M1007 180L1030 191 1007 204M981 169L950 215" fill="none" stroke="${mint}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  ${label(873, 369, "IDEA → INTERFACE → SYSTEM", mint, 12)}
`, "Somil Agrawal — Full-stack software engineer", "Thoughtful interfaces. Dependable systems. Web development, real-time systems, and applied AI.");

svg("header-mobile", 600, 380, `
  ${base(600, 380)}
  <rect x="32" y="31" width="42" height="34" rx="8" fill="${mint}"/>
  ${text(39, 55, "S/", 21, ink, 'font-weight="700"')}
  ${label(91, 54, "FULL-STACK ENGINEER", mint, 14)}
  ${text(29, 142, "Somil Agrawal.", 60, white, 'font-weight="700" letter-spacing="-2.5"')}
  ${text(32, 211, "Thoughtful interfaces.", 32, white)}
  ${text(32, 257, "Dependable systems.", 32, mint)}
  <path d="M32 299H567" stroke="#30434a"/>
  ${label(32, 342, "WEB / REAL-TIME / APPLIED AI", muted, 14)}
`, "Somil Agrawal — Full-stack engineer", "Thoughtful interfaces. Dependable systems. Web, real-time, and applied AI.");

function button(name, title, width, fill, foreground) {
  svg(name, width, 44, `<rect x=".5" y=".5" width="${width - 1}" height="43" rx="9" fill="${fill}" stroke="#40545a"/>${text(18, 28, title, 15, foreground, 'font-weight="600"')}${text(width - 29, 28, "↗", 18, foreground)}`, title, title);
}
button("portfolio", "Explore portfolio", 188, mint, ink);
button("linkedin", "LinkedIn", 132, ink, white);
button("email", "Get in touch", 160, ink, white);

svg("onelife", 1200, 330, `
  <defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#cce4d9" fill-opacity=".1"/></pattern></defs>
  ${base(1200, 330)}
  <path d="M798 1H1178Q1199 1 1199 22V308Q1199 329 1178 329H798Z" fill="#173a35"/>
  <path d="M798 1H1178Q1199 1 1199 22V308Q1199 329 1178 329H798Z" fill="url(#dots)"/>
  ${label(42, 48, "FEATURED BUILD / 01", mint)}
  ${text(40, 126, "OneLife", 66, white, 'font-weight="700" letter-spacing="-2.5"')}
  ${text(43, 170, "Care workflows, connected.", 28, "#d7e6e2")}
  ${text(43, 210, "Booking · Clinician schedules · Consultation requests", 20, muted)}
  <path d="M43 243H735" stroke="#30464b"/>
  ${text(43, 280, "Node.js / Express / EJS / MongoDB / Gemini", 18, mint)}
  <g transform="translate(871 58)">
    <rect width="241" height="202" rx="16" fill="#edf5ee"/>
    <circle cx="27" cy="27" r="6" fill="#5e9a77"/>
    ${text(42, 33, "PATIENT JOURNEY", 11, "#446b57", 'font-weight="700" letter-spacing="1"')}
    <path d="M27 69V154" stroke="#b7c9b9" stroke-width="2"/>
    <circle cx="27" cy="70" r="5" fill="#609b76"/><circle cx="27" cy="112" r="5" fill="#609b76"/><circle cx="27" cy="154" r="5" fill="#c2d0c2"/>
    ${text(43, 75, "Find a clinician", 16, "#173e2d")}
    ${text(43, 117, "Book a visit", 16, "#173e2d")}
    ${text(43, 159, "Stay connected", 16, "#173e2d")}
  </g>
  ${label(903, 296, "EXPLORE SOURCE ↗", mint, 12)}
`, "OneLife — Healthcare platform", "Hospital management with appointment booking, clinician schedules, consultation requests, and Gemini AI. Node.js, Express, EJS, MongoDB, and Gemini.");

svg("onelife-mobile", 600, 350, `
  ${base(600, 350)}
  <rect x="482" y="29" width="84" height="84" rx="22" fill="#254a3e"/>
  <path d="M507 71H541M524 54V88" fill="none" stroke="${mint}" stroke-width="5" stroke-linecap="round"/>
  ${label(31, 53, "FEATURED / 01", mint, 14)}
  ${text(29, 137, "OneLife", 64, white, 'font-weight="700" letter-spacing="-2"')}
  ${text(32, 190, "Care workflows, connected.", 30, white)}
  ${text(32, 230, "Booking, schedules, and consultations.", 24, muted)}
  <path d="M32 264H567" stroke="#30434a"/>
  ${text(32, 307, "NODE.JS / MONGODB / GEMINI", 18, mint)}
  ${text(535, 309, "↗", 27, mint)}
`, "OneLife — Healthcare platform", "Booking, schedules, consultations, and AI triage. Node.js, Express, EJS, MongoDB, and Gemini.");

const projects = [
  { file: "bugsnap", title: "BugSnap", no: "02", kind: "DEVELOPER TOOLS", lines: ["Bug reports with context.", "From widget to GitHub issue."], stack: "NEXT.JS · TYPESCRIPT · SUPABASE", color: "#c5c1ff", symbol: "✳" },
  { file: "codesage", title: "CodeSage AI", no: "03", kind: "APPLIED AI", lines: ["Structured pull-request reviews.", "Transparent code-health scoring."], stack: "NEXT.JS · FASTAPI · OPENAI", color: "#f2d098", symbol: "{ }" },
  { file: "staymanage", title: "StayManage", no: "04", kind: "BUSINESS SOFTWARE", lines: ["Rooms, residents, and rent.", "One workspace for PG operations."], stack: "NEXT.JS · TYPESCRIPT · MONGODB", color: "#b9f6d2", symbol: "▥" },
  { file: "repairdesk", title: "RepairDesk", no: "05", kind: "BUSINESS SOFTWARE", lines: ["Device intake to repair billing.", "Keep every ticket moving."], stack: "NEXT.JS · MONGODB · TAILWIND", color: "#a9d9f3", symbol: "+" },
];
for (const project of projects) {
  svg(project.file, 596, 314, `<g transform="translate(8 8)">
    ${base(580, 298)}
    <path d="M350 1H558Q579 1 579 22V170C483 163 382 118 350 1Z" fill="${project.color}" fill-opacity=".055"/>
    ${label(29, 38, `${project.no} / ${project.kind}`, project.color, 11)}
    <rect x="481" y="24" width="69" height="69" rx="19" fill="${project.color}" fill-opacity=".11" stroke="${project.color}" stroke-opacity=".28"/>
    ${text(515, 70, project.symbol, 34, project.color, 'text-anchor="middle" font-weight="600"')}
    ${text(27, 114, project.title, 45, white, 'font-weight="700" letter-spacing="-1.6"')}
    ${text(29, 157, project.lines[0], 22, "#c4d1d2")}
    ${text(29, 187, project.lines[1], 22, "#c4d1d2")}
    <path d="M29 224H551" stroke="#30434a"/>
    ${text(29, 263, project.stack, 14, project.color, 'letter-spacing=".5"')}
    ${text(526, 265, "↗", 26, project.color)}
    </g>
  `, `${project.title} — ${project.kind.toLowerCase()}`, `${project.lines.join(" ")} Built with ${project.stack.toLowerCase()}.`);
}

const badges = [
  ["typescript", "TypeScript", "TS", "#3178c6", 143], ["javascript", "JavaScript", "JS", "#e6cc60", 142],
  ["python", "Python", "Py", "#79b8e5", 114], ["react", "React", "R", "#68cfea", 105],
  ["nextjs", "Next.js", "N", "#e6ebed", 117], ["tailwind", "Tailwind CSS", "~", "#65c7d9", 156],
  ["nodejs", "Node.js", "N", "#87c683", 122], ["express", "Express", "Ex", "#c1cccf", 123],
  ["fastapi", "FastAPI", "F", "#69d7bd", 122], ["socketio", "Socket.IO", "↯", "#c1cccf", 135],
  ["mongodb", "MongoDB", "M", "#8bce8a", 134], ["postgresql", "PostgreSQL", "P", "#8ab5d9", 148],
  ["supabase", "Supabase", "S", "#72d4ab", 139], ["gemini", "Gemini API", "✧", "#b7a7eb", 143],
  ["openai", "OpenAI API", "O", "#b1dbca", 147], ["docker", "Docker", "D", "#77bce5", 115],
  ["git", "Git", "G", "#e99987", 86],
];
for (const [file, name, mark, color, width] of badges) {
  svg(`tech-${file}`, width, 36, `
    <rect x=".5" y=".5" width="${width - 1}" height="35" rx="8" fill="${ink}" stroke="#33474f"/>
    <rect x="7" y="7" width="22" height="22" rx="5" fill="${color}" fill-opacity=".15"/>
    ${text(18, 23, mark, 12, color, 'font-weight="700" text-anchor="middle"')}
    ${text(38, 23, name, 14, "#e5efee", 'font-weight="500"')}
  `, name, name);
}

svg("footer", 1200, 154, `
  ${base(1200, 154)}
  <circle cx="51" cy="46" r="5" fill="${mint}"/>
  ${label(68, 51, "LET'S BUILD SOMETHING USEFUL", mint, 13)}
  ${text(43, 111, "Good software starts with a conversation.", 33, white, 'font-weight="600" letter-spacing="-.5"')}
  <path d="M1110 60L1146 96M1111 96H1146V61" fill="none" stroke="${mint}" stroke-width="3"/>
`, "Let's build something useful", "Good software starts with a conversation. Contact Somil Agrawal by email.");

console.log("Built header, contact buttons, five project visuals, technology badges, and footer.");
