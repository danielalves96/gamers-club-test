import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  brandTitle: 'Gamers Club - Test',
  brandImage:
    'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gc-logo-horizontal-cinza.png',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
});
