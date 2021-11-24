<template>
	<div class="popup_wrapper" ref="popup_wrapper">
		<div class="v-popup">
			<div class="v-popup__header">
				<span class="popup_title">{{popupTitle}}</span>
				<span class="close_popup">
					<i class="material-icons" @click="closePopup">close</i>
				</span>
			</div>
			<div class="v-popup__content">
				<slot></slot>
			</div>
			<div class="v-popup__footer">
				<!-- <button class="close_modal" @click="closePopup">Close</button> -->
				<button class="submit_btn" @click="rightBtnAction">{{rightBtnTitle}}</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-popup',
		components: {},
		props: {
			popupTitle: {
				type: String,
				default: 'Popup name'
			},
			rightBtnTitle: {
				type: String,
				default: 'Ok'
			}
		},
		data() {
			return {}
		},
		computed: {},
		methods: {
			rightBtnAction() {
				this.$emit('rightBtnAction');
			},
			closePopup() {
				this.$emit('closePopup');
			}
		},
		mounted() {
			let vm = this;
			document.addEventListener('click', function (item) {
				if (item.target === vm.$refs['popup_wrapper']) {
					vm.closePopup();
				}
			})
		}
	}
</script>

<style>
	.popup_wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		background: rgba(64, 64, 64, .4);
	}

	.v-popup {
		width: 500px;
		position: fixed;
		padding: 16px;
		background: #ffffff;
		box-shadow: 0 0 17px 0 #e7e7e7;
		z-index: 10;
	}

	.v-popup__header,
	.v-popup__footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.v-popup__header span {
		width: auto !important;
		padding: 0 8px;
	}

	.popup_title {
		font-size: 20px;
		font-weight: bold;
	}

	.close_popup i {
		cursor: pointer;
	}

	.v-popup__content {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
	}

	.submit_btn,
	.close_modal {
		margin: 0 auto;
		margin-top: 20px;
		padding: 8px 16px;
		border: 0;
		border-radius: 5px;
		background: #26ae70;
		color: #ffffff;
	}

	.close_modal {
		background: crimson;
	}
	
</style>
