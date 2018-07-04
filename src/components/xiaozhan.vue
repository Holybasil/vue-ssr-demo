<template>
  <div>
    <router-link to="/long">{{tip}}</router-link>
    <ul>
      <li v-for="(item, index) in content" :key='index'>{{item.title}}</li>
    </ul>
    <ul>
      <li v-for="(item, index) in content" :key='index'>{{item.title}}</li>
    </ul>
    <ul>
      <li v-for="(item, index) in content" :key='index'>{{item.title}}</li>
    </ul>
    <ul>
      <li v-for="(item, index) in content" :key='index'>{{item.title}}</li>
    </ul>

    <ul>
      <li v-for="(item, index) in content" :key='index'>{{item.title}}</li>
    </ul>
    <ul>
      <li v-for="(item, index) in content" :key='index'>{{item.title}}</li>
    </ul>
    <ul>
      <li v-for="(item, index) in content" :key='index'>{{item.title}}</li>
    </ul>
    <ul>
      <li v-for="(item, index) in content" :key='index'>{{item.title}}</li>
    </ul>
    <ul>
      <li v-for="(item, index) in content" :key='index'>{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
// import { getXiaozhan } from "@/api"
import axios from "axios"
export default {
  name: "xiaozhan",
  data() {
    return {
      tip: "有钱哥哥",
      content: []
    }
  },
  // asyncData({ store, route }) {
  //   return store.dispatch("getXiaozhanItems")
  // },
  // computed: {
  //   content() {
  //     return this.$store.state.xiaozhanItems
  //   }
  // }
  created() {
    axios
      .get(
        "/api/v4/questions/273612872/similar-questions?include=data%5B*%5D.answer_count%2Cauthor%2Cfollower_count&limit=5"
      )
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          this.content = res.data.data
        }
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
a {
  color: #f4606c;
}
</style>
