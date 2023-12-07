<template>
  <hello-world msg="Version testing" />
  <div>Current version is: {{ version }}</div>
  <div>Is release mode? {{ isRelease ? "Yes" : "No" }}</div>
  <div class="buttons">
    <button @click="checkForUpdate">Check for update</button>
    <button @click="update">Update</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";

const isRelease = ref(false);
const version = ref("");

window.electronAPI.onVersionCheck((val: string) => {
  version.value = val;
});

window.electronAPI.onReleaseCheck((val: boolean) => {
  isRelease.value = val;
});

const checkForUpdate = async () => {
  const { data: newestVersion } = await axios.get(
    "https://www.matijanovosel.com/api/version"
  );
};

const update = () => {
  //
};
</script>

<style>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons {
  margin-top: 15px;
  gap: 10px;
  display: flex;
  justify-content: center;
}
</style>
