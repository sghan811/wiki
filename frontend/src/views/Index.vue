<template>
  <Nav />

  <!-- <div class="posts">
    <div class="post">
      <div class="texts">
        <span class="timestamp">{{ mainPost.timestamp }}</span>
        <h1>{{ mainPost.title }}</h1>
        <p>{{ mainPost.description }}</p>
      </div>
      <img :src="mainPost.imageUrl">
    </div>
    <div class="popular-posts">
      <h1>Popular Posts</h1>
      <div class="posts-container">
        <div class="post" v-for="post in popularPosts">
          <div class="texts">
            <span class="timestamp">{{ post.timestamp }}</span>
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
            <a>더 알아보기 ></a>
          </div>
          <img :src="post.imageUrl">
        </div>
      </div>
    </div>
  </div> -->

  <div class="posts">
    <Card v-for="item in posts" :timestamp="item.uptime" :title=item.title :sub=item.sub :img="item.img" />
  </div>

</template>

<script>
import Nav from '../components/Nav.vue'
import Card from '../components/Card.vue'
import axios from 'axios'
export default {
  name: 'Index',
  components: {
    Nav,
    Card
  },  
  data() {
    return {
      requestData: {},
      posts: [
      ],
      id: this.$route.query.id,
      title: this.$route.query.title
    }
  },
  async mounted() {
    this.posts = (await axios.get('/api/v1/post/')).data;
    console.log((await axios.get('/api/v1/post/')).data)
    this.load()
  },
  methods: {
    async load(){
      this.requestData = {
        id: this.id,
        title: this.title
      }
      this.posts = (await axios.get('/api/v1/post/')).data.posts;
    }
  }
}
</script>

<style>
.posts {
  padding: 80px 30%;
}

.posts > div {
  margin-bottom: 50px;
  padding-top: 50px;
  border-top: 1px #909090 solid;
}

.posts > div h1 {
  margin-top: 0;
}

.posts > div:first-child {
  border-top: none;
  padding-top: 0;
}

.post {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.post img {
  margin-left: 20px;
  border-radius: 30px;
  width: 250px;
}

.timestamp {
  font-size: 12px;
}

.posts a {
  text-decoration: none;
 color: #909090;
}

.post h2 {
  margin-top: 0;
}

.post {
  margin-bottom: 30px;
}

.post:last-child {
  margin-bottom: 0;
}
</style>