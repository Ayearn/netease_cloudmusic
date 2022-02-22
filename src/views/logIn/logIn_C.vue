<template >
  <div class="box">
    <h2>网易云音乐</h2>
    <form>
      <div class="inputBox">
        <input type="text" name="" required="" v-model="data.phone" />
        <label>电话</label>
      </div>
      <div class="inputBox">
        <input type="password" name="" required="" v-model="data.passWord" />
        <label>密码</label>
      </div>
      <input id="logIn" type="button" name="" value="登录" @click="logIn()" />
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

//网络请求
import { verification_code } from "@/http/verification_code.js";
import { login } from "@/http/login.js";

const data = reactive({
  phone: null,
  passWord: null,
  router: useRouter(),
});

const yzm = () => {
  verification_code(data.phone).then((res) => {
    console.log(res);
    if (res.data.code !== 200) {
      alert(res.data.message);
    }
  });
};

const logIn = () => {
  login(data.phone, data.passWord).then((res) => {
    console.log(res);
    if (res.data.code == 200) {
      data.router.push("/home");
    } else if (res.data.code == 502) {
      alert("密码错误");
      data.passWord = null;
    } else {
      alert("账号或密码错误");
      data.phone = null;
      data.passWord = null;
    }
  });
};
</script>

<style scoped>
.box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}
.box .inputBox {
  position: relative;
}
.box .inputBox input {
  width: 100%;
  padding: 10px 0;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 30px; /*输入框设置*/
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.box .inputBox label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}
.box .inputBox input:focus ~ label,
.box .inputBox input:valid ~ label {
  top: -18px;
  left: 0;
  color: #03a9f4;
  font-size: 12px;
}
.box input[type="button"] {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  background: #03a9f4;
  padding: 10px 20px;
  margin-top: 5%;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
}
</style>
