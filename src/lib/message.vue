<template>
	<transition name=fade-up>
		<!-- <div class="vue-Message ' + opt.position + '" style="background:' + opt.background + '" v-show="isShow"> -->
	</transition>
</template>

<script>
  export default {
  	name: 'Vue-Message',
  	data () {
  		return {
			text: 'Hello World',	// 默认文案
			position: 'bottom',   // 默认显示位置
			duration: 3000,     // 持续时间
			background: 'rgba(7,17,27,0.8)'   // 默认背景色
  		}
  	},
  	mounted () {
  	}
  }
</script>

<style lang="scss">
	.vue-Message{
		position:fixed;
		width:100%;
		opacity:1;
		z-index: 10000000;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		.vue-Message-Detail{
			cursor:default;
			box-sizing:border-box;
			display:inline-block;
			user-select: none;
			word-wrap: break-word;
			width:auto;
			max-width: 80%;
			border-radius:8px;
			font-size:14px;
			color:#fff;
			line-height:1.5;
			font-family: SourceHanSansCN-Regular;
			padding: 6px 12px;
		}
		&.bottom{
			bottom: 10%;
			left:0;
			transform:translate(0,0);
			&.fade-up-enter{
				opacity: 0;
				transform:translate(0,10px);
			}
		}
		&.center{
			top: 50%;
			left:0;
			transform:translate(0,-50%);
			&.fade-up-enter{
				opacity: 0;
				transform:translate(0,calc(-50% + 10px));
			}
		}
		&.top{
			top: 10%;
			left:0;
			transform:translate(0,0);
			&.fade-up-enter{
				opacity: 0;
				transform:translate(0,10px);
			}
		}
		&.fade-up-enter-to,&.fade-up-leave-to{
			transition: all .3s ease;
		}
		&.fade-up-leave-to{
			opacity: 0;
		}
	}
</style>