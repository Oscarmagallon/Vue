const APIKEY = '7fa41e64945fa2fe482ea00acdb454be'
const BASEURL = 'https://api.themoviedb.org/3/'
let catalogo = {
    template: `
    
   
        <div>     
            <p id= "texto">En esta pagina podras buscar cualquier Pelicula de nuestro catalogo y ver su synopsis.
            Que lo disfrutes
            </p>
            <div id = "buscar">
                <br>
                <input type= "text" v-model="busqueda" @keydown.enter="buscar()">
                <button @click="buscar()">Buscar</button>
            </div>
            <h2 id="titulo" v-text="titulo"></h2>
            <div v-for="(pelicula,index) in peliculas" :key="index"> 
                <pelicula 
                    :title="pelicula.title" 
                    :cover = "'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+pelicula.poster_path "
                    :synopsis = "pelicula.overview"            >
                </pelicula>    
            </div>
        </div>
   
    `,
   
    data(){

        return{
            titulo:'Películas',
            peliculas: [],
             busqueda:''
        }
    },  
    components:{
        Pelicula
    },
    
    methods:{
        getMejorValoradas(){
            const URL = `${BASEURL}discover/movie/?certification_country=US&certification=R&sort_by=vote_average.asc&api_key=${APIKEY}`
            fetch(URL)
                .then(response => response.json())
                .then(data => {
                    this.peliculas = data.results   
                    console.log(data.results)
                })

        },
        buscar(){
            if (this.busqueda) {
            fetch(URL)
                .then(response => response.json())
                .then(data => {
                    this.peliculas = data.results   
                    console.log(data.results)
                }) 
                
            }
            
            
        

        },

        
        
        
    },

   mounted(){
        this.getMejorValoradas()
    },


}