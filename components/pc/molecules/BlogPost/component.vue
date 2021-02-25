<template>
  <li class="BlogPost">
    <div class="BlogPost__item">
      <button class="BlogPost__itemButton">
        <nuxt-link
          class="BlogPost__itemButtonLink"
          tag="img"
          :src="protcol + item.fields.thumbImage.fields.file.url"
          :to="{
            name: 'documents-slug',
            params: { slug: item.fields.slug }
          }"
        >
        </nuxt-link>
      </button>
      <p class="BlogPost__title">{{ item.fields.title }}</p>
      <p class="BlogPost__publishedDate">
        {{ item.fields.publishDate | dateFormatter }}
      </p>
    </div>
  </li>
</template>

<script>
import moment from 'moment';

export default {
  name: 'BlogPost',
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
      item: this.post,
      protcol: 'https://'
    };
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
