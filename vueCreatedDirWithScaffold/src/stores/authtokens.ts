import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {getDefaultAdminAuthTokenOrEmptyString} from "@/modules/authHelpers.ts";

export const useAuthTokenStore = defineStore('auth_token_store', (state) => {
    const adminToken = ref('');
    const normalUserToken = ref('')

    async function getAdminToken() {
        adminToken.value = await getDefaultAdminAuthTokenOrEmptyString();
    }

    return {adminToken, normalUserToken, getAdminToken}

})