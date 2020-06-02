import BlogPost from './component.vue';

export default {
  title: 'sp|molecules/BlogPost',
  component: BlogPost
};

export const item = () => ({
  components: { BlogPost },
  render(h) {
    const item = {
      fields: {
        title: 'StoryBook用タイトル',
        slug: 'slug-for-storybook',
        publishDate: '2020.05.24',
        heroImage: './../../../../assets/images/top-image-sp.jpg'
      }
    };
    return <BlogPost post={item} />;
  }
});
