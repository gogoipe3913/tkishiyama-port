module.exports = {
  plugins: [
    'stylelint-scss', // stylelint-scss を使う
    'stylelint-order'
  ],
  extends: [
    'stylelint-config-standard', //ベースの設定ファイル
    'stylelint-prettier/recommended'
  ],
  rules: {
    'string-quotes': 'single', // ダブルクォーテーションに揃える
    'at-rule-no-unknown': null, //scssで使える @include などにエラーがでないようにする
    'scss/at-rule-no-unknown': true, //scssでもサポートしていない @ルール にはエラーを出す
    'max-line-length': null, //max文字数を無視
    'trailingComma': 'es5', //末尾のカンマをどうするか: es5に準拠させる。
  }
};