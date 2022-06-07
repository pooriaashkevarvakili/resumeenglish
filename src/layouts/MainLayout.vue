<template>
  <div>
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-fab flat @click="drawerRight = !drawerRight" round dense icon="menu" />
          <q-toolbar-title>Resume</q-toolbar-title>

        </q-toolbar>
      </q-header>
      <q-drawer class="bg-primary text-white" v-model="drawerRight" bordered :width="250" :breakpoint="500">
        <q-list>
          <q-item-label header>
            <div class="flex items-center">
              <div>
                <img src="pooriavakili.jpg" style="width:60px;height:60px;border-radius:50%" alt="">
              </div>
              <div>
                <div class="q-ml-xs text-white ">pooriaashkevarvakili</div>
                <div class="q-ml-xs q-mt-xs ">

                  <span class="text-white">
                    FrontEnd-developer
                  </span>

                </div>
                <div class="q-ml-xs q-mt-xs ">

                  <span class="text-white">
                    tel +9809376720694
                  </span>

                </div>
              </div>
            </div>
          </q-item-label>

          <q-item to="/about" active-class="q-item-no-link-highlighting">

            <q-item-label header class="text-white  text-subtitle2">
              about
            </q-item-label>
          </q-item>
          <q-item to="/skills" active-class="q-item-no-link-highlighting">

            <q-item-label header class="text-white  text-subtitle2">
              skills
            </q-item-label>
          </q-item>
          <q-item to="/experience" active-class="q-item-no-link-highlighting">

            <q-item-label header class="text-white  text-subtitle2">
              Experience
            </q-item-label>
          </q-item>
          <q-item to="/portfolio" active-class="q-item-no-link-highlighting">

            <q-item-label header class="text-white  text-subtitle2">
              Portfolio
            </q-item-label>
          </q-item>
          <q-item to="/socialNetwork" active-class="q-item-no-link-highlighting">

            <q-item-label header class="text-white  text-subtitle2">
              SocialNetwork
            </q-item-label>
          </q-item>
          <q-item to="/article" active-class="q-item-no-link-highlighting">

            <q-item-label header class="text-white  text-subtitle2">
              Articles
            </q-item-label>
          </q-item>
          <q-item to="/education" active-class="q-item-no-link-highlighting">

            <q-item-label header class="text-white  text-subtitle2">
              Education
            </q-item-label>
          </q-item>
        </q-list>
      </q-drawer>
      <q-page-container>
        <q-page>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const drawerRight = ref(false)
</script>
