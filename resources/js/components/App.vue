<template>
    <div>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'products' }">Products</router-link>
        <router-view></router-view>
    </div>

</template>

<script>

    import Counter from './Counter.vue'
    
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data: () => ({
          
        }),
        components : {
            Counter
        }
    }
    
</script>