<template>
    <Nav />

    <h1>{{ title }}</h1>
    <h2>{{ contant }}</h2>
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
            id: this.$route.query,
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
            await axios.get('/api/v1/posts/view?id='+this.id).then((res)=> {
                this.title = res.data.title
                this.sub = res.data.sub
                this.contant = res.data.contant
                this.uploader = res.data.uploader
                this.uptime = res.data.uptime
            })
        }
    }
}

</script>

<style>



</style>