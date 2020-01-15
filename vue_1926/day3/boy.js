
Vue.component('Boy', {
    template: `
        <div style="border: solid 5px blue;">
            <input ref="msg" /> <button @click="send">发送</button>
            <div>
                <ul>
                    <li v-for="msg of msg_list" style="height: 50px">
                        <div v-bind:style="{float: msg.sender == 'boy' ? 'right': 'left', border: 'solid 5px blue'}">
                            {{msg.sender}} 说: {{ msg.text }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `,
    created() {
        eventBus.$on('女孩说', (msg) => {
            this.msg_list.push(msg);
        })
    },
    data() {
        return {
            msg_list: []
        }
    },
    methods: {
        send() {
            let msgObj = {
                sender: 'boy',
                text: this.$refs.msg.value
            };
            this.msg_list.push(msgObj);
            this.$refs.msg.value = '';
            eventBus.$emit('男孩说', msgObj);
        }
    }
});