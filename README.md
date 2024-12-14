# BHS Innovation Fund Website (sandbox)

This website is a testing ground for the Brookline High School Innovation Fund, a nonprofit organization in Brookline, MA, USA. The organization's mission is to catalyze innovation at Brookline High School by supporting faculty-driven curricular initiatives that will inspire our students and prepare them to thrive in a changing world.

## Table of contents

- [Design](#design)
- [Tech Stack](#tech-stack)
- [Structure](#structure)
- [Issues](#issues)
- [Continued Development](#continued-development)
- [Resources](#resources)
- [Contributors](#contributors)

## Design

### Colors

- Delft Blue - rgb(30, 47, 78) / #1e2f4e – sample text – sample text
- Amber - rgb(247, 188, 28) / #f7bc1c – sample text – sample text
- Auburn - rgb(169, 61, 53) / #a93d35 – sample text – sample text
- Vista Blue - rgb(120, 145, 188) / #7891bc – sample text – sample text
- Davy’s gray - rgb(74, 76, 74) / #4a4c4a – sample text – sample text
- Jet - rgb(44, 45, 43) / #2c2d2b – sample text – sample text

### Fonts

[Nunito](https://fonts.google.com/specimen/Nunito?query=source)

[Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans?query=source)

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

## Issues

The following are known issues that should be addressed:

## Continued Development

The following are specific areas that are targeted for improvement:

## Resources

The following were useful resources in the website's development and current state:

## Contributors

- [Eli Silk](https://github.com/elisilk)
