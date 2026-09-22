import path from "node:path";

// Defaults for every file in _posts/.
export default {
  layout: "post",
  tags: ["posts"],
  eleventyComputed: {
    // URL keeps the whole file name, date included: _posts/2024-01-04-title.md -> /2024-01-04-title/
    permalink: (data) => data.permalink || `/${path.basename(data.page.inputPath, ".md")}/`,
    // Meta description: the front matter "description", else the post's first paragraph.
    description: (data) => data.description || firstParagraph(data.page.rawInput),
  },
};

function firstParagraph(raw) {
  if (!raw) return undefined;
  const text = raw.replace(/^---[\s\S]*?---\s*/, "");
  for (const block of text.split(/\n\s*\n/)) {
    const line = block.trim();
    if (!line || /^([#>!<|*-]|\d+\.)/.test(line)) continue;
    const plain = line
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[*_`]+/g, "")
      .replace(/\s+/g, " ");
    return plain.length > 160 ? plain.slice(0, 157).replace(/\s+\S*$/, "") + "..." : plain;
  }
  return undefined;
}
