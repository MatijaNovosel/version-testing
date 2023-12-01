<template>
  <hello-world msg="Version testing" />
  <div>Current version is: {{ version }}</div>
  <div>Is release mode? {{ isPackaged ? "Yes" : "No" }}</div>
  <div class="buttons">
    <button @click="checkForUpdate">Check for update</button>
    <button @click="update">Update</button>
  </div>
</template>

<script setup lang="ts">
import { ipcRenderer } from "electron";
import { ref } from "vue";
import { version } from "../package.json";

import HelloWorld from "./components/HelloWorld.vue";

const isPackaged = ref(false);

ipcRenderer.on("env", (_event, release) => {
  isPackaged.value = release;
});

const checkForUpdate = () => {
  //
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
