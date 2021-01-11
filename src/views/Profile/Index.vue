
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>dlodeprojuicer</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row class="profile-info-one">
          <ion-col>
            <div class="avatar">
              <img src="https://avatars1.githubusercontent.com/u/6591344?s=460&u=043e4ecae76df7e50ff1ae5b223fa6d182ec76f1&v=4" />
            </div>
          </ion-col>
          <ion-col>
            <span>300</span> <br/>
            Posts
          </ion-col>
          <ion-col>
            <span>361</span> <br/> 
            Followers
          </ion-col>
          <ion-col>
            <span>200</span> <br/>
            Following
          </ion-col>
        </ion-row>
      </ion-grid>

      <div class="profile-info-two ion-padding">
        <h3>D'lo DeProjuicer</h3>
        <p>Frontend Developer - Follow me on Twitter @dlodeprojuicer</p>
      </div>

      <ion-button class="profile-edit-btn">Edit Profile</ion-button>

      <ion-grid class="tabs">
        <ion-row>
          <ion-col @click="tabSwitch(1)">
            <ion-icon :icon="gridOutline"></ion-icon>
          </ion-col>
          <ion-col @click="tabSwitch(2)">
            <ion-icon :icon="personCircleOutline"></ion-icon>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid class="timeline" v-if="toggleTab === 1">
        <ion-row v-for="(item, index) in 5" :key="index">
          <ion-col v-for="(itm, idx) in 3" :key="idx"><div></div></ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid class="timeline" v-if="toggleTab === 2">
        <ion-row v-for="(item, index) in 2" :key="index">
          <ion-col v-for="(itm, idx) in 3" :key="idx"><div></div></ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonContent,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/vue";
import { cogOutline, personCircle, calendar, gridOutline, personCircleOutline } from "ionicons/icons";

export default {
  name: "Profile",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    IonContent,
    IonGrid,
    IonRow,
    IonCol
  },
  data() {
    return {
      toggleTab: 1
    }
  },
  setup() {
    return {
      cogOutline,
      personCircle,
      calendar,
      gridOutline,
      personCircleOutline
    };
  },
  methods: {
    tabSwitch(int) {
      this.toggleTab = int;
    }
  }
};
</script>

<style lang="scss" scoped>
ion-toolbar, .profile-info-one {
  color: #ffffff;
}
.avatar img {
  width: 80px;
  height: 80px;
  border-radius: 50px;
}

.profile-info-one {
  text-align: center;
  margin: 20px 0 -10px 0;
  ion-col > span {
    font-weight: bold;
  }
}

.profile-info-two {
  h3 {
    color: #ffffff;
    margin: 0;
  }
  p {
    color: #ffffff;
    margin: 0;
  }
}

ion-grid.timeline > ion-row > ion-col {
  margin: -2px;
    div {
      width: 100%;
      height: 120px;
      background-color: #eee;
    }
}

.profile-edit-btn {
  width: 97%;
  margin: 0 0 -10px 6px;
  --background: transparent;
  border: 1px solid grey;
  text-transform: initial;
}

.tabs {
  margin: 20px 0 -10px 0;
  text-align: center;
  font-size: 25px;
  >ion-row > ion-col > ion-icon {
    color: #ffffff;
  }
}
</style>
