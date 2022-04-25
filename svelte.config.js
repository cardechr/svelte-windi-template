import vercel from '@sveltejs/adapter-vercel';
import { windi } from 'svelte-windicss-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		windi({})
	],
	kit: {
		adapter: vercel({
			edge: true
		})
	}
};

export default config;
