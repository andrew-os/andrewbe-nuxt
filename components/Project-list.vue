<template>
    <div class="pl-6">
        <li v-for="project in projects" :key="project.title">
           <a :href="project.url" target="_blank">
               {{project.title}}
            </a> 
        </li>

    </div>

</template>
<script>
export default{
    data() {
            return{
                projects:[
                    {
                        title: 'Punchdrunk',
                        url: 'https://punchdrunk.org.uk/',
                    },
                    {
                        title: 'Edge NYC',
                        url: 'https://edgenyc.com/',
                    },
                    {
                        title: 'Lumiere',
                        url: 'https://www.lumiere-festival.com/',
                    },
                    {
                        title: 'New York Perrenial Garden',
                        url: 'https://pg.nybg.org/#/',
                    },
                    {
                        title: 'Fairfield Halls',
                        url: 'https://www.fairfield.co.uk/',
                    },
                    {
                        title: 'Harry Potter - uk/us/de/au',
                        url: 'https://www.harrypottertheplay.com/',
                    },
                    {
                        title: 'The View from the Shard',
                        url: 'https://www.theviewfromtheshard.com/',
                    },
                    {
                        title: 'Guildhall School of Music',
                        url: 'https://www.gsmd.ac.uk/'
                    },
                    {
                        title: 'Skatepal',
                        url: 'http://www.skatepal.co.uk/',
                    },
                    {
                        title: 'Eightwire',
                        url: 'https://eightwire.uk/services/websites/',
                    },
                    {
                        title: 'Lockley Concrete',
                        url: 'https://lockleyconcrete.co.uk/',
                    },
                    {
                        title: 'Coach Approach',
                        url: 'https://thecoachapproach.co.uk/',
                    },
                ]
            }
           
        }
}
</script>


        

