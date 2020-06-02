import TopView from './component';

export default {
  title: 'sp|templates/TopView',
  component: TopView
};

export const item = () => ({
  components: { TopView },
  render(h) {
    return <TopView />;
  }
});
