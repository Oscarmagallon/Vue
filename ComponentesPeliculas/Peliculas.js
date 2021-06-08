const APIKEY = '7fa41e64945fa2fe482ea00acdb454be'
const BASEURL = 'https://api.themoviedb.org/3/'
let Peliculas = {
    template: `
        <div>       
            <h2 v-text="titulo"></h2>
            <div v-for="(pelicula,index) in peliculas" :key="index"> 

                <pelicula 
                    :id = "pelicula.id"
                    :title="pelicula.title"
                    :cover="'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+pelicula.poster_path"
                    :synopsis = "pelicula.overview"
                >
                </pelicula>    
            </div>

    

        </div>
    `,
    data(){

        return{
            titulo:'Películas',
            peliculas: []
        }
    },
    components:{
        Pelicula
    },
    props: {
  
    },
    methods:{
        getPopularMovies(){
            const URL = `${BASEURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`
            fetch(URL)
                .then(response => response.json())
                .then(data => {
                    this.peliculas = data.results   
                    console.log(data.results)
                })
        }
    },
    

    mounted(){
        this.getPopularMovies()
    },
   


}