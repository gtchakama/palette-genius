# Palette Genius

Palette Genius is a Node.js package that generates random color palettes based on a specified brand.  You can also specify a custom number of colors for each palette.

## Brands 

```
['spotify', 'apple', 'microsoft', 'intel', 'dell', 'hp', 'lenovo', 'asus', 'acer', 'lg', 'samsung', 'sony', 'nintendo', 'playstation', 'xbox', 'logitech', 'razer', 'corsair', 'steelseries', 'hyperx', 'kingston', 'western-digital', 'seagate', 'sandisk', 'toshiba', 'sony-music', 'universal-music', 'warner-music', 'netflix', 'amazon', 'google', 'facebook', 'twitter', 'instagram', 'tiktok', 'snapchat', 'pinterest']
```

## Installation

To install Palette Genius, use NPM:

```
npm install palette-genius
```

## Usage

First, import the `generatePalette` function from the `palette-genius` module:

```javascript
const { generatePalette } = require('palette-genius');
```

Then, call the `generatePalette` function with two arguments: `numColors` and `theme`. `numColors` specifies how many colors should be in the generated palette, while `theme` represents the desired mood or theme. Here's an example usage:

```javascript
const palette = generatePalette(5, 'instagram');
console.log(palette);
```

This will generate an array of 5 instagram colors and log them to the console.

## Themes

Themes consists of a pre-defined set of colors that are designed to evoke a certain mood or feeling. Here's how you can generate a palette using each of these themes:

### instagram

The "instagram" theme consists of bright, bold colors that are ideal for creating eye-catching designs. To generate a instagram palette, use the following code:

```javascript
const palette = generatePalette(5, 'instagram');
```

### microsoft

The "microsoft" theme consists of soft, muted colors that are perfect for creating subtle and calming designs. To generate a microsoft palette, use the following code:

```javascript
const palette = generatePalette(5, 'microsoft');
```

### samsung

The "samsung" theme consists of warm, natural colors that are ideal for creating designs that feel organic and grounded. To generate an samsung palette, use the following code:

```javascript
const palette = generatePalette(5, 'samsung');
```

## Custom Colors

If you want to create a palette using custom colors, you can pass an array of color values as the `theme` argument instead of one of the pre-defined themes. For example, here's how you could generate a palette using shades of blue:

```javascript
const palette = generatePalette(5, ['#003f5c', '#2f4b7c', '#665191', '#a05195', '#d45087']);
```

## Custom Number of Colors

By default, Palette Genius generates palettes with 7 colors. However, you can specify a custom number of colors by passing an integer value as the `numColors` argument. For example, if you wanted to generate a palette with only 3 colors, you would use the following code:

```javascript
const palette = generatePalette(3, 'instagram');
```


## Credits

Palette Genius was created by George Chakama.