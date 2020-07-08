<template>
  <div class="BlogArticle">
    <div class="BlogArticle__heroImg">
      <img
        class="BlogArticle__heroImgBody"
        :src="item.fields.heroImage.fields.file.url"
        alt=""
      />
    </div>
    <div class="BlogArticle__bodyWrapper">
      <div class="BlogArticle__body">
        <p class="BlogArticle__title">{{ item.fields.title }}</p>
        <p class="BlogArticle__publishedDate">
          {{ item.fields.publishDate | dateFormatter }}
        </p>
        <p class="BlogArticle__articleType">{{ item.fields.type }}</p>
        <p class="BlogArticle__text" v-html="$md.render(post.fields.body)"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import moment from 'moment';
export default {
  name: 'BlogArticle',
  filters: {
    dateFormatter(value) {
      return moment(value).format('YYYY.MM.DD');
    }
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      item: this.post
    };
  },
  methods: {
    toHtmlString(obj) {
      return documentToHtmlString(obj);
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
