<template>
    <h1>{{ title }}</h1>
</template>

<script>

import axios from 'axios';
import Nav from '../components/Nav.vue';

export default {
    name: 'Post',
    components: {
        Nav,
    },
    data() {
        return {
            id: this.$route.query.id,
            title: '',
            sub: '',
            contant: '',
            uploader: '',
            uptime: ''
        };
    },
    mounted() {
        this.pView()
    },
    methods: {
        async pView() {
            console.log(this.id)
            await axios.get('http://localhost:3000/api/v1/post/view?id='+this.id).then((res)=> {
                console.log(res.data.posts[0])
                this.title = res.data.posts[0].title
                this.sub = res.data.posts[0].sub
                this.contant = res.data.posts[0].contant
                this.uploader = res.data.posts[0].uploader
                this.uptime = res.data.posts[0].uptime
                console.log(res.data.posts[0].title)
            })
        }   
    }
}

</script>

<style>



</style>