<template>
    <div>
        <q-toolbar>
            <q-btn v-if="$q.platform.is.mobile" flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" style="color: white;" />
            
            <q-toolbar-title class="q-pa-md row item-center">
                <img src="../assets/logo.svg" />
            </q-toolbar-title>
            <q-btn flat dense round class="q-ml-md" :icon="matAccountCircle" aria-label="Menu" style="color: white;">
                <q-menu>
                    <q-list style="min-width: 100px;max-height:89px">
                        <!-- <q-item clickable v-close-popup>
                                    <q-item-section>Login</q-item-section>
                                  </q-item> -->
                        <LoginPage2 />
                        <div class="q-pa-xs">
                            <RegisterPage />
                        </div>
            
            
                        <q-item clickable v-close-popup>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
        </q-toolbar>
    </div>
</template>
<script>
import { matAccountCircle } from "@quasar/extras/material-icons";

export default {
    created() {
        this.matAccountCircle = matAccountCircle;
    }
}
</script>