const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const colors = [
  { id: "#FFD1DC", name: "Pastel Pink" },
  { id: "#B2F2BB", name: "Pastel Green" },
  { id: "#A2DDF0", name: "Pastel Blue" },
  { id: "#FFE5B4", name: "Pastel Peach" },
  { id: "#D4A5A5", name: "Pastel Rose" },
  { id: "#C8A2C8", name: "Pastel Lilac" },
  { id: "#FFCC99", name: "Pastel Orange" },
  { id: "#B5EAD7", name: "Pastel Mint" },
  { id: "#F0E68C", name: "Pastel Yellow" },
  { id: "#E6E6FA", name: "Lavender" },
  { id: "#FFB6C1", name: "Light Pink" },
  { id: "#87CEEB", name: "Sky Blue" },
  { id: "#98FB98", name: "Pale Green" },
  { id: "#FFDAB9", name: "Peach Puff" },
  { id: "#AFEEEE", name: "Pale Turquoise" },
  { id: "#F5DEB3", name: "Wheat" },
  { id: "#DDA0DD", name: "Plum" },
  { id: "#FFA07A", name: "Light Salmon" },
];

export function generateUniqueId(): string {
  let uniqueId = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueId += characters[randomIndex];
  }

  return uniqueId;
}

export function getRandomColor(): string {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex].id;
}
