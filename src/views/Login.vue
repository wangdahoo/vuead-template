<template>
  <div class="page">
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <el-form ref="loginForm" :model="form" :rules="formRules">
          <el-form-item label="" prop="username">
            <el-input v-model="form.username" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit" @click="login()">登录</el-button>
            <el-button type="default" native-type="reset">重置</el-button>
          </el-form-item>
        </el-form>

        <p class="desc">还没有账号？ <router-link class="primary" :to="{name:'register'}">立即注册</router-link></p>
        <div class="copyright">© 2017 YOUR COMPANY. All RIGHT RESERVED.</div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
  .page {
    padding-top: 50px;
  }
</style>

<script>
  let submitLock = false

  export default {
    name: 'Login',

    fullscreen: true,

    data () {
      // 自定义校验规则
      var validateEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱地址'))
        } else {
          var reg = new RegExp(/^\S+@\S+\.\S{2,}$/)
          if (reg.test(value)) {
            callback()
          } else {
            callback(new Error('邮箱地址不正确'))
          }
        }
      }

      return {
        form: {
          username: '',
          password: ''
        },

        formRules: {
          username: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { min: 5, max: 50, message: '长度在 50 个字符以内', trigger: 'blur' },
            { validator: validateEmail, trigger: 'blur,change' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 1, max: 50, message: '长度在 50 个字符以内', trigger: 'blur' }
          ]
        }
      }
    },

    methods: {
      login () {
        // 防止二次提交
        if (submitLock) return
        submitLock = true
        setTimeout(() => {
          submitLock = false
        }, 1000)

        // TODO: 提交表单
      }
    }
  }
</script>
