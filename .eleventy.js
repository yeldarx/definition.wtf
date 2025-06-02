const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");
const path = require("path");
const { execSync } = require("child_process");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addFilter("date", (value, format = "dd LLL yyyy") => {
    return DateTime.fromJSDate(value, { zone: "utc" }).toFormat(format);
  });
  eleventyConfig.addFilter("lastUpdated", filePath => {
    try {
      const gitDate = execSync(`git log -1 --format="%ad" -- ${filePath}`, {
        encoding: "utf-8"
      }).trim();
      return gitDate;
    } catch (e) {
      return "Unknown";
    }
  });
  eleventyConfig.addPassthroughCopy({ "src/_includes/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/_includes/favicon.ico": "favicon.ico" });
  eleventyConfig.addFilter("filterByLang", (items, lang) => {
    return items.filter(item => item.data.lang === lang);
  });
  eleventyConfig.addCollection("definitions", collectionApi =>
    collectionApi.getFilteredByGlob([
      "src/definitions/*.md",
      "src/*/definitions/*.md"
    ])
  );
  eleventyConfig.addCollection("posts", collectionApi =>
    collectionApi.getFilteredByGlob([
      "src/blog/*.md"
    ])
  );
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "public"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"]
  };
};
