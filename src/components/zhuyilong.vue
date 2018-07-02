<template>
  <div>
    <router-link to="/">{{tip}}</router-link>
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
    <router-link to="/">The End</router-link>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      tip: "居老师的镇魂女孩",
      content: []
    }
  },
  created() {
    axios
      .get(
        "/api/v4/questions/63821120/similar-questions?include=data%5B*%5D.answer_count%2Cauthor%2Cfollower_count&limit=5"
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

<style lang="scss" scoped>
a {
  color: #c7b3e5;
}
</style>