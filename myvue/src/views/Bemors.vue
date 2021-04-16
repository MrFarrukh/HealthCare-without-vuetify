<template>
  <div>
      <h1>Bemorlar</h1>
      <div class="card" v-show="isBemor">
          <p class="card-p">Yangi bemorlarni ro`yhatga qo`shish</p>
          <input class="card-input" type="text" placeholder="Ism-familya" v-model="pat.name">
          <input class="card-input" type="text" placeholder="Email" v-model="pat.mail" >
          <input class="card-input" type="text" placeholder="nomeri" v-model="pat.phone" >
          <input class="card-input" type="text" placeholder="rasm url" v-model="pat.img" >
          <select class="card-input" name="" id="" v-model="pat.wDoc">
            <option :value="doctor.name" v-for="doctor of doctors" :key="doctor.id">{{doctor.name}}</option>
          </select>
          <input class="card-input" type="text" placeholder="sabab" v-model="pat.why" >
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
              <th>Nomer</th>
              <th>Doktor</th>
              <th>Sabab</th>
              <th>Tahrirlash</th>
          </tr>
          <tr v-for="(bemor,index) of bemors" :key="index">
              <td>{{index+1}}</td>
              <td>{{bemor.img}}{{bemor.name}}</td>
              <td>{{bemor.mail}}</td>
              <td>{{bemor.phone}}</td>
              <td>{{bemor.wDoc}}</td>
              <td>{{bemor.why}}</td>
              <td><button @click="edit(index)">edit</button><button @click="del(index)">delete</button></td>
          </tr>
      </table>
      
      <button class="isBemor" @click="plus"><img src="../assets/doctor.png" alt=""></button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isBemor:false,
      isActive:false,
      pat:{
        name:'',
        mail:'',
        phone:'',
        img:'',
        wDoc:'',
        why:''
      }
    }
  },
  methods:{
    add(){
      this.$store.dispatch('addBemor',this.pat)
      this.pat = {
        name:'',
        mail:'',
        phone:'',
        img:'',
        wDoc:'',
        why:''
      }
      this.isBemor = false
    },
    cancel(){
      this.isBemor = false
    },
    edit(index){
      this.isActive = true
      this.isBemor = true
      this.pat = this.bemors[index]
      this.pat.id = this.bemors[index].id
    },
    del(index){
      const obk = {
        index : index,
        item: this.bemors[index]
      }
      this.$store.dispatch('delBemor',obk)
    },
    save(){
      this.$store.dispatch('saveBemor',this.pat)
        this.pat = {
        name:'',
        mail:'',
        phone:'',
        img:'',
        wDoc:'',
        why:''
      }
      this.isBemor = false
    },
    plus(){
      this.isBemor = !this.isBemor
      this.isActive = false
    }
  },
  computed:{
    bemors(){
      return this.$store.getters.getAllBemors
    },
    doctors(){
      return this.$store.getters.getAllDoctors
    }
  },created(){
    this.$store.dispatch('bemors')
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
    .isBemor{
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
    .isBemor:focus{
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