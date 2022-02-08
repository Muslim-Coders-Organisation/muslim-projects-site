import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const ghpages = process.env.NODE_ENV === "ghpages";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		paths: {
			base: ghpages ? "/muslim-projects-site" : ""
		},

		adapter: adapter()
	}
};

export default config;
