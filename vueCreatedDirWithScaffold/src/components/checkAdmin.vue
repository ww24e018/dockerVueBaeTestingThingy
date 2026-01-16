<script setup lang="ts">
import {useAuthTokenStore} from "@/stores/authtokens.ts";
import {computed} from "vue";

const authTokenStore = useAuthTokenStore();

</script>

<template>
  <div>
    <h1>Auth-Checks</h1>
    <div><button v-on:click="authTokenStore.getAdminToken()">getAdminToken</button> admin token: {{authTokenStore.adminToken}}</div>
  </div>
</template>

<style scoped>

</style>