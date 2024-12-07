import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const programs = await getCollection("programs");
  return rss({
    title: "BHS Innovation Fund | Programs",
    description:
      "The programs funded by the Brookline High School Innovation Fund.",
    site: context.site,
    items: programs.map((program) => ({
      title: program.data.title,
      pubDate: program.data.pubDate,
      description: program.data.description,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/programs/[slug]` routes
      link: `/programs/${program.slug}/`,
    })),
    customData: `<language>en-us</language>`,
    // ex. use your stylesheet from "public/rss/styles.xsl"
    stylesheet: "/rss/styles.xsl",
  });
}
