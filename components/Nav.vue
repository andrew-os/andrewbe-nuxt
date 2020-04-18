<template >
    <nav class="flex flex-row flex-row-reverse">
       <nuxt-link v-for="route in $router.options.routes" :key="route.path" :to="route.path"
       class="text-primary pr-4" >
           {{ route.name }}
       </nuxt-link>

    </nav>
</template>

<script>

export default{
    mounted(){
        console.log(this.$router.options.routes)
    }
}

</script>
