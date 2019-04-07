<template>
    <div>
    <h1>Count - {{ count }}</h1>
    <p @click="add">+</p>
    <p  @click="sub">-</p>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component Counter mounted.')
        },
        computed: {
            count() {
            console.log(this.$store)
              return this.$store.state.Counter.count;
            }
        },
        methods : {
            add : function () {
                this.$store.commit('increment');
            },
            sub : function () {
                this.$store.commit('decrement');
            },
        }
        
    }
</script>