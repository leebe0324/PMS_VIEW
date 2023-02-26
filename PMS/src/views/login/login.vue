<!--  -->
<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="ruleForm.password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="loginFn()">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from "vue";
import { adminLoginApi, getAdminInfo } from "../../request/api";
import Cookie from "js-cookie";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const state = reactive({
  ruleForm: {
    username: "admin",
    password: "123456",
  },
});
let { ruleForm } = toRefs(state);
//获取el-form组件对象
let ruleFormRef = ref();
//获取项目路由对象
let router = useRouter();
//获取当前项目vuex对象
let store = useStore();

//校验规则
const validatePassword = (
  rule: unknown,
  value: string | undefined,
  callback: (message?: string) => void
) => {
  if (!value) {
    callback("密码不能为空");
  } else {
    callback();
  }
};
//校验规则
const rules = reactive({
  username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
  password: [{ required: true, validator: validatePassword, trigger: "blur" }],
});

//登录按钮
const loginFn = () => {
  ruleFormRef.value
    .validate()
    .then(() => {
      //校验通过
      adminLoginApi({
        username: ruleForm.value.username,
        password: ruleForm.value.password,
      }).then((res) => {
        if (res.code === 200) {
          Cookie.set("token", res.data, {
            expires: 7,
          });
          getAdminInfo().then((res) => {
            if (res.code === 200) {
              //存储数据
              store.commit("updateMenus");
              //跳转页面
              router.push("/homepage");
            }
          });
        }
      });
    })
    .catch(() => {});
};
</script>
<style lang="less" scoped></style>
