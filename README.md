# all black

`all black` is a curated archive website for luxury secondhand clothing.

The project is designed as a monochrome editorial storefront: part brand presentation, part archive selection, part resale browsing experience.

Repository: [hpxz803-commits/all-black-archive-site](https://github.com/hpxz803-commits/all-black-archive-site)

## Overview

This site includes:

- a branded `Home` page with hero presentation, featured products, collection entry points, and brand messaging
- a `Shop` page with category and delivery filters
- a `Product` page with dynamic product details
- `Collection`, `Archive`, and `About` pages
- multilingual navigation and shared interface copy
- search for categories and individual items

## Preview

![all black homepage preview](assets/readme-home.png)

## Pages

- `index.html` — homepage / brand visual
- `shop.html` — current shop catalog
- `product.html` — item detail page
- `collection.html` — seasonal archive edit
- `archive.html` — broader archive browsing page
- `about.html` — brand and studio context

## Tech

- HTML
- CSS
- Vanilla JavaScript

There is no framework or build step. The project can be opened directly in a browser.

## Product Data

All product content is now centralized in:

- `products.js`

That file controls:

- product names
- images
- prices
- categories
- delivery state
- sizes
- product details
- search tokens

This means future updates are straightforward:

1. replace or add product images in `assets/`
2. update the matching product entry in `products.js`
3. refresh the browser

## Main Files

- `products.js` — product catalog data
- `main.js` — interactions, filtering, search, product rendering, and language state
- `translations.js` — multilingual shared copy
- `styles.css` — full visual system and layout styling

## Local Use

You can run the project by opening:

- `index.html`

Or serve the folder with any simple static server if you prefer.

## Deploy

The project is ready to be deployed as a static site.

### GitHub Pages

1. open the repository on GitHub
2. go to `Settings` -> `Pages`
3. under `Build and deployment`, choose `Deploy from a branch`
4. select the `main` branch and the `/ (root)` folder
5. save the settings

After that, GitHub Pages will publish the site from the root HTML files.

### Vercel

1. import the repository into Vercel
2. keep the project as a static site with no build command
3. set the output directory to empty or leave it unset
4. deploy

Because the project uses plain HTML, CSS, and JavaScript, no framework-specific setup is required.

## Notes

- preview images are intentionally excluded from version control
- the repository is set up for easy ongoing maintenance of products, prices, and visuals

## Next Steps

Potential next improvements:

- connect product data to a CMS or JSON feed
- expand full-page multilingual content beyond the shared UI layer
- add a live demo link after deployment
