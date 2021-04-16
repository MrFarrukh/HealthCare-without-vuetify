import axios from 'axios'
export default{
    state:{
        bemors:[]
    },
    actions:{
        bemors(context){
            axios.get('http://localhost:3000/bemors')
               .then(response =>{
                   context.commit('allBemors',response)
               })
        },
        addBemor(context,payload){
            console.log(payload);
            axios.post('http://localhost:3000/bemors',payload)
          
            context.commit('pushBemor',payload)
        },
        delBemor(context,payload){
            axios.delete('http://localhost:3000/bemors/'+payload.item.id)
            context.commit('spliceBemor',payload.index)
        },
        saveBemor(context,payload){
            let index = payload.index
            delete payload.index
            axios.put('http://localhost:3000/bemors/'+payload.id,payload)
                .then(response =>{
                    response.data.index = index
                    context.commit('savedBemor',response.data)
                })
        }
    },
    mutations:{
        savedBemor(state,payload){
            let index = payload.index
            delete payload.index
            state.bemors[index] = payload
        },
        allBemors(state,payload){
            state.bemors = payload.data
        },
        pushBemor(state,payload){
            state.bemors.push(payload.data)  
        },
        spliceBemor(state,payload){
            state.bemors.splice(payload,1)
        }
    },
    getters:{
        getAllBemors(state){
            return state.bemors
        }
    }
}