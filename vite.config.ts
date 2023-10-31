import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'assets',
                    dest: '',
                },
                {
                    src: 'form.php',
                    dest: '',
                },
            ],
        }),
    ],
    css: {
        postcss: {
            plugins: [autoprefixer({})],
        },
    },
})
