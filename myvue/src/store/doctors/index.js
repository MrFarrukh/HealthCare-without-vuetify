import axios from 'axios'

export default{
    state:{
        doctors:[],
    },
    actions:{
        doctors(context){
            axios.get('http://localhost:3000/doctors')
                .then(response => {
                   context.commit('allDoctors',response)
                })
        },
        addDoctor(context,payload){
            console.log('actions',payload);
            axios.post('http://localhost:3000/doctors',payload)
              .then(response =>{
                  context.commit('pushDoctor',response.data)
              })
        },
        delDoctor(context,payload){
            axios.delete('http://localhost:3000/doctors/'+payload.item.id)
            context.commit('spliceDoctor',payload.index)
        },
        saveDoctor(context,payload){
            let index = payload.index
            delete payload.index
            axios.put('http://localhost:3000/doctors'+payload.id,payload)
                .then(response =>{
                    response.data.index = index
                    context.commit('savedDoctor',response.data)
                })
        }
    },
    mutations:{
        saveDoctor(state,payload){
            let index = payload.index
            delete payload.index
            state.doctors[index] = payload
        },
        spliceDoctor(state,payload){
            state.doctors.splice(payload,1)
            console.log('del',payload);
        },
        allDoctors(state,payload){
            state.doctors = payload.data
        },
        pushDoctor(state,payload){
            state.doctors.push(payload.doc)
        }
    },
    getters:{
        getAllDoctors(state){
            console.log('getter',state.doctors);
            return state.doctors
        }
    }
}