<template>
  <div class="wrapper-item">
    <div v-if="item">
      <img :src="require(`@/assets/images/${item.img}`)" :alt="item.title" />
      <h1 class="title">{{ item.title }}</h1>
      <div class="item-text">{{ item.descr }}</div>
      <div class="items-info">
        <div class="item-info" v-for="(item, index) in item.info" :key="index">
          <div class="item-info__title">{{ item.title }}</div>
          <div>{{ item.value }}</div>
        </div>
      </div>
      <div class="item-btn">
        <router-link to="/" class="btn btnDefault"
          >Вернуться на главную</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items.json'

export default {
  data() {
    return {
      item: null
    }
  },
  created() {
    const alias = this.$route.params.alias
    const item = items.find(el => el.alias === alias)

    item ? (this.item = item) : this.$router.push('/:pathMatch(.*)')
  }
}
</script>
