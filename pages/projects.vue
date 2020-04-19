<template>
    <div class="container flex-col flex-grow flex-shrink">
        <h1 class="text-4xl text-txtwhite">Projects</h1>

        <p>Having worked as a Frontend developer for numerous years I have worked on 100's of websites.</p>
        <p class="text-txtwhite text-1xl mb-4">These are websites I’ve built and worked on recently that showcase different designs, features and coding methods:</p>
        
        <projectlist />
        <br>
        <br>
        <p>This site is a Vue/Nuxt clone of my personal <a href="https://andrewbe.me" target="_blank">site</a>(built with React/Gatsby)</p>
        <p>I've always found learning on the job a great way of wrapping my head around concepts.</p>
       

    </div>
</template>

<script>
import projectlist from '~/components/project-list.vue'

export default {
  components: {
    projectlist,
  }
}

</script>
