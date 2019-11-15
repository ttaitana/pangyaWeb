<template>
  <div>
    <Navigation />
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
                          <a href="/main">
                            <i class="fas fa-home" aria-hidden="true"></i>
                            หน้าแรก
                          </a>
                        </li>
                        <li class="active">
                          <i class="fas fa-folder-open" aria-hidden="true"></i>
                          จัดการข้อมูลผู้ใช้งาน
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
                    <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                      <div class="ui message piled segment">
                        <div class="well">
                          <div class="main-header">
                            <span>
                              จัดการข้อมูลผู้ใช้งาน
                              <small>Dashboard Member</small>
                            </span>
                          </div>
                          <div class="ui main text" style="margin-bottom:2em;">
                            <div class="ui attached message">
                              <div class="header">Member Login</div>
                              <p>เข้าสู่ระบบสมาชิก</p>
                            </div>
                            <form
                              class="ui form attached fluid segment"
                              method="post"
                            >
                              <div class="field">
                                <label>Username / ID</label>
                                <input
                                  type="text"
                                  name="user"
                                  placeholder="ไอดีเกมส์ของคุณ"
                                  style="letter-spacing:0.1em"
                                  autofocus
                                  required
                                />
                              </div>
                              <div class="field">
                                <label>Password</label>
                                <input
                                  type="password"
                                  placeholder="รหัสผ่านของคุณ"
                                  name="pass"
                                  style="letter-spacing:0.1em"
                                  autofocus
                                  required
                                />
                              </div>
                              <button
                                class="ui green submit button"
                                type="submit"
                                value="submit"
                                name="login"
                              >
                                <i class="sign in alternate icon"></i>
                                เข้าสู่ระบบ
                              </button>
                              <button class="ui button" type="reset">
                                <i class="eraser icon"></i> ยกเลิก
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!----------------------------------------------------------------- End Text ------------------------------------------------------------->
                </td>
                <td width="20"></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
    <div id="pagetop" class="pagetop">
      <div class="chara">
        <a href="javascript:void(0)">
          <img src="@/images/btn_top.png" width="92" height="143" />
        </a>
      </div>
    </div>
    <pangya-footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import PangyaFooter from "@/components/PangyaFooter";

export default {
  components: {
    Navigation,
    PangyaFooter
  }
};
</script>

<style scoped></style>
<style scoped src="@/assets/css/semantic.min.css"></style>
<style scoped src="@/assets/css/sweetalert2.min.css"></style>
<style scoped src="@/assets/css/eddga-studio_api.css"></style>
<style scoped src="@/assets/css/eddga-studio_pc.css"></style>
