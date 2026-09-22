// Eleventy configuration. Content lives at the repo root:
//   _posts/      posts (YYYY-MM-DD-title.md, YAML front matter)
//   _drafts/     unpublished notes, never built
//   _layouts/    page shells        _includes/  partials
//   _data/       site.json settings  css/ js/ img/  copied as-is
export default function (eleventyConfig) {
  // Static files
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("keybase.txt");
  eleventyConfig.addPassthroughCopy("CNAME");

  // Not content (.gitignore entries such as _site and node_modules are ignored automatically)
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("_drafts/**");
  eleventyConfig.ignores.add("_notes-feedback/**");
  eleventyConfig.ignores.add(".github/**");

  // Markdown: curly quotes and dashes, as the old Kramdown output had
  eleventyConfig.amendLibrary("md", (md) => md.set({ typographer: true }));

  // Dates come from the file name and are UTC midnight; always format in UTC so they never shift a day.
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  eleventyConfig.addFilter("readableDate", (value) => {
    const d = new Date(value);
    return `${String(d.getUTCDate()).padStart(2, "0")} ${MONTHS[d.getUTCMonth()]}, ${d.getUTCFullYear()}`;
  });
  eleventyConfig.addFilter("isoDate", (value) => new Date(value).toISOString());
  eleventyConfig.addFilter("rfc822Date", (value) => new Date(value).toUTCString());

  // "N min read", rounded up
  eleventyConfig.addFilter("readingTime", (html, wordsPerMinute = 200) => {
    const words = String(html).replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
  });

  // A post's own tags, without the internal "posts" collection tag
  eleventyConfig.addFilter("postTags", (tags) => (tags || []).filter((t) => t !== "posts"));

  // Tag index: [{ name, items (newest first) }], sorted by name
  eleventyConfig.addCollection("tagList", (api) => {
    const byTag = new Map();
    for (const item of api.getFilteredByTag("posts")) {
      for (const tag of item.data.tags || []) {
        if (tag === "posts") continue;
        if (!byTag.has(tag)) byTag.set(tag, []);
        byTag.get(tag).push(item);
      }
    }
    return [...byTag.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([name, items]) => ({ name, items: items.sort((a, b) => b.date - a.date) }));
  });

  return {
    dir: { input: ".", includes: "_includes", layouts: "_layouts", data: "_data", output: "_site" },
    templateFormats: ["md", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
}
