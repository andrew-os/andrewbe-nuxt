<template >
    <div>

        <!--desktop nav -->
        <nav class="hidden md:flex md:flex-row md:flex-row-reverse md:ml-0 py-4 capitalize ">

            <nuxt-link v-for="route in $router.options.routes" :key="route.path" :to="route.path"
            class="text-primary mr-4 text-lg" >
                {{ route.name }}
            </nuxt-link>

        </nav>
        <!--mobile nav -->

            <div class="ham-w relative w-full">
                <button class="hamburger md:hidden focus:0" :class="mobileNavClasses" @click="toggleMobileNav" type="button">
                    <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
                </button>
            </div>

        <!--mobile nav list -->
        <div class="nav-sidebar bg-primary md:hidden" :class="mobileNavClasses">
            <nav v-show="isOpen" class="flex flex-col flex-col-reverse ml-8  py-4 capitalize md:hidden">

                <nuxt-link v-for="route in $router.options.routes" :key="route.path" :to="route.path"
                class="text-txtwhite pr-4 text-lg" >
                    {{ route.name }}
                </nuxt-link>

            </nav>
        </div>
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
    .hamburger:focus{
        outline: 0;
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

    /*Sudebar */
    .nav-sidebar{
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
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
    .nav-sidebar.is--active{
        width: 75%;
        box-shadow: 1px 0 5px 2px rgba(197,197,197,.38);
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
                'is--active': this.isOpen,
            }
        }
    },
    mounted(){
        console.log(this.$router.options.routes)
    }
}

</script>
