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
        thumbImage: {
          fields: {
            file: {
              url:
                'images.ctfassets.net/qx3vqxu71ky0/5aHUiJ16L07lo1z4YgwYTf/c35b790df98b9dc755948568a13bd744/FH010012.JPG'
            }
          }
        }
      }
    };
    return <BlogPost post={item} />;
  }
});
