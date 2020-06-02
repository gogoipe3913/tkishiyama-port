<template>
  <div class="SnsRouter">
    <div class="SnsRouter__secondBackground">
      <ul class="SnsRouter__items">
        <li class="SnsRouter__item SnsRouter__item--ptrst">
          <a
            class="SnsRouter__itemButton"
            href="https://www.pinterest.jp/taikikishiyama/boards/"
          >
            <img
              class="SnsRouter__itemButtonImg"
              src="../../../../assets/images/sns-icon/ptrst.png"
              alt="pinterest-icon"
            />
          </a>
        </li>
        <li class="SnsRouter__item SnsRouter__item--inst">
          <a
            class="SnsRouter__itemButton"
            href="https://www.instagram.com/tai_kis_913/"
          >
            <img
              class="SnsRouter__itemButtonImg"
              src="../../../../assets/images/sns-icon/inst.png"
              alt="instagram-icon"
            />
          </a>
        </li>
        <li class="SnsRouter__item SnsRouter__item--fb">
          <a
            class="SnsRouter__itemButton"
            href="https://www.facebook.com/taikikishiyama913"
          >
            <img
              class="SnsRouter__itemButtonImg"
              src="../../../../assets/images/sns-icon/fb.png"
              alt="facebook-icon"
            />
          </a>
        </li>
        <li class="SnsRouter__item SnsRouter__item--twt">
          <a
            class="SnsRouter__itemButton"
            href="https://twitter.com/t____kshy3913"
          >
            <img
              class="SnsRouter__itemButtonImg"
              src="../../../../assets/images/sns-icon/twt.png"
              alt="twitter-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnsRouter'
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
