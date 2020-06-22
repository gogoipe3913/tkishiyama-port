import NameLogo from './component';

export default {
  title: 'sp|molecules/NameLogo',
  component: NameLogo
};

export const item = () => ({
  components: { NameLogo },
  render(h) {
    return <NameLogo />;
  }
});
