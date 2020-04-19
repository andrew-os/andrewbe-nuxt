<template>
  <div class="container flex-col flex-grow flex-shrink">
    <!-- <div>
      <logo />
    </div> -->
    <h1 class="text-4xl text-txtwhite">Hello :)</h1>
    <p class="text-txtwhite">My name is Andrew</p>
    <p class="text-txtwhite">I’m a web developer of {{date.getFullYear() - 2014 }} years </p>
    <p class="text-txtwhite">I like to code, hack and adventure life away</p>
      <div>
        <p class="text-txtwhite">
          Current location: <span class="border-b-3 border-primary">Hawea, NZ</span>
        </p>
      </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'



export default {
  components: {
    // Logo,
  },
  data(){
    return{
      date: new Date()
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: left;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
