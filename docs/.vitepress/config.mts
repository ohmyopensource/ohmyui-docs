import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'OhMyUI!',
  description: 'Open source design system by OhMyOpenSource!',

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Getting Started', link: '/getting-started/installation' },
      { text: 'Tokens', link: '/tokens/overview' },
      { text: 'Components', link: '/components/button' },
      { text: 'Guides', link: '/guides/adding-a-token' },
      { text: 'Technologies', link: '/technologies/style-dictionary' },
    ],

    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Installation', link: '/getting-started/installation' },
            { text: 'Setup', link: '/getting-started/setup' },
            {
              text: 'First Component',
              link: '/getting-started/first-component',
            },
          ],
        },
      ],
      '/tokens/': [
        {
          text: 'Design Tokens',
          items: [
            { text: 'Overview', link: '/tokens/overview' },
            { text: 'Colors', link: '/tokens/colors' },
            { text: 'Spacing', link: '/tokens/spacing' },
            { text: 'Typography', link: '/tokens/typography' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Badge', link: '/components/badge' },
          ],
        },
      ],
      '/guides/': [
        {
          text: 'Guides',
          items: [
            { text: 'Adding a Token', link: '/guides/adding-a-token' },
            {
              text: 'Adding a Component — Angular',
              link: '/guides/adding-a-component-angular',
            },
            {
              text: 'Adding a Component — React',
              link: '/guides/adding-a-component-react',
            },
            {
              text: 'Adding a Component — Flutter',
              link: '/guides/adding-a-component-flutter',
            },
            { text: 'Submitting a PR', link: '/guides/submitting-a-pr' },
          ],
        },
      ],
      '/technologies/': [
        {
          text: 'Technologies',
          items: [
            {
              text: 'Style Dictionary',
              link: '/technologies/style-dictionary',
            },
            { text: 'Storybook', link: '/technologies/storybook' },
            { text: 'Nx', link: '/technologies/nx' },
            { text: 'VitePress', link: '/technologies/vitepress' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ohmyopensource/ohmyui' },
    ],

    footer: {
      message: 'Released under the AGPL-3.0 License.',
      copyright: 'Copyright © 2026 OhMyOpenSource!',
    },

    search: {
      provider: 'local',
    },
  },
});
