
<template>
	<ion-buttons class="reactions">
		<ion-button @click="likeFn">
			<ion-icon :icon="liked ? heart : heartOutline" :style="liked ? 'color: red;' : null"></ion-icon>
		</ion-button>
		<ion-button>
			<ion-icon :icon="chatbubbleOutline"></ion-icon>
		</ion-button>
		<ion-button>
			<ion-icon :icon="paperPlaneOutline"></ion-icon>
		</ion-button>
	</ion-buttons>
</template>

<script>
import {
  IonButtons,
  IonButton,
  IonIcon
} from "@ionic/vue";

import { 
  heartOutline, 
  paperPlaneOutline, 
  chatbubbleOutline, 
  heart 
} from "ionicons/icons";

export default {
  name: "Explorer",
  components: {
    IonIcon,
    IonButton,
    IonButtons
  },
  setup() {
    return {
      heartOutline,
      paperPlaneOutline,
      chatbubbleOutline,
      heart
    };
  },
  data() {
    return {
      liked: false
    }
  },
  methods: {
    likeFn() {
      this.liked = !this.liked;
    }
  }
};
</script>

<style lang="scss" scoped>
.reactions {
  color: #fff;
  ion-button, button {
    margin: 0;
    padding: 0;
  }
}
</style>
  