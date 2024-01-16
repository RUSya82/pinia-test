<template>
  <div class="page-auth">
    <page-login v-if="!isAuthenticated" />
    <div v-else>{{ user }}</div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import PageLogin from './components/PageLogin.vue';
import { useAuthStore } from './stores/useAuthStore.js';
import {computed} from "vue";

//тырим объект с данными из стора
const authStore = useAuthStore();

//чтобы сохранить реактивность, переменные вытаскиваем через computed или toRefs
const user = computed(() => authStore.user);
const isAuthenticated = computed(() => authStore.isAuthenticated);

//второй вариант - воспользоваться хелпером storeToRefs, который сделает переменные реактивными
//но достает только свойства, которые методами не являются
// const { user, isAuthenticated } = storeToRefs(authStore);
</script>

<style>
@import './assets/styles/_fonts.css';
@import './assets/styles/_variables.css';
@import './assets/styles/_common.css';
</style>
