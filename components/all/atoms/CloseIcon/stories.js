import CloseIcon from './component.vue';

export default {
  title: 'all|atoms/CloseIcon',
  component: CloseIcon
};

export const item = () => ({
  components: { CloseIcon },
  render(h) {
    return <CloseIcon path="/" />;
  }
});
