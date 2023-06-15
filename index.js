const chroma = require('chroma-js');

const paletteThemes = {
  'spotify': ['#1DB954', '#191414', '#FFFFFF'],
  'apple': ['#AEB5C5', '#5B90F6', '#F7AF5A', '#D63E3E', '#7AC45C'],
  'microsoft': ['#F25022', '#7FBA00', '#00A4EF', '#FFB900', '#737373'],
  'intel': ['#0071C5', '#00C2FF', '#009FFF', '#EA008C', '#00A968'],
  'dell': ['#007DB8', '#FDB813', '#37454D'],
  'hp': ['#0096D6', '#D7410B', '#FFFFFF', '#9ABE3F', '#005293'],
  'lenovo': ['#E2231A', '#009CCC', '#FDB813'],
  'asus': ['#000000', '#215B9C', '#FFB900'],
  'acer': ['#0066CC', '#FF9900', '#000000'],
  'lg': ['#E94B3C', '#0072BB', '#F5F5F5'],
  'samsung': ['#1428A0', '#757575', '#00A9E0', '#F40009', '#FFFFFF'],
  'sony': ['#000000', '#FFFFFF'],
  'nintendo': ['#E60012', '#FFFFFF', '#58595B'],
  'playstation': ['#003087', '#D50000', '#FFFFFF', '#0072C6'],
  'xbox': ['#107C10', '#52AB22', '#FFFFFF', '#2780BA', '#5D5D5D'],
  'logitech': ['#00B6FF', '#00DC19', '#FF8200', '#FF2191', '#616161'],
  'razer': ['#00FF00', '#FFFFFF', '#01B1E6', '#FF6600', '#000000'],
  'corsair': ['#F8D11C', '#1BCE7C', '#FF8800', '#FF1654', '#2E3D51'],
  'steelseries': ['#FF5700', '#FFFFFF', '#A6A6A6', '#0078D7', '#00B550'],
  'hyperx': ['#1E90FF', '#FFDD00', '#000000', '#E81123', '#F5F5F5'],
  'kingston': ['#0072BA', '#AFAFAF', '#FDB813', '#FFFFFF'],
  'western-digital': ['#005195', '#00ADEF', '#6ACFFF', '#B2E8F1', '#FFFFFF'],
  'seagate': ['#00A3E0', '#F8981D', '#86898C', '#FFFFFF'],
  'sandisk': ['#0171C5', '#FDB813', '#000000', '#FFFFFF'],
  'toshiba': ['#FF0033', '#FFFFFF', '#1C79C0'],
  'sony-music': ['#FF002A', '#00AEEF', '#FFFFFF', '#FF8F1C'],
  'universal-music': ['#FF0000', '#000000', '#FFFFFF'],
  'warner-music': ['#007AFF', '#FF2A00', '#FFFFFF'],
  'netflix': ['#E50914'],
  'amazon': ['#FF9900', '#146EB4'],
  'google': ['#4285F4', '#DB4437', '#F4B400', '#0F9D58', '#3A3A3A'],
  'facebook': ['#3B5998'],
  'twitter': ['#1DA1F2'],
  'instagram': ['#E4405F', '#FBB040'],
  'tiktok': ['#69C9D0'],
  'snapchat': ['#FFFC00'],
  'pinterest': ['#BD081C', '#E60023', '#F0173A', '#000000'],
};

/**
 * Generates a color palette based on a specified theme.
 *
 * @param {number} numColors - The number of colors to include in the palette.
 * @param {string} theme - The name of the color theme to use (vibrant, pastel, or earthy).
 *
 * @returns {string[]} An array of hex color codes representing the generated palette.
 */
const generatePalette = (numColors, theme) => {
  const palette = paletteThemes[theme] || chroma.scale('Spectral').colors(numColors);
  return palette.map(color => chroma(color).hex());
};

module.exports = {
generatePalette
};