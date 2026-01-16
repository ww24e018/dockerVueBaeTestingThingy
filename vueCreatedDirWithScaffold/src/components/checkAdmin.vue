<script setup lang="ts">
import {useAuthTokenStore} from "@/stores/authtokens.ts";
import {computed} from "vue";

const authTokenStore = useAuthTokenStore();
function copyToClipboard(str: string) {
  //Navigator.clipboard.writeText(str);
  console.log(str)
}
function copyAdminTokenToClipboard() {
  //console.log('foo')
  copyToClipboard(authTokenStore.adminToken)
}
</script>

<template>
  <div>
    <h1>Auth-Checks</h1>
    <div><button v-on:click="authTokenStore.getAdminToken()">getAdminToken</button>
      admin token:
      <span class="tokenSpan" v-on:click="copyAdminTokenToClipboard">{{authTokenStore.adminToken}}</span>
      admin id: {{authTokenStore.adminUserId}}
    </div>
  </div>
</template>

<style scoped>
.tokenSpan {
  display:  inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  border: 1px solid transparent;
}
.tokenSpan:hover {
  border: 1px dashed orange;
}
</style>