<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">Counter with Vuex</h1>
      <h2 class="subtitle">{{$store.state.counter.count}}</h2>
      <div class="links">
        <Button @click="$store.commit('increment')">Increment</Button>
        <Button @click="$store.commit('decrement')" type="danger">Decrement</Button>
      </div>
      <div class="links">
        <Button @click="$store.commit('getArticle')">Fetch Article</Button>
      </div>

      <a-list :grid="{ gutter: 16, column: 3 }" :dataSource="$store.state.article.newsArticle">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-card hoverable v-on:click="openNews(item.url)">
            <img v-bind:alt="item.title" v-bind:src="item.urlToImage" slot="cover" />

            <a-card-meta v-bind:title="item.title">
              <template slot="description">{{item.url}}</template>
            </a-card-meta>
          </a-card>
        </a-list-item>
        <a-spin v-if="$store.state.article.isLoading" class="demo-loading" />
      </a-list>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { Button, List, Card } from "ant-design-vue";
import { mapMutations } from "vuex";

function cekStore() {
  console.log(this.$store);
}

function openNews(url) {
  window.open(url);
}

const data = [
  {
    title: "Title 1"
  },
  {
    title: "Title 2"
  },
  {
    title: "Title 3"
  },
  {
    title: "Title 4"
  }
];

export default {
  data() {
    return {
      data
    };
  },
  components: {
    Logo,
    Button,
    List,
    Card
  },
  methods: {
    openNews
  },
  computed: {
    // movieList() {
    //   return this.$store.state.newsArticle
    // },
    increment() {
      return this.$store.commit("increment");
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.demo-loading {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
</style>
