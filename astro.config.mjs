// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	buildOptions :{
		site:'https://docs-with-astro.netlify.app/',
	},
	 vite: {
    ssr: {
      external: ["svgo"],
    },
  },
	// Comment out "renderers: []" to enable Astro's default component support.
	renderers: [],
});
