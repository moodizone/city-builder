const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const colors = [
  "#FFD1DC", // Pastel Pink
  "#B2F2BB", // Pastel Green
  "#A2DDF0", // Pastel Blue
  "#FFE5B4", // Pastel Peach
  "#D4A5A5", // Pastel Rose
  "#C8A2C8", // Pastel Lilac
  "#FFCC99", // Pastel Orange
  "#B5EAD7", // Pastel Mint
  "#F0E68C", // Pastel Yellow
  "#E6E6FA", // Lavender
  "#FFB6C1", // Light Pink
  "#87CEEB", // Sky Blue
  "#98FB98", // Pale Green
  "#FFDAB9", // Peach Puff
  "#AFEEEE", // Pale Turquoise
  "#F5DEB3", // Wheat
  "#DDA0DD", // Plum
  "#FFA07A", // Light Salmon
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
  return colors[randomIndex];
}
