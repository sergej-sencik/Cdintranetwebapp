# Adding Custom Fonts to Your Project

## Step-by-Step Guide

### 1. **Prepare Your Font Files**

Convert your fonts to web-friendly formats (WOFF2 is recommended for best performance):
- `.woff2` (best compression, modern browsers)
- `.woff` (fallback for older browsers)

You can use online converters like:
- [FontSquirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Transfonter](https://transfonter.org/)

### 2. **Create Fonts Directory**

Add a `/fonts` folder to your project root:

```
your-project/
├── fonts/
│   ├── Roboto-Regular.woff2
│   ├── Roboto-Regular.woff
│   ├── Roboto-Medium.woff2
│   ├── Roboto-Medium.woff
│   ├── CDFedraPro-Bold.woff2
│   └── CDFedraPro-Bold.woff
├── components/
├── styles/
└── ...
```

### 3. **Uncomment Font Declarations**

In `/styles/globals.css`, uncomment the `@font-face` declarations (lines starting with `/*`):

```css
@font-face {
  font-family: 'Roboto';
  src: url('/fonts/Roboto-Regular.woff2') format('woff2'),
       url('/fonts/Roboto-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url('/fonts/Roboto-Medium.woff2') format('woff2'),
       url('/fonts/Roboto-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'CD Fedra Pro';
  src: url('/fonts/CDFedraPro-Bold.woff2') format('woff2'),
       url('/fonts/CDFedraPro-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### 4. **Update Font References in Code**

The Figma imports already reference these fonts:
- `font-['Roboto:Medium',_sans-serif]` → will use Roboto with font-weight: 500
- `font-['CD_Fedra_Pro:Bold',_sans-serif]` → will use CD Fedra Pro with font-weight: 700

### 5. **Add More Font Weights (Optional)**

If you need additional weights, add more `@font-face` declarations:

```css
@font-face {
  font-family: 'Roboto';
  src: url('/fonts/Roboto-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url('/fonts/Roboto-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
```

## Font Files You Need for This Project

Based on your Figma design, you need:

1. **Roboto**
   - Roboto-Regular (400)
   - Roboto-Medium (500)
   
2. **CD Fedra Pro**
   - CDFedraPro-Bold (700)

## Where to Get Fonts

### Roboto (Free)
- [Google Fonts](https://fonts.google.com/specimen/Roboto)
- Download and convert to WOFF2

### CD Fedra Pro (Commercial)
- Purchase from [TypeTogether](https://www.type-together.com/)
- Requires proper licensing

## Alternative: Using Google Fonts CDN

If you prefer not to self-host, you can use Google Fonts CDN. Add this to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

Then update your CSS:

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

**Note:** Google Fonts doesn't have CD Fedra Pro, so you'll need to self-host that font.

## Testing

After adding fonts, test by:
1. Opening DevTools → Network tab
2. Filter by "Font"
3. Verify fonts are loading correctly
4. Check for any 404 errors

## Troubleshooting

### Fonts not loading?
- Check file paths are correct (case-sensitive)
- Verify font files are in `/fonts/` directory
- Clear browser cache
- Check browser console for errors

### Wrong font displaying?
- Verify `font-family` name matches the `@font-face` declaration exactly
- Check `font-weight` values match
- Ensure font files are properly formatted

## Performance Tips

1. **Use WOFF2 first** - best compression
2. **Preload critical fonts** - add to HTML:
   ```html
   <link rel="preload" href="/fonts/Roboto-Medium.woff2" as="font" type="font/woff2" crossorigin>
   ```
3. **Use `font-display: swap`** - prevents invisible text during load
4. **Subset fonts** - include only needed characters to reduce file size
