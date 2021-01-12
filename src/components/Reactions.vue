
<template>
	<ion-buttons class="reactions">
		<ion-button @click="likeFn">
			<ion-icon :icon="likePost ? heart : heartOutline" :style="likePost ? 'color: red;' : null"></ion-icon>
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
	name: "Reactions",
  props: {
    likePost: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
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
  methods: {
    likeFn() {
			this.$emit("likeClick", !this.likePost);
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
  