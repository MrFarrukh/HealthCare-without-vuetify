<template>
  <div class="home">
    <div class="h-inputs">
        <div class="head">
            <div class="in">
              <input  class="h-input" placeholder="Qidiruv" type="text">
              <img src="../assets/Vector.png" class="vector" alt="">
            </div>
            <div class="h-notif">
              <img class="zvonok" src="../assets/zvonok.png" alt="">
              <img class="man" src="../assets/man.png" alt="">
            </div>
      </div>
  </div>
  <div class="blocks">
        <div class="row">
          <div class="block">
            <div class="block-img">
              <img src="../assets/medicine.png" alt="">
            </div>
            <div class="block-text">
              <h4>Hodimlar</h4>
              <p>{{allDocLen}}</p>
            </div>
          </div>
          <div class="block">
            <div class="block-img">
              <img src="../assets/bemor.png" alt="">
            </div>
            <div class="block-text">
              <h4>Bemorlar</h4>
              <p>{{allPatLen}}</p>
            </div>
          </div>
          <div class="block">
            <div class="block-img">
              <img src="../assets/nur.png" alt="">
            </div>
            <div class="block-text">
              <h4>Xonalar</h4>
              <p>217</p>
            </div>
          </div>
          <div class="block">
            <div class="block-img">
              <img src="../assets/bank.png" alt="">
            </div>
            <div class="block-text">
              <h4>Budjet</h4>
              <p>217</p>
            </div>
          </div>
        </div>
    </div> 
    <h1 class="tab-h1">Shifokorlar</h1>
    <table class="tab" width="100%" cellspacing="0" border="0">
        <tr>
          <th>N</th>  
          <th>Ism-Familya</th>  
          <th>Email</th>  
          <th>Mutaxassisligi</th>  
          <th>Bo`lim</th>  
          <th>Qabul kunlari</th>  
        </tr>
        <tr v-for="(doc,index) of Idoc" :key="index">
              <td>{{index+1}}</td>
              <td>{{doc.name}}</td>
              <td>{{doc.mail}}</td>
              <td>{{doc.spec}}</td>
              <td>{{doc.dep}}</td>
              <td>{{doc.date.toString()}}</td>
          </tr>
    </table> 
    <h1 class="tab-h1">Bemorlar</h1>
    <table class="tab" width="100%" cellspacing="0" border="0">
          <tr>
              <th>N</th>
              <th>Ism-Familya</th>
              <th>Email</th>
              <th>Nomer</th>
              <th>Doktor</th>
              <th>Sabab</th>
          </tr>
          <tr v-for="(pat,index) of Ipat" :key="index">
              <td>{{index+1}}</td>
              <td>{{pat.img}}{{pat.name}}</td>
              <td>{{pat.mail}}</td>
              <td>{{pat.phone}}</td>
              <td>{{pat.wDoc}}</td>
              <td>{{pat.why}}</td>
          </tr>
      </table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed:{
    Idoc(){
      return this.$store.getters.homeDoc
    },
    Ipat(){
      return this.$store.getters.homePat
    },
    allDocLen(){
      return this.$store.getters.getLengthDoc
    },
    allPatLen(){
      return this.$store.getters.getLengthPat
    }
  },
  created(){
    this.$store.dispatch('doctors')
    this.$store.dispatch('bemors')
  }
}
</script>
<style  scoped>
   
   @font-face {
    font-family: 'lato';
    src: url(../fonts/Lato-Regular.ttf);
}
.tab td{
    height: 34px;
    background-color: #fff;
    border-top: 1px solid #ccc;
    font-family: 'lato';
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
    font-family: 'lato';
}
.tab{
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
.tab-h1{
  margin-top: 25px;
  margin-bottom: 20px;
  font-family: 'lato';
}

body,*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container{
    width: 100%;
}
  .right{
    width: 100%;
    padding: 0px 36px;
}
 
.head {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 24px;
}
.h-input {
    width: 300px;
    height: 33px;
    border-radius: 20px;
    padding-left: 40px;
    border: 0;
}
.h-input:focus {
    outline: 0;
}
  .notif {
    margin-right: 36px;
  }
 
  .zvonok {
    margin-bottom: 8px;
    margin-right: 11px;
  }
  .vector {
    margin-left: -286px;
  }
  .block {
    width: 272px;
    height: 88px;
    display: flex;
    background-color: #fff;
    border-radius: 10px;
  }
  .block-img img {
    padding: 26px 28px 0px 30px;
  }
 
  .block-text p {
    margin-top: 4px;
    font-family: 'lato';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #336CFB;
  }
 
  .block-text h4 {
    font-weight: normal;
    margin-top: 22px;
    font-family: 'lato';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #25282B;
  }
  .row{
      display: flex;
      justify-content: space-between;
  }
</style>