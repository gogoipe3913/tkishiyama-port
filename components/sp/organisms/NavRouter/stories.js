import SnsRouter from './component.vue';

export default {
  title: 'sp|organisms/SnsRouter',
  component: SnsRouter
};

export const Default = () => ({
  components: { SnsRouter },
  render(h) {
    return <SnsRouter />;
  }
});
