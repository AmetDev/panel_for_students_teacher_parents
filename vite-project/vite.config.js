import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'
import { defineConfig } from 'vite'

dotenv.config() // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		__VALUE__: `"${process.env.VALUE}"`, // wrapping in "" since it's a string
	},
})
