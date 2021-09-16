<template>
  <div id="about" class="AboutDocument">
    <div
      :class="[
        showFlags.isShowHeader
          ? 'AboutDocument__header--show'
          : 'AboutDocument__header'
      ]"
    >
      <p class="AboutDocument__title">
        <span>about me</span>
      </p>
      <p class="AboutDocument__subTitle">
        <span>自身を形成するものについて</span>
      </p>
      <div class="AboutDocument__headerBottomBar"></div>
    </div>
    <div
      class="AboutDocument__textLeftColumn"
      :class="[
        showFlags.isShowTextUpper
          ? 'AboutDocument__text--show'
          : 'AboutDocument__text'
      ]"
    >
      <p class="AboutDocument__textBodyKey">
        きしやま たいき
        <br />
        <br />
        <span class="AboutDocument__textBodyColumn">
          このページは、
        </span>
        <span class="AboutDocument__textBodyColumn">
          好きなものをアウトプットするための
        </span>
        <span class="AboutDocument__textBodyColumn">
          遊び場にしていこうと思っています.
        </span>
        <br />
        <span class="AboutDocument__textBodyColumn">
          -
        </span>
        <br />
        <span class="AboutDocument__textBodyColumn">
          僕は現在, ウェブの会社で
        </span>
        <span class="AboutDocument__textBodyColumn">
          フロントエンドエンジニアをしています.
        </span>
        <span class="AboutDocument__textBodyColumn">
          デザインや写真など,
        </span>
        <span class="AboutDocument__textBodyColumn">
          他にも多くのことに興味があるので
        </span>
        <span class="AboutDocument__textBodyColumn">
          色々な人と繋がることができれば嬉しいです.
        </span>
        <br />
        <span class="AboutDocument__textBodyColumn">
          どうぞよろしくお願いします.
        </span>
        <br />
        <span class="AboutDocument__textBodyColumn">
          -
        </span>
        <br />
      </p>
    </div>
    <div
      class="AboutDocument__textRightColumn"
      :class="[
        showFlags.isShowTextLower
          ? 'AboutDocument__text--show'
          : 'AboutDocument__text'
      ]"
    >
      <p class="AboutDocument__textBodyValue">
        <span class="AboutDocument__textBodyColumn">Taiki Kishiyama</span>
        <br />
        <span class="AboutDocument__textBodyColumn">
          A frontend engineer / Web Designer.
        </span>
        <br />
        <span class="AboutDocument__textBodyColumn">Web :</span>
        <span class="AboutDocument__textBodyColumn">- website</span>
        <span class="AboutDocument__textBodyColumn">
          - cms (WP, JS based CMS)
        </span>
        <span class="AboutDocument__textBodyColumn">
          - application (nodeJS)
        </span>
        <span class="AboutDocument__textBodyColumn">
          - JS framework (Vue / React)
        </span>
        <span class="AboutDocument__textBodyColumn">
          - responsive design
        </span>
        <br />
        <span class="AboutDocument__textBodyColumn">Design :</span>
        <span class="AboutDocument__textBodyColumn">- graphic design</span>
        <span class="AboutDocument__textBodyColumn">- web design</span>
        <span class="AboutDocument__textBodyColumn">- user experience</span>
        <br />
        <span class="AboutDocument__textBodyColumn">Interest :</span>
        <span class="AboutDocument__textBodyColumn">
          web direction / graphic design /
        </span>
        <span class="AboutDocument__textBodyColumn">
          typography / frontend engineering / photography / video edit /
        </span>
        <span class="AboutDocument__textBodyColumn">
          motion graphics / illustration /
        </span>
        <span class="AboutDocument__textBodyColumn">
          coffee / magazine / ...etc.
        </span>
      </p>
    </div>
    <div class="AboutDocument__bottomBar"></div>
    <div
      :class="[
        showFlags.isShowProfiel
          ? 'AboutDocument__profiel--show'
          : 'AboutDocument__profiel'
      ]"
    >
      <p class="AboutDocument__profielImage">
        <img
          class="AboutDocument__profielImageBody"
          src="../../../../assets/images/prof-image/prof-image1.jpg"
          alt="profielImage1"
        />
      </p>
      <div class="AboutDocument__career">
        <p class="AboutDocument__careerText">
          <span class="AboutDocument__careerTextYear">1994 :</span>
          <span class="AboutDocument__careerTextEvent">
            Born in Shizuoka, Japan
          </span>
        </p>
        <p class="AboutDocument__careerText">
          <span class="AboutDocument__careerTextYear">2013 :</span>
          <span class="AboutDocument__careerTextEvent">
            Entered Univ of Electro-Communications (UEC)
          </span>
        </p>
        <p class="AboutDocument__careerText">
          <span class="AboutDocument__careerTextYear">2017 :</span>
          <span class="AboutDocument__careerTextEvent">
            Entered UEC graduate school
          </span>
        </p>
        <p class="AboutDocument__careerText">
          <span class="AboutDocument__careerTextYear">2017 :</span>
          <span class="AboutDocument__careerTextEvent">
            PLAID inc.
          </span>
        </p>
        <p class="AboutDocument__careerText">
          <span class="AboutDocument__careerTextYear">2019 :</span>
          <span class="AboutDocument__careerTextEvent">
            Graduated from UEC
          </span>
        </p>
        <p class="AboutDocument__careerText">
          <span class="AboutDocument__careerTextYear">2019 :</span>
          <span class="AboutDocument__careerTextEvent">
            Yahoo! JAPAN corp.
          </span>
        </p>
        <p class="AboutDocument__careerText">
          <span class="AboutDocument__careerTextYear">2021 :</span>
          <span class="AboutDocument__careerTextEvent">
            Freelance.
          </span>
        </p>
      </div>
    </div>
    <div class="AboutDocument__bottomBar"></div>
  </div>
</template>

<script>
export default {
  name: 'AboutDocument',
  props: {
    aboutDocumentFlags: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showFlags: this.aboutDocumentFlags
    };
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
