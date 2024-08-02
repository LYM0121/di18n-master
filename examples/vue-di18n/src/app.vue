<template lang="pug">
div(class="app")
  img(:src="logo")
  h1 Vue-di18n
  p Happly coding here ~
  div
    // di18n-disable
    button(@click="changeLocale('zh-CN')") 中文
    // di18n-enable
    button(@click="changeLocale('en-US')") English
  p {{$t('中文')}}
  p {{haha}}
  p {{$t('啦啦啦呼呼')}}
  div(class="app-html-container")
    AppHtml
</template>

<script>
import { intl, setLocale } from 'di18n-vue'
import AppHtml from './AppHtml'
import Logo from './EFE-logo.png'

export default {
  name: 'app',
  data() {
    return {
      logo: Logo,
      haha: intl.$t('哈哈'),
    }
  },
  components: { AppHtml },
  methods: {
    changeLocale(locale) {
      setLocale(locale, true)
    },
  },
}
</script>

<style lang="less">
html {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

body {
  padding: 0;
  background-color: #fff;
}

.app {
  text-align: center;

  img {
    width: 200px;
  }
}
</style>
