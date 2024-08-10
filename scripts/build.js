const { build } = require('vite')
const ts = require('@rollup/plugin-typescript')

const buildAddOneLib = () =>
  build({
    build: {
      lib: {
        entry: './src/add-one/add-one.ts',
        name: 'addOne',
        fileName: (format) => `add-one.lib.${format}.js`,
        formats: ['es', 'iife'],
      },
      outDir: './dist/add-one',
      minify: 'esbuild',
      emptyOutDir: false,

      rollupOptions: {
        plugins: [
          ts({
            compilerOptions: {
              target: 'es5',
            },
          }),
        ],
      },
    },
  })

const buildAddTwoLib = () =>
  build({
    build: {
      lib: {
        entry: './src/add-two/add-two.ts',
        name: 'addTwo',
        fileName: (format) => `add-two.lib.${format}.js`,
        formats: ['es'],
      },
      outDir: './dist/add-two',
      minify: false,
      emptyOutDir: false,
      rollupOptions: {
        plugins: [
          ts({
            compilerOptions: {
              target: 'es2023',
            },
          }),
        ],
      },
    },
  })

const main = async () => {
  await buildAddOneLib()
  await buildAddTwoLib()
}

main().catch((err) => {
  console.log(err)
  process.exit(1)
})
