<template>
  <div class="card__wrapper" v-for="(item, index) in items" :key="index">
    <Card :name="`${item.level} level`" :title="item.title" :imgUrl="item.img">
      {{ item.descr }}
    </Card>
  </div>
</template>

<script>
import Card from '@/components/UI/Card.vue'
export default {
  components: {
    Card
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Archer',
          descr: 'Archer Archer',
          img: require('@/assets/images/archer.png'),
          level: 10
        },
        {
          id: 2,
          title: 'Barbarian',
          descr: 'Barbarian Barbarian',
          img: require('@/assets/images/barbarian.png'),
          level: 4
        },
        {
          id: 3,
          title: 'Giant',
          descr: 'Giant Giant',
          img: require('@/assets/images/giant.png'),
          level: 6
        },
        {
          id: 4,
          title: 'Goblin',
          descr: 'Goblin Goblin',
          img: require('@/assets/images/goblin.png'),
          level: 9
        },
        {
          id: 5,
          title: 'Wizard',
          descr: 'Wizard Wizard',
          img: require('@/assets/images/wizard.png'),
          level: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
