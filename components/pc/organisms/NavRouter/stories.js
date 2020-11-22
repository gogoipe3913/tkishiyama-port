import SnsRouter from './component.vue';

export default {
  title: 'pc|organisms/SnsRouter',
  component: SnsRouter
};

export const Default = () => ({
  components: { SnsRouter },
  render(h) {
    return <SnsRouter />;
  }
});
