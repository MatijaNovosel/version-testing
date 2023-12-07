<template>
  <hello-world msg="Version testing" />
  <div>Current version is: {{ version }}</div>
  <div>Newest version is: {{ newestVersion }}</div>
  <div>Is release mode? {{ isRelease ? "Yes" : "No" }}</div>
  <div class="buttons">
    <button @click="update">Update</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import HelloWorld from "./components/HelloWorld.vue";

const isRelease = ref(false);
const version = ref("");
const newestVersion = ref("");

window.electronAPI.onVersionCheck((val: string[]) => {
  const [currV, newV] = val;
  version.value = currV;
  newestVersion.value = newV;
});

window.electronAPI.onReleaseCheck((val: boolean) => {
  isRelease.value = val;
});

const update = () => {
  window.electronAPI.update();
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
