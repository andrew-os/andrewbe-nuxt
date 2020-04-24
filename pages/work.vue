<template>
    <div class="container flex-col flex-grow flex-shrink">
        <h1 class="text-4xl text-txtwhite mb-4">Projects</h1>
        <h2 class="text-2xl text-txtwhite mb-2 text-bold">Experience: {{ date.getFullYear() - 2014 }} years</h2>
        <p>I’ve spent the past three years working purely as a Front End Developer, in London.</p>
        <p>This was mostly developing sites for Wordpress with the occasional static site or Single Page App.</p>
        <p>Previous to that I worked as a full stack developer.</p>
        <p>
            I am currently focussing more on getting away from the Wordpress work flow and developing a more engineer way of coding, using the latest technologies.
        </p>
        <br>
        <p>You can view my portfolio <nuxt-link to="/projects">here</nuxt-link></p>

        <div class="accordions mt-5 mb-3">
            <accordionitem title="Languages" :list="[...languages]" />
            <accordionitem title="Basics" :list="[...basics]" />
            <accordionitem title="Testing" :list="[...testing]" />
            <accordionitem title="Work Tooling" :list="[...tooling]" />

        </div>

        <div class="mt-3 mb-5">
            <p>I’m always developing, improving and keen to learn in all walks of life.
                Right now I’m learning: C++, French, Adobe Illustrator, Networking.</p>
            <br>
            <p>I’m a hobbyist White Hat Hacker. I am familiar with Kali Linux on a VM, The burp suite, Tor Browsing as well as basic Ethical hacking techniques such as SQL injection, Brute Forcing and XSS. I am actively pursuing this path, it’s so much fun!</p>
            <br>
            <p>I have a level one in British Sign Language</p>
        </div>
    </div>
</template>

<script>
import accordionitem from '~/components/Accordion-item.vue'
export default{
    components: {
        accordionitem,
    },
    data(){
        return{
            date: new Date(),
            languages: [
                { 
                    name:"HTML5"
                },
                {
                    name: "CSS(Sass,Grid,Inline,in JS)"},
                {
                    name: "BEM Markup"
                },
                {
                    name: "Bootstrap, Bulma, Tailwind CSS"
                },
                {
                    name: "Javascript + Frameworks/libraries(ES5, ES6, React, Vue, jQuery)"
                },
                {
                    name: "SSR(Nuxt.js, Gatsby)"
                },
                {
                    name:  "Node + Express"
                },
                {
                    name: "PHP(mostly with Twig/Twimber)"
                },

            ],
            basics: [
                {
                    name: "Python"
                },
                {
                    name: "MongoDB"
                },
                {
                    name: "GraphQL"
                },

            ],
            testing: [
                {
                    name: "Jest and Mocha at entry level"
                },
            ],
            tooling: [
                {
                    name: "Git"
                },
                {
                    name: "Gulp"
                },
                {
                    name: "Cli"
                },
                {
                    name: "Webpack"
                },
                {
                    name: "Babel"
                },
                {
                    name: "Bitbucket"
                },
                {
                    name: "Github"
                },
                {
                    name: "Visual Studio Code"
                },
                {
                    name: "Photoshop"
                },
                {
                    name: "Zeplin"
                },
                {
                    name: "Figma"
                },
            ],
        }
    }
}
</script>