# BHS Innovation Fund Website (sandbox)

This website is a testing ground for the [Brookline High School Innovation Fund](https://bhsinnovationfund.org), a nonprofit organization in Brookline, MA, USA. The organization's mission is to catalyze innovation at Brookline High School by supporting faculty-driven curricular initiatives that will inspire our students and prepare them to thrive in a changing world.

The Innovation Fund's official, public-facing website is: [https://bhsinnovationfund.org](https://bhsinnovationfund.org)

## Table of contents

- [Design](#design)
  - [Colors](#colors)
  - [Fonts](#fonts)
  - [Icons](#icons)
- [Tech Stack](#tech-stack)
- [Structure](#structure)
- [Continued Development](#continued-development)
  - [Known Issues](#known-issues)
  - [Suggested Improvements](#suggested-improvements)
- [Resources](#resources)
- [Contributors](#contributors)

## Design

### Colors

| Name        | Hex       | RGB                  | Sample                                                                                         |
| ----------- | --------- | -------------------- | ---------------------------------------------------------------------------------------------- |
| Delft Blue  | `#1e2f4e` | `rgb(30, 47, 78)`    | ![Delft Blue color](https://placehold.co/300x50/1e2f4e/ffffff?text=Delft+Blue+-+%231e2f4e)     |
| Amber       | `#f7bc1c` | `rgb(247, 188, 28)`  | ![Amber color](https://placehold.co/300x50/f7bc1c/ffffff?text=Amber+-+%23f7bc1c)               |
| Auburn      | `#a93d35` | `rgb(169, 61, 53)`   | ![Auburn color](https://placehold.co/300x50/a93d35/ffffff?text=Auburn+-+%23a93d35)             |
| Vista Blue  | `#7891bc` | `rgb(120, 145, 188)` | ![Vista Blue color](https://placehold.co/300x50/7891bc/ffffff?text=Vista+Blue+-+%237891bc)     |
| Davy’s Gray | `#4a4c4a` | `rgb(74, 76, 74)`    | ![Davy’s Gray color](https://placehold.co/300x50/4a4c4a/ffffff?text=Davy%27s+Gray+-+%234a4c4a) |
| Jet         | `#2c2d2b` | `rgb(44, 45, 43)`    | ![Davy’s Gray color](https://placehold.co/300x50/2c2d2b/ffffff?text=Jet+-+%232c2d2b)           |

[!NOTE]
If I put a color in backticks directly in a paragraph, such as this `#1e2f4e`, will it display a visualization of the color, [as suggested in the GitHub Docs](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#supported-color-models)?

### Fonts

| Name                                                                      | Sample                                                                                           |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [Nunito](https://fonts.google.com/specimen/Nunito?query=source)           | ![Nunito font](https://placehold.co/300x50/1e2f4e/ffffff?text=Nunito&font=nunito)                |
| [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans?query=source) | ![Nunito Sans font](https://placehold.co/300x50/1e2f4e/ffffff?text=Nunito+Sans&font=nunito-sans) |

### Icons

[Ion Icons](https://ionic.io/ionicons)

## Tech Stack

The website is built using a [Jamstack](https://jamstack.org/) approach. Jamstack has [a number of advantages](https://www.netlify.com/jamstack) over a legacy web approach. For this project, we used the following tools:

- [Astro](https://astro.build/) - static site generator
- [Contentful](https://www.contentful.com/) - headless content management system
- [GitHub](https://github.com/) - online software version control platform
- [Netlify](https://www.netlify.com/) - build system and hosting

## Structure

The website has the following folder and file structure:

```text
/
├── public/
│   └── images/
│       └── favicon/
│       └── icons/
│       └── logo/
│   └── rss/
├── src/
│   └── components/
│   └── images/
│   └── layouts/
│   └── lib/
│   └── pages/
│       └── faculty/
│       └── programs/
│       └── about.astro
│       └── events.astro
│       └── impact.astro
│       └── index.astro
│       └── news.astro
│       └── process.astro
│       └── rss.xml.js
│       └── volunteer.astro
│   └── programs/
│   └── rss/
│   └── scripts/
│   └── styles/
│   └── content.config.ts
│   └── env.d.ts
└── package.json
└── astro.config.mjs
└── tsconfig.json
```

## Continued Development

### Known Issues

The following are known issues that should be addressed:

- Fluid typography
- Replace old Twitter icon with newer X icon
- Remove tags index page

### Suggested Improvements

The following are specific areas that are targeted for improvement:

- Sticky header
- Events listing and individual events pages
- Individual faculty pages

## Resources

The following were useful resources in the website's development and current state:

## Contributors

- [Eli Silk](https://github.com/elisilk)
