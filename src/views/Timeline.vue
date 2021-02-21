
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <img
          class="logo"
          src="/assets/images/logo.png"
          alt="Instagram"
          width="130"
        />

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
      <!-- <Stories :data="stories" /> -->

      <ion-card v-for="(item, index) in posts" :key="index">
        <div class="post-author">
          <ion-icon :icon="personCircleOutline"></ion-icon> 
          <span>{{ item.name }}</span>
        </div>

        <img
          class="card-image"
          :src="item.image"
          :alt="item.name"
          @click="likeDoubleClick()"
        />

        <Reactions :likePost="likePost" @likeClick="likeClick" />

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
import Reactions from "./../components/Reactions";
// import Stories from "./../components/Stories";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle
} from "@ionic/vue";

import { 
  personCircleOutline, 
  search, 
  filterOutline, 
  closeOutline, 
  addCircleOutline, 
  heartOutline, 
  paperPlaneOutline, 
  chatbubbleOutline, 
  heart 
} from "ionicons/icons";

export default {
  name: "Explorer",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonButton,
    IonButtons,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    Reactions,
    // Stories
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
      chatbubbleOutline,
      heart
    };
  },
  data() {
    return {
      likePost: false,
      click: undefined,
      clickType: 'Click or Doubleclick ME'
    }
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
    stories() {
      return this.$store.getters.stories;
    }
  },
  methods: {
    likeDoubleClick() {
      return new Promise ((resolve) => {
        if (this.click) {
          clearTimeout(this.click)
          resolve('Detected DoubleClick');
          this.likePost = !this.likePost;
          this.click = undefined;
          return;
        }

        this.click = setTimeout(() => {
         this.click = undefined;
         resolve('Detected SingleClick')
        }, 400)
      })
    },
    likeClick() {
      this.likePost = !this.likePost;
    }
  }
};
</script>

<style lang="scss" scoped>
ion-toolbar {
  --background: #000;
  color: #ffffff;
  padding: 0;
}

.logo {
  padding: 10px 0 0 10px;
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
.card-image {
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
  