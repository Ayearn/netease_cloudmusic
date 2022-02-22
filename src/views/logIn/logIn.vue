<template>
  <div id="bg">
    <div id="logIn">
      <div id="logIn_div"><log-in_-c></log-in_-c></div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import logIn_C from "./logIn_C.vue";

//网络请求
import { verification_code } from "@/http/verification_code.js";
import { login } from "@/http/login.js";

const data = reactive({
  phone: null,
  captcha: null,
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
  login(data.phone, data.captcha).then((res) => {
    console.log(res);

    if (res.data.code == 200) {
      data.router.push("/home");
    } else {
      alert("验证码或密码错误");
    }
  });
};
</script>

<style scoped>
#bg {
  width: 100vw;
  height: 100vh;
  background-color: #d43c33;
}
#logIn {
  width: 30%;
  height: 40%;
  margin: 0 auto;
  position: relative;
  top: 50%; /*偏移*/
  transform: translateY(-50%);

  /* 毛玻璃效果 */
  border-radius: 5%;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.3);
}
#logIn_div {
  width: 90%;
  height: 90%;
  margin: auto;
  position: relative;
  top: 50%; /*偏移*/
  transform: translateY(-50%);
}
</style>
