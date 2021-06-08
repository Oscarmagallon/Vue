let Pelicula = {
    template: `
        <div>
            <h2> {{title | mayusculas}} </h2>
            <img :src="cover">
            <p v-text="synopsis" v-if="versynopsis"></p>
            <div style="display:block">
               
                <button @click="versynopsis=!versynopsis">
                    synopsis
                </button>
            </div>           
        </div>
    `,

    props:['id','title','synopsis','cover','like'],

    data(){ 

        return{
            versynopsis:false

            
        }
    },
    filters:{
            mayusculas(value){
                return value
            }
    },
    methods:{
        favoritos(){
          this.$emit('update:like',!this.like)        }
    }


}