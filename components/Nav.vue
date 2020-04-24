<template >
    <div>
        <div class="ham-w relative w-full">
            <button class="hamburger" :class="mobileNavClasses" @click="toggleMobileNav" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>

        <nav class="flex flex-col flex-col-reverse md:flex-row md:flex-row-reverse ml-8 md:ml-0 py-4 capitalize">

            <nuxt-link v-for="route in $router.options.routes" :key="route.path" :to="route.path"
            class="text-primary pr-4 text-lg" >
                {{ route.name }}
            </nuxt-link>

        </nav>
    </div>
</template>

<style>
    .ham-w{
        height: 50px;
        @media screen and (min-width: 768px) {
            display: none;   
        }
    }
    .hamburger{
        display: inline-block;
        overflow: visible;
        margin: 0;
        padding: 15px;
        cursor: pointer;
        transition-timing-function: linear;
        transition-duration: .15s;
        transition-property: opacity,filter;
        text-transform: none;
        color: inherit;
        border: 0;
        background-color: transparent;
        position: fixed;
        right: 15px;


    }
    .hamburger-box{
        position: relative;
        display: inline-block;
        width: 48px;
        height: 28px;
        margin-top: 20px;
        margin-left: 15px;
    }
    .hamburger-inner{
        transition-timing-function: cubic-bezier(.68,-.55,.265,1.55);
        transition-duration: .275s;
        display: block;
        margin-top: -2px;
        position: absolute;
        width: 48px;
        height: 4px;
        transition-property: transform;
        border-radius: 0px;
        background-color: #fff;
    }
    .hamburger-inner::before{
        content: '';
        position: absolute;
        width: 48px;
        height: 4px;
        top: 10px;
        left:0;
        border-radius: 0px;
        background-color: #fff;
        transition: opacity .125s ease .275s;
    }
    .hamburger-inner::after{
        content: '';
        position: absolute;
        width: 48px;
        height: 4px;
        border-radius: 0px;
        background-color: #fff;
        bottom: -10px;
        top: 20px;
        left:0;
        transition: transform .275s cubic-bezier(.68,-.55,.265,1.55);
        transition-property: transform;
    }

    /* Active styles */
    .hamburger.is--active .hamburger-inner{
        transition-delay: 75ms;
        transform: translate3d(0,10px,0) rotate(135deg);
        background-color: #fff;
    }
    .hamburger.is--active .hamburger-inner::before{
        transition-delay: 0s;
        opacity: 0;
        background-color: #fff;
    }
    .hamburger.is--active .hamburger-inner::after{
        transition-delay: 75ms;
        transform: translate3d(0,-20px,0) rotate(-270deg);
        background-color: #fff;
    }

</style>

<script>

export default{
    data(){
        return{
            isOpen: false
        }
    },
    methods: {
        toggleMobileNav() {
            this.isOpen = !this.isOpen
        }
    },
    computed: {
        mobileNavClasses(){
            return{
                'is--active': !this.isOpen,
            }
        }
    },
    mounted(){
        console.log(this.$router.options.routes)
    }
}

</script>
