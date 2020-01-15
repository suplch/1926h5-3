// 定义一个全局自定义组件 Login,
// 作者: 张三
Vue.component('Login', {
    // 组件的自定义属性
    //props: ['loginname', 'password'],
    props: {
        loginname: String,
        password: String
    },
    template: `
        <div style="border: solid 5px red">
            <div v-if="!logined">
                {{ loginname }}: <input ref="username" />
                {{ password }}: <input ref="password" type="password" />
                <button v-on:click="login">登录</button>
            </div>
            <div v-else>
                欢迎 {{user.name}} 光临
            </div>
        </div>
    `,
    // **** 组件里面的data 数据模型比较 特殊, 必须是一个 函数, 返回一个 对象作为data
    data: function() {
        return {
            logined: false,
            user: undefined
        };
    },
    methods: {
        login() {
            axios.post('/auth/login', {
                username: this.$refs.username.value,
                password: this.$refs.password.value
            }).then((res) => {
                console.log(res.data)
                if (res.data.code === 100) {
                    this.logined = true;
                    this.user = res.data.user;
                    // this.$emit 自定义事件 广播一个事件消息
                    // 第一个参数是事件名称, 第二个参数是 事件参数 event 对象
                    this.$emit('loginok', '自定义 data');
                } else {
                    alert('登录失败: ' + res.data.code);
                }
            })
        }
    }
});