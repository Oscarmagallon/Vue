let PeliculasDet = {
    template:`
        <div v-if="pelicula">
            <h1>{{ pelicula.title}} (ref: {{ id }})</h1>
            <img :src="pelicula.backdrop_path | fondoURL">
            <img :src="pelicula.poster_path | coverURL">
            <p v-text="pelicula.overview"></p>
            <span v-for="(pelicula, index) in similar" :key="index">
                <   pelicula
                    :id="pelicula.id"
                    :title="pelicula.title"
                    :synopsis="pelicula.overview"
                    :cover="pelicula.poster_path"
                    :like="pelicula.like"
                >
                </pelicula>
            </span>
        </div>
    `,


    components: {
        Pelicula
    },


    props: {
        id: {
            type: String,
            required: true
        },
    },

    data(){
        return {
            pelicula: null,
            similar: []
        }
    },


    methods: {
        getPelicula(){
            fetch(`${this.apiBaseURL}movie/${this.id}${this.apiConfig}`)
                .then(res => res.json())
                .then(data => {
//                    console.log(data)
                    this.pelicula = data
                    this.getSimilar()
            })
        },

        getSimilar(){
            fetch(`${this.apiBaseURL}movie/${this.id}/similar${this.apiConfig}`)
                .then(res => res.json())
                .then(data => {
//                    console.log(data.results)
                    this.similar = data.results
            })
        }
    },


    mounted() {
//        console.log('id: '+this.id)
        this.getPelicula()
    },

}