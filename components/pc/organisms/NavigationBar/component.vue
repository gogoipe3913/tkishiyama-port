<template>
  <div class="NavigationBar">
    <div class="NavigationBar__leftColumn">
      <a class="NavigationBar__headerLogoButton hoverable" href="">
        <img
          class="NavigationBar__headerLogoBody"
          src="../../../../assets/images/header-logo.svg"
          alt="header-logo"
        />
      </a>
    </div>
    <div class="NavigationBar__rightColumn">
      <ul class="NavigationBar__itemsList">
        <li class="NavigationBar__item">
          <a
            v-scroll-to="'#about'"
            class="NavigationBar__itemButton hoverable"
            href="#"
          >
            about
          </a>
        </li>
        <li class="NavigationBar__item">
          <a class="NavigationBar__itemButton hoverable" href="">galleries</a>
        </li>
        <li class="NavigationBar__item">
          <nuxt-link
            class="NavigationBar__itemButton hoverable"
            to="/documents"
          >
            documents
          </nuxt-link>
        </li>
        <li class="NavigationBar__item">
          <a
            v-scroll-to="'#contact'"
            class="NavigationBar__itemButton hoverable"
            href="#"
          >
            contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar'
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
