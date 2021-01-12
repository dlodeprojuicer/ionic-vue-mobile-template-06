<template>
  <ion-slides>
    <ion-slide v-for="(item, index) in data" :key="index">
      <ion-card>
        <img :src="item.image" width="100%" />
        <ion-card-header>
          <ion-card-title>{{ item.name }} {{ item.lastname }}</ion-card-title>
        </ion-card-header>
      </ion-card>
    </ion-slide>
  </ion-slides>
</template>

<script>
import { IonSlides, IonSlide, IonCard, IonCardHeader, IonCardTitle } from "@ionic/vue";

export default {
  name: "people",
  components: { IonSlides, IonSlide, IonCard, IonCardHeader, IonCardTitle },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
ion-slide {
  width: 85px !important;
}

ion-card {
  padding: 0;
  margin: 0;
}

img {
  border-radius: 50px;
  border: 3px rgb(207, 50, 50) solid;
  height: 70px;
  width: 70px;
}

ion-card-title {
  font-size: 13px !important;
  text-align: left;
  color: #fff;
}
</style>
