import MyMessage from './message.vue'

const Message = {
	showMessage: false,
	showMessageNew: null,
	time: null,  	// 定时器
	install (Vue, options) {
		if (typeof window !== 'undefined' && window.Vue) {
			Vue = window.Vue
		}
		Vue.component('Message', MyMessage)

		Vue.prototype.$msg = (obj, callBack) => {
			let opt = MyMessage.data()

			// 这是在main.js时 将用户use的配置写入  覆盖掉默认配置   但这不是最高的配置信息
			for (let property in options) {
				opt[property] = options[property]  // 使用 options 的配置
			}

			// 如果$msg 中没有参数就设置默认的参数信息
			if (!obj instanceof Object) {
				// alert(JSON.stringify(opt))
				// opt.text = obj ? obj : (options ? options.text : opt.text)
				if (obj) {
					opt.text = obj
				} else {
					for (let property in obj) {
						opt[property] = obj[property]
					}
				}
			} else {
				if (typeof obj === 'string') {
					opt.text = obj
				} else {
					// 这是选择优先级最高的参数当最终的参数信息
					for (let property in obj) {
						opt[property] = obj[property]  // 使用 obj  自己在$msg事实 的配置
					}
				}
			}
			if (Message.showMessage || Message.showMessageNew) {
				// 如果Message还在，则先删除前一个Message 的信息以及定时器  并充值默认信息
				clearTimeout(Message.time)
				Message.showMessage = false
				document.body.removeChild(Message.showMessageNew.$mount().$el)
				Message.showMessageNew = null
			}
			if (!Message.showMessageNew) {
				// 创建构造器，定义好提示信息的模板
				let MessageT = Vue.extend({
          template: '<transition name=fade-up><div class="vue-Message ' + opt.position + '" v-show="isShow"><div class="vue-Message-Detail" style="background:' + opt.background + '">' + opt.text + '</div><Message></Message></div></transition>',
					data () {
						return {
							isShow: Message.showMessage
						}
					}
				})
				// 创建实例，挂载到文档以后的地方
				Message.showMessageNew = new MessageT()
				let tpl = Message.showMessageNew.$mount().$el
				document.body.appendChild(tpl)
				Message.showMessageNew.isShow = Message.showMessage = true
			}

			Message.time = setTimeout(function () {
				Message.showMessageNew.isShow = Message.showMessage = false
				if (typeof callBack === 'function') {
					callBack()
				}
			}, opt.duration)
		}
	}
}
export default Message
