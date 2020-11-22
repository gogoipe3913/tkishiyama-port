import NameLogo from './component';

export default {
  title: 'pc|molecules/NameLogo',
  component: NameLogo
};

export const item = () => ({
  components: { NameLogo },
  render(h) {
    return <NameLogo />;
  }
});
