
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Instagram</ion-title>

        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="addCircleOutline"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon :icon="heartOutline"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon :icon="paperPlaneOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Explorer</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card v-for="(item, index) in posts" :key="index">
        <div class="post-author">
          <ion-icon :icon="personCircleOutline"></ion-icon> 
          <span>{{ item.name }}</span>
        </div>

        <img
          class="my-card-image"
          :src="`places/${item.image}`"
          :alt="item.name"
        />

        <ion-buttons class="reactions">
          <ion-button>
            <ion-icon :icon="heartOutline"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon :icon="chatbubbleOutline"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon :icon="paperPlaneOutline"></ion-icon>
          </ion-button>
        </ion-buttons>

        <ion-card-header>
          <ion-card-subtitle class="likes" v-if="item.likes > 0">{{ item.likes }} likes</ion-card-subtitle>
          <div class="author" v-if="item.description">
            {{ item.name }} <span class="description">{{ item.description }}</span>
          </div>
        </ion-card-header>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle
} from "@ionic/vue";

import { personCircleOutline, search, filterOutline, closeOutline, addCircleOutline, heartOutline, paperPlaneOutline, chatbubbleOutline } from "ionicons/icons";

export default {
  name: "Explorer",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonButton,
    IonButtons,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle
  },
  setup() {
    return {
      search,
      filterOutline,
      closeOutline,
      addCircleOutline,
      heartOutline,
      paperPlaneOutline,
      personCircleOutline,
      chatbubbleOutline
    };
  },
  computed: {
    posts() {
      console.log(this.$store.getters.posts)
      return this.$store.getters.posts;
    }
  }
};
</script>

<style lang="scss" scoped>
// ion-header {
//   padding: 0;
//   margin: 0;
// }
ion-toolbar {
  --background: #000;
  padding: 0;
}

.reactions {
  color: #fff;
  ion-button, button {
    margin: 0;
    padding: 0;
  }
}

.post-author {
  margin: 10px;
  color: #ffffff;
  font-weight: 500;
  text-transform: lowercase;
  ion-icon {
    margin-bottom: -10px;
    font-size: 30px;
  }
  span {
    font-size: 16px;
    margin: 0 0 0 5px;
  }
}
.my-card-image {
  width: 100%;
}

ion-card {
  --background: none;
  margin: 0;
}

ion-card-header {
  padding: 10px;
}

ion-card-subtitle.likes {
  text-transform: lowercase;
  color: #fff;
  font-size: 15px;
}

.author {
  text-transform: lowercase;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  span {
    font-weight: initial;
    text-transform: initial;
  }
}
</style>
  