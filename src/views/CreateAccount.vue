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
                    <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                      <div class="ui message piled segment">
                        <div class="main-header">
                          <span
                            >สร้างบัญชีผู้ใช้งาน
                            <small>Create Account</small></span
                          >
                        </div>
                        <div
                          id="alert_createuser"
                          style="margin-top:20px"
                        ></div>
                        <form
                          method="post"
                          action="http://level-ro.com/system/function_create_user.php"
                          id="add_account"
                        >
                          <div class="row">
                            <div
                              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 aos-init aos-animate"
                              data-aos="fade-up"
                            >
                              <div class="form-group has-feedback">
                                <label>ID Game (ไอดีเกมส์)</label>
                                <input
                                  type="text"
                                  class="form-control input-lg"
                                  name="eddga_userid"
                                  placeholder="ระบุไอดีเกมส์ ตัวอักษร A-Z,0-9 (8-12ขึ้นไป)"
                                  autocomplete="off"
                                />
                                <span
                                  class="fas fa-user fa-2x form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                                <span class="help-block"
                                  >หมายเหตุ ! :
                                  ห้ามผู้เล่นสร้างบัญชีผู้ใช้งานเดียวกับเซิฟเวอร์อื่น
                                  ป้องกันการถูกแฮก ID Game</span
                                >
                              </div>
                            </div>
                            <div
                              class="col-lg-6 col-md-6 col-sm-6 col-xs-6 aos-init aos-animate"
                              data-aos="fade-up"
                            >
                              <div class="form-group has-feedback">
                                <label>Password (รหัสผ่าน)</label>
                                <input
                                  type="password"
                                  class="form-control input-lg"
                                  name="eddga_pass"
                                  placeholder="ระบุรหัสผ่าน ตัวอักษร A-Z,0-9 (8-12ขึ้นไป)"
                                  autocomplete="off"
                                />
                                <span
                                  class="fas fa-unlock-alt fa-2x form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                              </div>
                            </div>
                            <div
                              class="col-lg-6 col-md-6 col-sm-6 col-xs-6 aos-init aos-animate"
                              data-aos="fade-up"
                            >
                              <div class="form-group has-feedback">
                                <label>Password Confirm (ยืนยันรหัสผ่าน)</label>
                                <input
                                  type="password"
                                  class="form-control input-lg"
                                  name="eddga_passcfm"
                                  placeholder="ยืนยันรหัสผ่านให้ตรงกัน"
                                  autocomplete="off"
                                />
                                <span
                                  class="fas fa-unlock fa-2x form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                              </div>
                            </div>
                            <div
                              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 aos-init aos-animate"
                              data-aos="fade-up"
                            >
                              <div class="form-group has-feedback">
                                <label>Email (อีเมล์ผู้ใช้งาน)</label>
                                <input
                                  type="email"
                                  class="form-control input-lg"
                                  name="eddga_email"
                                  placeholder="ex. abc@gmail.com"
                                  autocomplete="off"
                                />
                                <span
                                  class="fas fa-envelope fa-2x form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                              </div>
                            </div>
                            <div
                              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 aos-init aos-animate"
                              data-aos="fade-up"
                            >
                              <div class="form-group has-feedback">
                                <label>Birthdate (วันเกิด)</label>
                                <div class="row">
                                  <div
                                    class="col-lg-4 col-md-4 col-sm-4 col-xs-4 aos-init aos-animate"
                                    data-aos="fade-up"
                                  >
                                    <select
                                      name="eddga_day"
                                      id="eddga_day"
                                      class="form-control input-lg2"
                                    >
                                      <option value="--" selected=""
                                        >Day</option
                                      >
                                      <option value="01">01</option>
                                      <option value="02">02</option>
                                      <option value="03">03</option>
                                      <option value="04">04</option>
                                      <option value="05">05</option>
                                      <option value="06">06</option>
                                      <option value="07">07</option>
                                      <option value="08">08</option>
                                      <option value="09">09</option>
                                      <option value="10">10</option>
                                      <option value="11">11</option>
                                      <option value="12">12</option>
                                      <option value="13">13</option>
                                      <option value="14">14</option>
                                      <option value="15">15</option>
                                      <option value="16">16</option>
                                      <option value="17">17</option>
                                      <option value="18">18</option>
                                      <option value="19">19</option>
                                      <option value="20">20</option>
                                      <option value="21">21</option>
                                      <option value="22">22</option>
                                      <option value="23">23</option>
                                      <option value="24">24</option>
                                      <option value="25">25</option>
                                      <option value="26">26</option>
                                      <option value="27">27</option>
                                      <option value="28">28</option>
                                      <option value="29">29</option>
                                      <option value="30">30</option>
                                      <option value="31">31</option>
                                    </select>
                                  </div>
                                  <div
                                    class="col-lg-4 col-md-4 col-sm-4 col-xs-4 aos-init aos-animate"
                                    data-aos="fade-up"
                                  >
                                    <select
                                      name="eddga_month"
                                      id="eddga_month"
                                      class="form-control input-lg2"
                                    >
                                      <option value="--" selected=""
                                        >Month</option
                                      >
                                      <option value="01">มกราคม</option>
                                      <option value="02">กุมภาพันธ์</option>
                                      <option value="03">มีนาคม</option>
                                      <option value="04">เมษายน</option>
                                      <option value="05">พฤษภาคม</option>
                                      <option value="06">มิถุนายน</option>
                                      <option value="07">กรกฎาคม</option>
                                      <option value="08">สิงหาคม</option>
                                      <option value="09">กันยายน</option>
                                      <option value="10">ตุลาคม</option>
                                      <option value="10">พฤศจิกายน</option>
                                      <option value="12">ธันวาคม</option>
                                    </select>
                                  </div>
                                  <div
                                    class="col-lg-4 col-md-4 col-sm-4 col-xs-4 aos-init aos-animate"
                                    data-aos="fade-up"
                                  >
                                    <select
                                      name="eddga_year"
                                      id="eddga_year"
                                      class="form-control input-lg2"
                                    >
                                      <option value="--" selected=""
                                        >Year</option
                                      >
                                      <option value="2018">2018</option>
                                      <option value="2017">2017</option>
                                      <option value="2016">2016</option>
                                      <option value="2015">2015</option>
                                      <option value="2014">2014</option>
                                      <option value="2013">2013</option>
                                      <option value="2012">2012</option>
                                      <option value="2011">2011</option>
                                      <option value="2010">2010</option>
                                      <option value="2009">2009</option>
                                      <option value="2008">2008</option>
                                      <option value="2007">2007</option>
                                      <option value="2006">2006</option>
                                      <option value="2005">2005</option>
                                      <option value="2004">2004</option>
                                      <option value="2003">2003</option>
                                      <option value="2002">2002</option>
                                      <option value="2001">2001</option>
                                      <option value="2000">2000</option>
                                      <option value="1999">1999</option>
                                      <option value="1998">1998</option>
                                      <option value="1997">1997</option>
                                      <option value="1996">1996</option>
                                      <option value="1995">1995</option>
                                      <option value="1994">1994</option>
                                      <option value="1993">1993</option>
                                      <option value="1992">1992</option>
                                      <option value="1991">1991</option>
                                      <option value="1990">1990</option>
                                      <option value="1989">1989</option>
                                      <option value="1988">1988</option>
                                      <option value="1987">1987</option>
                                      <option value="1986">1986</option>
                                      <option value="1985">1985</option>
                                      <option value="1984">1984</option>
                                      <option value="1983">1983</option>
                                      <option value="1982">1982</option>
                                      <option value="1981">1981</option>
                                    </select>
                                  </div>
                                </div>
                                <span class="help-block"
                                  >หมายเหตุ ! : วัน เดือน ปี เพื่อทำการลบตัวละคร
                                  โปรดใส่วันเกิดของท่าน</span
                                >
                              </div>
                            </div>
                            <div
                              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 aos-init aos-animate"
                              data-aos="fade-up"
                            >
                              <div class="form-group">
                                <label>Gender</label>
                                <label class="radio-inline">
                                  <div
                                    class="iradio_minimal"
                                    style="position: relative;"
                                  >
                                    <input
                                      type="radio"
                                      class="flat"
                                      name="eddga_gender"
                                      value="M"
                                      style="position: absolute; opacity: 0;"
                                    /><ins
                                      class="iCheck-helper"
                                      style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"
                                    ></ins>
                                  </div>
                                  <img
                                    src="images/icon/sex_m.png"
                                    class="img-rounded"
                                  />
                                  <span class="radio-text-big"
                                    >Male <small>(ชาย)</small></span
                                  >
                                </label>
                                <label class="radio-inline">
                                  <div
                                    class="iradio_minimal"
                                    style="position: relative;"
                                  >
                                    <input
                                      type="radio"
                                      class="flat"
                                      name="eddga_gender"
                                      value="F"
                                      style="position: absolute; opacity: 0;"
                                    /><ins
                                      class="iCheck-helper"
                                      style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"
                                    ></ins>
                                  </div>
                                  <img
                                    src="images/icon/sex_f.png"
                                    class="img-rounded"
                                  />
                                  <span class="radio-text-big"
                                    >Female <small>(หญิง)</small></span
                                  >
                                </label>
                              </div>
                            </div>
                            <div
                              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 aos-init aos-animate"
                              data-aos="fade-up"
                            >
                              <div class="form-group">
                                <label>Security Code :</label>
                                <div class="input-group">
                                  <span class="input-group-addon"
                                    ><img src="system/captcha.jpg" name="image"
                                  /></span>
                                  <input
                                    type="text"
                                    class="form-control input-lg2"
                                    name="eddga_captcha"
                                    placeholder="ตอบคำถาม เป็นตัวเลข ตามรูปภาพด้านซ้าย"
                                    autocomplete="off"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 aos-init aos-animate"
                              data-aos="fade-up"
                            >
                              <div
                                class="form-panel-group"
                                id="accordion"
                                role="tablist"
                                aria-multiselectable="true"
                              >
                                <div class="form-panel form-panel-default">
                                  <div
                                    class="form-panel-heading"
                                    role="tab"
                                    id="rules-link"
                                  >
                                    <h4 class="form-panel-title">
                                      <label class="checkbox-inline">
                                        <div
                                          class="icheckbox_minimal"
                                          style="position: relative;"
                                        >
                                          <input
                                            type="checkbox"
                                            class="flat"
                                            name="eddga_terms"
                                            value="1"
                                            style="position: absolute; opacity: 0;"
                                          /><ins
                                            class="iCheck-helper"
                                            style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"
                                          ></ins>
                                        </div>
                                        <a
                                          role="button"
                                          data-toggle="collapse"
                                          data-parent="#accordion"
                                          href="#rules"
                                          aria-expanded="true"
                                          aria-controls="collapseOne"
                                        >
                                          คุณจะยอมรับข้อตกลงในการสมัครสมาชิก
                                          เพื่อเข้าเล่นเกมส์ หรือไม่ ?
                                        </a>
                                      </label>
                                    </h4>
                                  </div>
                                  <div
                                    id="rules"
                                    class="form-panel-collapse collapse"
                                    role="tabpanel"
                                    aria-labelledby="rules-link"
                                  >
                                    <div class="form-panel-body">
                                      <ul class="list-unstyled">
                                        <li>
                                          1.ทีมงานมีสิทธิทุกอย่างในการ ปรับปรุง
                                          แก้ไข รีเซ็ทต่างๆ
                                          โดยไม่ต้องบอกล่วงหน้า
                                        </li>
                                        <li>
                                          2.ห้ามใช้บอท,โปรแกรม
                                          ในการช่วยเล่นต่างๆหากพบเจอแบนทันที
                                        </li>
                                        <li>
                                          3.ห้ามซื้อขายของในเกมเป็นบัตรหรือเงินจริง
                                          หากพบเจอแบนทันทีทั้งผู้ซื้อและผู้ขาย
                                        </li>
                                        <li>
                                          4.หากพบบัค หรือ
                                          ความผิดปกติของเซิฟกรุณาแจ้งทีมงานหน้า
                                          Live Chat หรือ FanFage Facebook ทันที
                                        </li>
                                        <li>
                                          5.ห้ามใช้บัคในการแสวงหาผลประโยชน์
                                          ไม่ว่าทางใดก็ตาม
                                          หรือไม่แจ้งแล้วนำมาก่อกวนในเซิฟเวอร์
                                          ไม่ว่าทางตรงหรือทางอ้อม หากพบเจอ
                                          แบนทันที
                                        </li>
                                        <li>
                                          6.ทางทีมงานจะไม่รับผิดชอบในกรณีไอเท็มหาย
                                          ไม่ว่าจะเกิดจากระบบ หรือ เกิดจาก
                                          ผู้เล่นเอง
                                        </li>
                                        <li>
                                          7.ทางทีมงานจะไม่รับแจ้งปัญหา ถูกแฮค
                                          หรือ
                                          ถูกโกงเพราะถือว่าเป็นความผิดพลาดจากตัวผู้เล่นเอง
                                        </li>
                                        <li>
                                          8.ห้ามกระทำการใดๆที่เข้าข่ายหลอกลวง
                                          ไม่ว่าสร้างตัวละครมาแอบอ้างว่าเป็นทีมงานหรือตั้งชื่อให้เหมือนกับตัวละครคนอื่นแล้วเอาไปหลอกผู้เล่นอื่นหรือการตั้งร้านขายของตัน
                                          แต่บอกว่าของรู เป็นต้น
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-lg-6 col-md-6 col-sm-6 col-xs-6 aos-init"
                              style="margin-top:20px"
                              data-aos="zoom-in-up"
                            >
                              <button
                                type="submit"
                                id="btn_adduser"
                                class="btn btn-register btn-lg btn-block"
                              >
                                <i
                                  class="fa fa-user-plus"
                                  aria-hidden="true"
                                ></i>
                                สร้างบัญชีผู้ใช้งาน
                              </button>
                            </div>
                            <div
                              class="col-lg-6 col-md-6 col-sm-6 col-xs-6 aos-init"
                              style="margin-top:20px"
                              data-aos="zoom-in-up"
                            >
                              <button
                                type="reset"
                                class="btn btn-close btn-lg btn-block"
                              >
                                <i
                                  class="fa fa-user-times"
                                  aria-hidden="true"
                                ></i>
                                ยกเลิก
                              </button>
                            </div>
                          </div>
                        </form>
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
        <tr>
          <td height="204"></td>
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
