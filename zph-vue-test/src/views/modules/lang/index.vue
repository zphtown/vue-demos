<template>
  <div class="language page orange">
    <h1>语言切换：</h1>
    <el-select @change="change" v-model="language">
      <el-option value="中文">中文</el-option>
      <el-option value="英文">英文</el-option>
    </el-select>
    <ul>
      <li  v-for="(item, key, index) in config" :key="index">
        <template v-if="typeof item !=='string' ">
          <h1>{{key}}</h1>
          <div  v-for="(child, childKey, childIndex) in item" :key="childIndex">
            {{childKey}} : {{$t(`${key}.${childKey}`)}}
          </div>
        </template>
        <template v-else>
          {{key}} : {{$t(key)}}
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import config from '@/assets/lang/en'
export default {
  data() {
    return {
      config,
      language: this.$i18n.locale === 'en' ? '英文' : '中文'
    }
  },
  methods: {
    change(val) {
      let lang = val === '英文' ? 'en' : 'zh-cn'
      localStorage.setItem('user_language', lang)
      this.$i18n.locale = lang
    }
  }
}
</script>
