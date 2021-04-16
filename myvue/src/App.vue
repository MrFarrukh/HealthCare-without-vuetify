<template>
  <div id="app">
      <div class="container">
          <div class="hospital">
              <div class="left">
                <div class="l-main">
                  <img class="l-img" src="./assets/logo-image.png" alt="">
                  <h1 class="l-h1" >MEDICINE</h1>
                </div>
                <div class="l-children">
                    <div class="l-child">
                        <img src="./assets/qism.png" alt="" class="l-child-img">
                        <router-link class="l-middle" to="/">Bosh Sahifa</router-link> 
                    </div>
                    <div class="l-child">
                        <img src="./assets/medic.png" alt="" class="l-child-img">
                        <router-link class="l-middle" to="/appoint">Uchrashuvlar</router-link> 
                    </div>
                    <div class="l-child">
                        <img src="./assets/hospitalman.png" alt="" class="l-child-img">
                        <router-link class="l-middle" to="/doctors">Shifokorlar</router-link> 
                    </div>
                    <div class="l-child">
                        <img src="./assets/hospitalwomen.png" alt="" class="l-child-img">
                        <router-link class="l-middle" to="/depart">Bo`limlar</router-link> 
                    </div>
                    <div class="l-end-child">
                        <img src="./assets/pay.png" alt="" class="l-child-img">
                        <router-link class="l-middle" to="/bemors">Bemorlar</router-link> 
                    </div>
                    <div class="l-child">
                        <img src="./assets/ques.png" alt="" class="l-child-img">
                        <router-link class="l-middle" to="/help">Yordam</router-link> 
                    </div>
                </div>
              </div>
              <div class="right">
                <router-view/>
              </div>
          </div>
    </div>
  </div>
</template>

<style scoped>
  

@font-face {
    font-family: 'lato';
    src: url(./fonts/Lato-Regular.ttf);
}

body,*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container{
    width: 100%;
}
.left{
    height: 1382px;
    margin: 0;
}
.right{
    width: 1184px;
    background-color: #F6F8FB;
    height: 1382px;
    margin: 0;
}
.hospital{
    display: flex;
}
.l-img{
    padding: 24px  46px 24px 24px;
}
.l-h1{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    padding: 18px 16px 0px 24px;
    color: #ccc;
    font-family: 'lato'; 
}
.l-child-img{
    padding-left: 25px;
    padding-right: 13px;
}
.l-middle{
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #52575C;
    font-family: 'lato';
    text-decoration: none; 
}
.l-child{
    margin: 28px 0px;
}
.l-end-child{
    padding-bottom: 70px;
    border-bottom: 1px solid black;
}
.l-inputs {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 24px;
}
.right{
    width: 100%;
    padding: 0px 36px;
}
 
</style>
