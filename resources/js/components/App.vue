<template>
    <counter></counter>
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