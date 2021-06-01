const APIKEY = '7fa41e64945fa2fe482ea00acdb454be'
const BASEURL = 'https://api.themoviedb.org/3/'
let MejorValoradas = {
    template: `
        <div>       
            <h2 v-text="titulo"></h2>
            <div v-for="(pelicula,index) in peliculas" :key="index"> 
                <pelicula 
                    :title="pelicula.title"                >
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
    methods:{
        getMejorValoradas(){
            const URL = `${BASEURL}discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${APIKEY}`
            fetch(URL)
                .then(response => response.json())
                .then(data => {
                    this.peliculas = data.results   
                    console.log(data.results)
                })

        },
        
        
    },

   mounted(){
        this.getMejorValoradas()
    },


}