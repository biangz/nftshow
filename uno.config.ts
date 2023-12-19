// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
  presetWebFonts,
  presetIcons,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetWebFonts({ 
      provider: 'google',
      fonts: {
        // these will extend the default theme
        mono: ['Fira Mono:400,500,700'],
      },
    }),
    presetAttributify(),
    presetIcons({
      
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})