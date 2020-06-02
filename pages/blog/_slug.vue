<template>
  <div class="Article">
    <BlogArticleView :current-post="currentPost" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BlogArticleView from '~/components/sp/templates/BlogArticleView/component';

export default {
  name: 'Article',
  components: {
    BlogArticleView
  },
  async asyncData({ payload, store, params, error }) {
    const currentPost =
      payload ||
      (await store.state.posts.find(
        (post) => post.fields.slug === params.slug
      ));

    if (currentPost) {
      return { currentPost };
    } else {
      return error({ statusCode: 400 });
    }
  },
  computed: {
    ...mapGetters(['setEyeCatch'])
  }
};
</script>

<style scoped lang="scss"></style>
