import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {getDefaultAdminAuthAnswer} from "@/modules/authHelpers.ts";

export const useAuthTokenStore = defineStore('auth_token_store', (state) => {
    const adminToken = ref('');
    const adminUserId = ref(0);
    const normalUserToken = ref('')

    async function getAdminToken() {
        let authResponse = await getDefaultAdminAuthAnswer();
        adminUserId.value = authResponse.userId;
        adminToken.value = authResponse.accessToken;
    }


    return {adminToken, adminUserId, normalUserToken, getAdminToken}

})