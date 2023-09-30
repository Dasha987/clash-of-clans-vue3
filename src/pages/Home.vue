<template>
  <Carousel :wrapAround="true" :breakpoints="breakpoints">
    <Slide class="card__wrapper" v-for="(item, index) in items" :key="index">
      <Card
        @click="$router.push(`/items/${item.alias}`)"
        :name="`${item.level} level`"
        :title="item.title"
        :imgUrl="item.img"
      >
        <template v-slot:body>
          {{ item.descr }}
        </template>
        <template v-slot:footer>
          <div class="card-stats">
            <div v-for="(stat, index) in item.info" :key="index">
              <div class="item-info__title">{{ stat.title }}</div>
              <div>{{ stat.value }}</div>
            </div>
          </div>
        </template>
      </Card>
    </Slide>
  </Carousel>
</template>

<script>
import Card from '@/components/UI/Card.vue'
import items from '@/seeders/items.json'

import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  components: {
    Card,
    Carousel,
    Slide
  },
  data() {
    return {
      items: items,
      breakpoints: {
        0: {
          itemsToShow: 1
        },
        480: {
          itemsToShow: 2
        },
        800: {
          itemsToShow: 3
        }
      }
    }
  }
}
</script>

<style lang="scss"></style>
