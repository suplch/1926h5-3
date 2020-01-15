
Vue.component('Girl', {
    template: `
        <div style="border: solid 5px pink;">
            <input ref="msg" /> <button @click="send">发送</button>
            <div>
                <ul>
                    <li v-for="msg of msg_list" style="height: 50px">
                        <div v-bind:style="{float: msg.sender == 'girl' ? 'right': 'left', border: 'solid 5px pink'}">
                            {{msg.sender}} 说: {{ msg.text }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `,
    data() {
        return {
            msg_list: []
        }
    },
    // 代表当前组件被创建 那么调用这个函数
    created() {
        eventBus.$on('男孩说', (msg) => {
            this.msg_list.push(msg);
        });
    },
    methods: {
        send() {
            let msgObj = {
                sender: 'girl',
                text: this.$refs.msg.value
            };
            this.msg_list.push(msgObj);
            eventBus.$emit('女孩说', msgObj);
        }
    }
});