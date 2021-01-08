<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar :translucent="true" slot="bottom">
        <ion-tab-button tab="timeline" :selected="true" href="/timeline">
          <ion-icon :icon="homeOutline" />
        </ion-tab-button>

        <ion-tab-button tab="" href="">
          <ion-icon :icon="search" />
        </ion-tab-button>

        <ion-tab-button tab="" href="">
          <ion-icon :icon="playCircleOutline" />
        </ion-tab-button>

        <ion-tab-button tab="" href="">
          <ion-icon :icon="cartOutline" />
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/user/profile">
          <ion-icon :icon="personCircleOutline"></ion-icon>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import {
  homeOutline, 
  cartOutline, 
  playCircleOutline,
  search,
  personCircleOutline
} from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      homeOutline, 
      cartOutline, 
      playCircleOutline,
      search,
      personCircleOutline
    };
  },
};
</script>

<style lang="scss" scoped>
ion-tab-bar {
  --background: none;
  padding: 0;
}
</style>