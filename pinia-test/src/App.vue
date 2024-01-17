<template>
  <ListView v-model:items="list">

  </ListView>

  <ListView v-model:items="arr" v-slot="{item, index, remove}">
<!--    короткий синтаксис-->
          <button @click="remove">
            {{item}}
          </button>
<!--    <template #default="{item, index, remove}">-->
<!--      <button @click="remove">-->
<!--        {{item}}-->
<!--      </button>-->
<!--    </template>-->

  </ListView>
</template>
<script >
import ListView from './components/ListView.vue';

export default {
  components: {
    ListView,
  },

  data() {
    return {
      list: [
        {
          id: 1,
          name: 'Alice',
        },
        {
          id: 2,
          name: 'Bob',
        },
      ],
      arr: [1,2,3,4,5]
    };
  },
  //
  // render() {
  //   const renderItem = ({ item, index, remove }) => (
  //       <button type="button" onClick={() => remove()}>
  //         {`${index}: ${item.name}`}
  //       </button>
  //   );
  //   return <ListView v-model={[this.list, 'items']}  >
  //     {{
  //       renderItem: ({ item, index, remove }) => (
  //     <button type="button" onClick={() => remove()}>
  //       {`${index}: ${item.name}`}
  //     </button>
  //     )
  //     }}
  //   </ListView>;
  // },
};
</script>
