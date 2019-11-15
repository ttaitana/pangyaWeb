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
                          สร้างบัญชีผู้ใช้งาน
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

                    <!-- User profile -->
                    <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                      <div class="ui message piled segment">
                          <!-- <div class="well"> -->
                        <div class="ui main-header text">
                          <span
                            >บัญชีผู้ใช้งาน
                            <small>User Profile</small></span
                          >
                        </div>
                        <div
                          id="alert_createuser"
                          style="margin-top:20px"
                        ></div>
                        <hr>
                        <div class="row">
                            <div class="col-xs-4 alg-c">
                                <p class="big-number">{{ cookie }}</p>
                                <h1 class="clear">คุกกี้</h1>
                            </div>
                            <div class="col-xs-4 alg-c">
                                <p class="big-number" style="color:#FFA556">{{ pang }}</p>
                                <h1 class="clear">ปัง</h1>
                            </div>
                            <div class="col-xs-4 alg-c">
                                <p class="big-number">{{ point }}</p>
                                <h1 class="clear">แต้ม Online</h1>
                            </div>
                        </div>
                        <hr>
                            <div class="row">
                                <div class="col-lg-5 col-md-7 col-xs-7">
                                    <img :src="image_link" v-on:click="upload" alt="profile" id="profilePicture">
                                    <form action="">
                                        <input type="file" name="picture" id="upload_img">
                                        <input type="submit" value="Save" class="ui primary button" id="btnSubmit">
                                    </form>
                                    
                                    <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcqzCubT4DH-goKl_yvGD-Kj9aB8pergWyiW41tD0QGyKhJxAew&s" alt="" id="profilePicture"> -->
                                </div>
                                <div class="col-xs">
                                    <h1>User Id : {{ id }}</h1>
                                    <p>ชื่อตัวละคร : {{ name }}</p>
                                    <p>คลับ : {{getClub()}}</p>
                                    <p>คะแนนประจำเซิฟ : <span id="ranking">{{ player_poing }}</span></p>
                                    <p>IP Address : {{ ip }}</p>
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
import Navigation from "@/components/Navigation";
import PangyaFooter from "@/components/PangyaFooter";

export default{
    name: "UserProfile",
    components: {
        Navigation,
        PangyaFooter
    },
    data(){
        return{
            id : "slowduck",
            name: "เป็ดโหดกระโดดตี",
            cookie: 35200,
            pang: 3000,
            point: 2000,
            ip: "127.0.0.5",
            club: "",
            player_poing: 1466,
            image_link: "https://i.pinimg.com/originals/6f/a6/a5/6fa6a5c61fe24473c75e68b3d32b2946.jpg"

        }
    },
    methods:{
        getClub(){
            if(this.club == ""){
                return "ไม่มีสังกัด"
            }
            return this.club
        },
        upload: function(){
            document.getElementById("upload_img").click()
        }
    }
}
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Mitr:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&amp;subset=thai");
    body{
        font-family: "Mitr";
        }
    #profilePicture{
        background: rgba(15, 28, 63, 0.125);
        border-radius: 50%;
        height: 20vmin;
        object-fit: cover;
        width: 20vmin;
        transition: .3s;
        left: 4em;
        position: relative;
        cursor: pointer;
    }
    #btnSubmit{
        left: 35vmin;
        position: relative;
    }
    /* #profilePicture:hover{
        filter: brightness(.5);
        opacity: .5;
    } */

    .big-number{
        font-weight: 100;
        font-size: 7rem;
        margin: 0 !important;
    }
    .alg-c{
        text-align: center;
    }
    .clear{
        padding: 0;
        margin: 0;
    }
    #ranking{
        color:#7ACD65;
    }
    #upload_img{
        visibility: hidden;
    }


</style>
<style scoped src="@/assets/css/semantic.min.css"></style>
<style scoped src="@/assets/css/sweetalert2.min.css"></style>
<style scoped src="@/assets/css/eddga-studio_api.css"></style>
<style scoped src="@/assets/css/eddga-studio_pc.css"></style>
