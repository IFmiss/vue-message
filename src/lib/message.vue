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
		background:rgba(0,0,0,0.3);
		font-size:14px;
		color:#fff;
		line-height:1.5;
		padding: 6px 12px;
		width:auto;
		border-radius:8px;
		max-width: 414px;
		display:inline-block;
		user-select: none;
		word-wrap: break-word;
		opacity:1;
		z-index: 10000000;
		box-sizing:border-box;
		cursor:default;
		&.bottom{
			bottom: 10%;
			left:50%;
			transform:translate(-50%,0);
			&.fade-up-enter{
				opacity: 0;
				transform:translate(-50%,10px);
			}
		}
		&.center{
			top: 50%;
			left:50%;
			transform:translate(-50%,-50%);
			&.fade-up-enter{
				opacity: 0;
				transform:translate(-50%,calc(-50% + 10px));
			}
		}
		&.top{
			top: 10%;
			left:50%;
			transform:translate(-50%,0);
			&.fade-up-enter{
				opacity: 0;
				transform:translate(-50%,10px);
			}
		}
		&.fade-up-enter-to,&.fade-up-leave-to{
			transition: all .3s ease;
		}
		&.fade-up-leave-to{
			opacity: 0;
		}
	}

	@media screen and (max-width: 500px) {
		.vue-Message{
			max-width:90%;
		}
	}

</style>