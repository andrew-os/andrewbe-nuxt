<template>
    <article class="accordion mb-3" :class="accordionClasses">
        <header class="accordion-header flex justify-between px-2 py-3 border-1 border-solid border-primary">
            <h3 class="text-white">{{title}}</h3>

            <button class="accordion-btn mr-3 px-2 text-white focus:outline-none" type="button" @click="toggleAccordion">+</button>
    
        </header>
        <div class="accordion-body border-r-1 border-l-1 border-b-1 border-t-0 border-solid border-primary" >
            <ul class="pl-6 md:pl-12 list-disc">
                <li v-for="item in list" class="text-white">{{ item.name }}</li>
            </ul>
        </div>
    </article>
</template>
<style>
    .accordion-body{
        max-height: 25em;
        overflow: hidden;
        padding: 0.75rem 0.5rem 1.25rem;
        transition: 0.2s ease-in all;
    }
    .is-closed .accordion-body{
        max-height: 0;
        padding: 0;
    }
    .accordion-btn{
        transform: rotate(-45deg);
        transition: 0.3s ease-in transform;
    }
    .is-closed .accordion-btn{
        transform: rotate(0deg);
    }
</style>
<script>
export default{
    props: ['title', 'list'],
    data(){
        return{
            isOpen: false
        }
    },
    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen
        }
    },
    computed: {
        accordionClasses(){
            return{
                'is-closed': !this.isOpen,
            }
        }
    }
}
</script>