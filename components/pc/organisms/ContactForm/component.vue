<template>
  <div id="contact" class="ContactForm">
    <div class="ContactForm__header">
      <p class="ContactForm__title">
        <span>contact</span>
      </p>
      <p class="ContactForm__subTitle">
        <span>ご依頼, ご相談はこちらからご連絡ください.</span>
      </p>
      <div class="ContactForm__headerBottomBar"></div>
    </div>
    <form ref="form" class="ContactForm__forms">
      <div v-if="!isFilledItems()" class="ContactForm__validation">
        <p class="ContactForm__validationText">
          {{ contactFormValidation.message }}
        </p>
      </div>
      <fieldset>
        <input
          v-model="contactForm.name"
          type="text"
          class="ContactForm__form hoverable"
          placeholder="name *"
        />
        <input
          v-model="contactForm.email"
          type="text"
          class="ContactForm__form hoverable"
          placeholder="E-mail *"
        />
        <input
          v-model="contactForm.phone"
          type="text"
          class="ContactForm__form hoverable"
          placeholder="phone *"
        />
        <textarea
          v-model="contactForm.message"
          type="text"
          class="ContactForm__form hoverable"
          placeholder="message *"
        ></textarea>
      </fieldset>
      <div class="ContactForm__sendResult">
        <p class="ContactForm__sendResultText">
          {{ snackBar.message }}
        </p>
      </div>
      <button class="ContactForm__submit hoverable" @click.prevent="sendMail()">
        send
      </button>
    </form>
  </div>
</template>

<script>
import { functions } from '~/plugins/firebase.js';

export default {
  name: 'ContactForm',
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        phone: '',
        message: '',
        loading: true
      },
      contactFormValidation: {
        isDisplay: false,
        message: ''
      },
      snackBar: {
        show: false,
        message: ''
      }
    };
  },
  methods: {
    sendMail() {
      if (this.isFilledItems()) {
        this.contactForm.loading = true;
        const mailer = functions.httpsCallable('sendMail');

        mailer(this.contactForm)
          .then(() => {
            this.formReset();
            this.showSnackBar(
              // 'success',
              'お問い合わせありがとうございます。送信完了しました'
            );
          })
          .catch((err) => {
            this.showSnackBar(
              // 'error',
              '送信に失敗しました。時間をおいて再度お試しください'
            );
            // eslint-disable-next-line no-console
            console.log(err);
          })
          .finally(() => {
            this.contactForm.loading = false;
          });
      } else {
        this.snackBar.message = '';
        this.contactFormValidation.isDisplay = true;
        this.contactFormValidation.message = '必須項目を入力してください';
      }
    },
    isFilledItems() {
      const isName = this.contactForm.name !== '';
      const isEmail = this.contactForm.email !== '';
      const isPhone = this.contactForm.phone !== '';
      const isMessage = this.contactForm.message !== '';

      if (isName && isEmail && isPhone && isMessage) {
        this.contactFormValidation.message = '';
        return true;
      }
      return false;
    },
    showSnackBar(message) {
      this.snackBar.message = message;
      this.snackBar.show = true;
    },
    formReset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
