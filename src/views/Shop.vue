/* eslint-disable */
<template>
  <div>
    <navigation />
    <div id="loadPage">
      <span></span>
    </div>
    <div id="particles-js"></div>
    <div class="wrapper">
      <div class="change"></div>
    </div>
    <div class="sky_wave">
      <div class="clouds_one"></div>
      <div class="clouds_two"></div>
      <div class="clouds_three"></div>
    </div>
    <div class="header_table">
      <table
        width="1200"
        border="0"
        align="center"
        cellpadding="0"
        cellspacing="0"
      >
        <tr>
          <td height="840">
            <div class="header_img">
              <div class="header_logo"></div>
            </div>
          </td>
        </tr>
        <tr>
          <td height="60"></td>
        </tr>
        <tr>
          <td height="1130">
            <table width="1200" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td width="20" height="1130"></td>
                <td width="1160" valign="top">
                  <!----------------------------------------------------------------- Start Text ------------------------------------------------------------->
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <ol class="breadcrumb">
                        <li>
                          <a href="index.html">
                            <i class="fas fa-home" aria-hidden="true"></i>
                            หน้าแรก
                          </a>
                        </li>
                        <li class="active">
                          <i class="fas fa-folder-open" aria-hidden="true"></i>
                          ร้านค้า
                        </li>
                      </ol>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <div class="well-menu">
                        <div class="guide-header">
                          <span>
                            <i class="fa fa-calendar-minus-o"></i> Menu Main
                          </span>
                        </div>
                        <ul
                          class="nav nav-pills nav-stacked"
                          style="margin-top:10px"
                        >
                          <li>
                            <a href="index.html">
                              <i class="fas fa-home"></i> หน้าหลัก
                            </a>
                          </li>
                          <li>
                            <a href="create_account.html">
                              <i class="fas fa-user-plus"></i> สมัครสมาชิก
                            </a>
                          </li>
                          <li>
                            <a href="download.html">
                              <i class="fas fa-download"></i> ดาวโหลดเกม
                            </a>
                          </li>
                          <li>
                            <a href="donate.html" target="_blank">
                              <i class="fas fa-credit-card"></i>
                              สนับสนุนเซิร์ฟเวอร์
                            </a>
                          </li>
                          <li>
                            <a href="comment.html">
                              <i class="fas fa-gift"></i> Event Comment
                            </a>
                          </li>
                          <li>
                            <a href="share_facebook.html">
                              <i class="fas fa-thumbs-up"></i> Event Share
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.facebook.com/groups/"
                              target="_blank"
                            >
                              <i class="fa fa-facebook-square"></i>
                              กลุ่มพูดคุย FACEBOOK
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="well-menu" style="margin-top:20px">
                        <div class="guide-header">
                          <span>
                            <i class="fa fa-calendar-minus-o"></i> Menu Support
                          </span>
                        </div>
                        <ul
                          class="nav nav-pills nav-stacked"
                          style="margin-top:10px"
                        >
                          <li>
                            <a href="server_info.html">
                              <i class="fa fa-tachometer"></i>
                              ข้อมูลเซิร์ฟเวอร์
                            </a>
                          </li>
                          <li>
                            <a href="woe_info.html">
                              <i class="fa fa-shield"></i> ข้อมูลกิลด์วอร์
                            </a>
                          </li>
                          <li>
                            <a href="rules.html">
                              <i class="fas fa-ban"></i> กฏของเซิร์ฟ
                            </a>
                          </li>
                          <li>
                            <a href="boss_time.html">
                              <i class="fas fa-crosshairs"></i> ข้อมูลบอส MVP
                            </a>
                          </li>
                          <li>
                            <a href="rank_status.html">
                              <i class="fas fa-chess-queen"></i>
                              ข้อมูลระบบยศ
                            </a>
                          </li>
                          <li>
                            <a href="pet_evolution.html">
                              <i class="fas fa-paw"></i> ข้อมูลสัตว์เลี้ยง
                            </a>
                          </li>
                          <li>
                            <a href="login_daily.html">
                              <i class="fa fa-gift"></i> ล็อคอิน รับไอเท็มฟรี
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <!--Shop-->
                    <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                     <h1 class="ui header">ร้านค้าลึกลับ</h1>
                     <hr>
                      <div class="ui cards">
                        <div class="ui card" v-for="itm in items">
                          <div class="content">
                            <div class="header">{{ itm.itemName }}</div>
                          </div>
                          <div class="content imageWrapper">
                            <img :src="itm.image" alt="" class="itemImage">
                          </div>
                          <div class="extra content">
                            <div class="playerSelecter">
                              <div class="">
                                <label>ราคา : <span style="color:#FFA556"> {{ itm.price }} Poins </span></label>
                              </div>
                              <div class="">
                                <p v-if="itm.specPlayer">ตัวละคร</p>
                                <select class="ui fluid dropdown" v-if="itm.specPlayer" v-model="playerselected">
                                  <option v-for="p in player" :value="p">{{ p }}</option>
                                </select>
                              </div>
                            </div>
                            <button class="ui teal button">ซื้อ item</button>
                          </div>
                        </div>
                      </div>
                    </div>
                      <!-- </div> -->
                  </div>
                  <!----------------------------------------------------------------- End Text ------------------------------------------------------------->
                </td>
                <td width="20"></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td height="204"></td>
        </tr>
      </table>
    </div>
    <pangya-footer />
  </div>
</template>

<script>
export default {
    name: "shop",
    components: {
        
    },
    data(){
      return {
        playerselected: "",
        player: [
              "Nell",
              "Lucia",
              "Kaz",
              "Arin",
              "Kooh",
              "Max",
              "Cesillia",
              "Arthur",
              "Hana",
              "Nuri"
            ],
        items:[
          {
            itemName: "Rainbow Glasses",
            price: 120,
            image: "https://www.mygame.in.th/uploadimage/Pangya/Red_UnderRim_Glasses.jpg",
            specPlayer: true
          },
          {
            itemName: "WT-PEP-100B",
            price: 120,
            image: "https://www.mygame.in.th/uploadimage/Pangya/Reward-poin11_NT_11-11-2014_2.jpg",
            specPlayer: true
          },
          {
            itemName: "WT-PEP-100B",
            price: 120,
            image: "https://www.mygame.in.th/uploadimage/Pangya/Reward-poin11_NT_11-11-2014_2.jpg",
            specPlayer: true
          } ,
          {
            itemName: "WT-PEP-100B",
            price: 120,
            image: "https://www.mygame.in.th/uploadimage/Pangya/Reward-poin11_NT_11-11-2014_2.jpg",
            specPlayer: false
          } ,
          {
            itemName: "WT-PEP-100B",
            price: 120,
            image: "https://www.mygame.in.th/uploadimage/Pangya/Reward-poin11_NT_11-11-2014_2.jpg",
            specPlayer: false
          }        
        ],
        
    }
  }
}

</script>

<style>
  .imageWrapper{
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .itemImage{
    width: 200px;
    height:150px;
    object-fit: cover;
  }
  .playerSelecter{
    padding: 0 0 1vmin 0;
  }
  .card{
    margin-right: 2vmin !important;
    width: 265px !important;
  }
  .header_table{
    margin: -192.6em 0;
  }
</style>
<style scoped src="@/assets/css/semantic.min.css"></style>
<style scoped src="@/assets/css/sweetalert2.min.css"></style>
<style scoped src="@/assets/css/eddga-studio_api.css"></style>
<style scoped src="@/assets/css/eddga-studio_pc.css"></style>