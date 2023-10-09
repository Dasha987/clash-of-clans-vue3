<template>
  <div class="card-stats">
    <div v-for="(item, index) in items" :key="index">
      <div class="item-info__title">{{ item.title }}</div>
      <div>{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
