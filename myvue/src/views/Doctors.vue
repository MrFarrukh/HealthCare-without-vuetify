<template>
  <div>
      <h1>Shifokorlar</h1>
      <div class="card" v-show="isDoctor">
          <p class="card-p">Yangi shifokorlarni ro`yhatga qo`shish</p>
          <input class="card-input" type="text" placeholder="Ism-familya" v-model="doc.name">
          <input class="card-input" type="text" placeholder="Email" v-model="doc.mail" >
          <input class="card-input" type="text" placeholder="Mutaxassisligi" v-model="doc.spec" >
          <input class="card-input" type="text" placeholder="Bo`lim" v-model="doc.dep" >
          <div class="days card-input ">
              <input type="checkbox" id="day1" value="Du" v-model="doc.date">
              <label for="day1">Du</label>
              <input type="checkbox" id="day2" value="Se" v-model="doc.date">
              <label for="day2">Se</label>
              <input type="checkbox" id="day3" value="Chor" v-model="doc.date">
              <label for="day3">Chor</label>
              <input type="checkbox" id="day4" value="Pay" v-model="doc.date">
              <label for="day4">Pay</label>
              <input type="checkbox" id="day5" value="Juma" v-model="doc.date">
              <label for="day5">Ju</label>
              <input type="checkbox" id="day6" value="Shan" v-model="doc.date">
              <label for="day6">Shan</label>
          </div>
          <div class="btns">
            <button class="btn" @click="cancel">Bekor qilish</button>
            <button v-show="isActive" class="btn" @click="save">Saqlash</button>
            <button v-show="!isActive" class="btn" @click="add">Qo`shish</button>
          </div>
      </div>
      <table class="tab" width="100%" cellspacing="0" border="0">
          <tr>
              <th>N</th>
              <th>Ism-Familya</th>
              <th>Email</th>
              <th>Mutaxassisligi</th>
              <th>Bo`lim</th>
              <th>Qabul kunlari</th>
              <th>Tahrirlash</th>
          </tr>
          <tr v-for="(doctor,index) of doctors" :key="index">
              <td>{{index+1}}</td>
              <td>{{doctor.name}}</td>
              <td>{{doctor.mail}}</td>
              <td>{{doctor.spec}}</td>
              <td>{{doctor.dep}}</td>
              <td>{{doctor.date}}</td>
              <td><button @click="edit(index)">edit</button><button @click="del(index)">delete</button></td>
          </tr>
      </table>
      
      <button class="isDoctor" @click="plus"><img src="../assets/doctor.png" alt=""></button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isDoctor:false,
            isActive:false,
            doc:{
                name:'',
                mail:'',
                spec:'',
                dep:'',
                date:[]
            },
        }
    },
    methods:{
        plus(){
            this.isDoctor = !this.isDoctor
            this.isActive = false
        },
        add(){
            this.doc.date = this.doc.date.toString()
            this.$store.dispatch('addDoctor',this.doc)
            this.doc = {
                name:'',
                mail:'',
                spec:'',
                dep:'',
                date:[]
            }
            this.isDoctor = false
        },
        cancel(){
            this.isDoctor = false
        },
        edit(index){
            this.isDoctor = true
            this.isActive = true
            this.doc = this.doctors[index]
            this.doc.id = this.doctors[index].id
        },
        del(index){
            const obj = {
                index:index,
                item:this.doctors[index]
            }
            this.$store.dispatch('delDoctor',obj)
        },
        save(){
            this.$store.dispatch('saveDoctor',this.doc)
            this.doc = {
                name:'',
                mail:'',
                spec:'',
                dep:'',
                date:[]
            }
            this.isDoctor = false
        }
    },
    computed:{
        doctors(){
            return this.$store.getters.getAllDoctors
        },
    },
    created(){
        this.$store.dispatch('doctors')
    }
}
</script>

<style scoped>
    .tab td{
        height: 34px;
        background-color: #fff;
        border-top: 1px solid #ccc;
    }
    .tab td:first-child{
    border-left: 1px solid #ccc;
    padding-left: 3px;
    }
    .tab td:last-child{
    border-right: 1px solid #ccc;
    }
    .tab th{
        height: 40px;
        text-align: left;
        border: 1px;
        background: #e8e8e882;
    }
    .tab{
    margin-top: 50px;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    }
    .tab th:last-child{
    border-top-right-radius: 10px;
    }
    .tab th:first-child{
    padding-left: 3px;
    border-top-left-radius: 10px;
    }
    @font-face {
        font-family: 'l';
        src: url(../fonts/Lato-Regular.ttf);
    }
    .card{
        width: 400px;
        background-color: #ccc;
        margin: auto;
        position: fixed;
        margin-left: 380px;
        margin-top: 70px;
    }
    .isDoctor{
        border-radius: 50%;
        width: 55px;
        border: 0;
        height: 55px;
        background-color: #336CFB;
        right: 3%;
        top: 85%;
        bottom: 0%;
        position: fixed;
        cursor: pointer;
    }
    .isDoctor:focus{
        outline: 0;
    }
    .card-p{
        padding: 27px 48px 4px 48px;
        font-family: 'l';
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
    }
    .card-input{
        height: 27px;
        width: 285px;
        display: flex;
        padding-left: 8px;
        margin: 18px 47px;
        border-radius: 8px;
        border: 0;
    }
    .btns{
        display: flex;
        justify-content: center;
        padding-bottom: 40px;
    }
    .btn{
        width: 130px;
        height: 32px;
        border: 0;
        background-color: #27AE60;
        border-radius: 8px;
    }
    .btn:focus{
        outline: 0;
    }

    .btn:first-child{
        background-color: red;
        margin-right: 5px;
    }
    .btn:last-child{
        margin-left: 5px;
    }
</style>