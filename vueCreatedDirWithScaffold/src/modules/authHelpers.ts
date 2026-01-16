
import {defaultAdminAuthBody, epPostHereForToken} from "@/modules/configConsts.ts";

export async function getDefaultAdminAuthAnswer() {
     //return Promise.resolve(epPostHereForToken);
     return fetch(epPostHereForToken, {
          method: 'POST',
          mode: 'cors',
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify(defaultAdminAuthBody),
     })
         .then((res) => res.json())
         .then((json) => {
              return json;
         })
         .catch((err) => {
              return {accessToken:'', userId:0}
         })


}