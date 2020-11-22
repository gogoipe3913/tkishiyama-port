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
      :class="[
        showFlags.isShowText
          ? 'AboutDocument__text--show'
          : 'AboutDocument__text'
      ]"
    >
      <div class="AboutDocument__textLeftColumn">
        <p class="AboutDocument__textBodyKey">
          きしやま たいき
          <br />
          <br />
          <span class="AboutDocument__textBodyColumn">
            このサイトでは, 自分のアウトプットを
          </span>
          <span class="AboutDocument__textBodyColumn">
            載せていこうと思っています.
          </span>
          <br />
          <span class="AboutDocument__textBodyColumn">
            興味を持ってくれた誰かに
          </span>
          <span class="AboutDocument__textBodyColumn">
            更に自分を知ってもらえるように, と言う意図です.
          </span>
          <br />
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
            ただ, ウェブ開発に加えて
          </span>
          <span class="AboutDocument__textBodyColumn">
            デザインや写真など, 他にも多くのことに興味があるので
          </span>
          <span class="AboutDocument__textBodyColumn">
            色々な人と繋がることができればと思います.
          </span>
          <br />
          <span class="AboutDocument__textBodyColumn">
            このページが, 一つのきっかけになれば
          </span>
          <span class="AboutDocument__textBodyColumn">
            嬉しいです.
          </span>
          <br />
          <br />
          <br />
          <span class="AboutDocument__textBodyColumn">
            どうぞよろしくお願いします.
          </span>
        </p>
      </div>
      <div class="AboutDocument__textRightColumn">
        <p class="AboutDocument__textBodyValue">
          <span class="AboutDocument__textBodyColumn">Taiki Kishiyama</span>
          <br />
          <span class="AboutDocument__textBodyColumn">
            A frontend engineer working at yahoo! JAPAN.
          </span>
          <br />
          <span class="AboutDocument__textBodyColumn">Web :</span>
          <span class="AboutDocument__textBodyColumn">- website</span>
          <span class="AboutDocument__textBodyColumn">
            - cms (WordPress, strapiJS, KeystoneJS, ...Etc)
          </span>
          <span class="AboutDocument__textBodyColumn">
            - application (nodeJS)
          </span>
          <span class="AboutDocument__textBodyColumn">
            - frontend framework (Vue, React)
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
            web direction / graphic design / typography /
          </span>
          <span class="AboutDocument__textBodyColumn">
            frontend engineering / photography / video edit /
          </span>
          <span class="AboutDocument__textBodyColumn">
            motion graphics / illustration /
          </span>
          <span class="AboutDocument__textBodyColumn">
            coffee / magazine / acne studios / minimal /
          </span>
          <span class="AboutDocument__textBodyColumn">
            trip / wording / aurora
          </span>
          <span class="AboutDocument__textBodyColumn">
            city pop / post rock
          </span>
        </p>
      </div>
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
