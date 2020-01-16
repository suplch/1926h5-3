/**
 * 
 * Message 是一个 消息框组件, 对外提供 三个 slot 插槽
 *  <slot name="head"></slot>
 *  <slot name="content"></slot>
 *  <slot name="foot"></slot>
 * 
 *  例如:
 *  <Message info="一些信息blabla.范德萨范德萨范德萨...">
        <template v-slot:head>
            <h1>消息对话框</h1>
        </template>
        <template v-slot:content>
            <button>😃</button>
        </template>
        <template v-slot:foot>
            <button>确定</button>
        </template>
    </Message>
 * 
 * 
 */
Vue.component('Message', {
    props: ['info'],
    template: `
        <div style="display: flex; flex-direction: column;  border: solid 5px red; width: 400px; height: 300px">
            <header style="background: lightgrey; height: 100px;">
                <!-- 命名插槽slot -->
                <slot name="head"></slot>
            </header>
            <section style="flex: 1">
                <!-- slot 插槽 -->
                <slot name="content"></slot>
            </section>
            <footer style="background: lightgrey; height: 50px;">
                <slot name="foot"></slot>
            </footer>
        </div>
    `
})