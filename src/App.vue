<template>
  <hello-world msg="Version testing" />
  <div>Current version is: 0.0.1</div>
  <div class="buttons">
    <button>Check for update</button>
    <button>Update</button>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
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
