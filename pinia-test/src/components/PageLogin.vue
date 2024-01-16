<template>
  <form class="form" @submit.prevent="handleSubmit">
    <h2 class="page-auth__title">Вход</h2>

    <div class="form-group">
      <label class="form-group__label">Email</label>
      <div class="input-group">
        <input v-model="email" class="form-control" name="email" type="email" placeholder="demo@email" />
      </div>
    </div>

    <div class="form-group">
      <label class="form-group__label">Password</label>
      <div class="input-group">
        <input v-model="password" class="form-control" name="password" type="password" placeholder="password" />
      </div>
    </div>

    <div class="form__buttons">
      <button class="button button_primary">Login</button>
    </div>
  </form>
</template>

<script>
import {mapActions, mapStores} from 'pinia';
import { useAuthStore } from '../stores/useAuthStore.js';

export default {
  name: 'PageLogin',

  data() {
    return {
      email: 'demo@email',
      password: 'password',
    };
  },

  //один из вариантов - это прописать в CompositionAPI
  setup(){
    return {
      authStore: useAuthStore()
    }
  },

  //хелпер для того, чтобы передать свойства стор в computed
  computed: {
    ...mapStores(useAuthStore, ['isAuthenticated'])
  },

  methods: {
    // ...mapActions(useAuthStore, ['login']),

    async handleSubmit() {
      try {
        //для CompositonAPI пользуемся authStore как переменной
        await this.authStore.login(this.email, this.password)
        // await this.login(this.email, this.password);
        // await useAuthStore().login(this.email, this.password);
        // await useAuthStore(this.$pinia).login(this.email, this.password);
      } catch (e) {
        alert(e);
      }
    },
  },
};
</script>
