import { withInfo } from 'storybook-addon-vue-info';
import { storiesOf } from '@storybook/vue';
import GlitchChar from './component';

storiesOf('all|atoms/GlitchChar', module)
  .addDecorator(withInfo)
  .add(
    'default',
    () => ({
      components: { GlitchChar },
      template: '<GlitchChar char="G"/>'
    }),
    {
      info: {
        summary: 'グリッチエフェクトタイポグラフィー'
      }
    }
  );
