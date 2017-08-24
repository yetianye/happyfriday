<template>
	 <section>
	 	<div class="top_tips">
	 		<span class='num_tip'>{{level}}</span>
	 		<!-- <span class='num_tip'>{{itemNum}}</span> -->
	 	</div>
	 
	 	<div v-if="fatherComponent == 'home'">
			<div class="home_logo container_style"></div>
			<router-link to="item" class="button_style btn_start"></router-link>
	 	</div>

	 	<div v-if="fatherComponent == 'item'">
	 		<div class="container_style">
	 			<div>
	 				<header class="item_top">
	 				{{itemDetail[itemNum-1].topic_name}}
		 			</header>
		 			<ul class="item_detail">
		 				<li v-for='(v,i) in itemDetail[[itemNum-1]].topic_ansers' @click="chooseItem(i)" >
		 					<span :class="{'chooseOption':i == option_id}" class="option_style">{{option_num(i)}}</span>
		 					<span class="option_content">{{v.anser_name}}</span>
		 				</li>
		 			</ul>
	 			</div>
	 			
	 		</div>
	 		<button class="button_style btn_next" @click="nextItem" v-if="itemNum<itemDetail.length"></button>
	 		<button class="button_style btn_submit" @click="submitItem" v-else></button>
	 	</div>
	 </section>

</template>
<script>
	import {mapState,mapActions} from 'vuex'

	export default {
		name:'componentcontainer',
		data(){
			return{
				option_id:null

			}
		},
		props:["fatherComponent"],

		computed:mapState([
		  	'itemNum', //第几题
	  		'level', //周数
	  		'itemDetail', //题目细节
	  		'timer', //计时器
	  		'recordList'
		]),
		methods:{
			...mapActions([
		      'recordItem' // 映射 this.increment() 为 this.$store.dispatch('increment')
		    ]),
			option_num(index){
				var temp;
				switch(index){
					case 0:
					temp = "A"; break;
					case 1:temp = "B"; break;
					case 2:temp = "C"; break;
					default:temp = "D"; break;
				}
				return temp
			},
			chooseItem(index){
				this.option_id = index;
				
			},
			nextItem(){
				if(this.option_id != null){
					
					this.$store.dispatch('addItemNum');
					this.recordItem(this.option_id);
					this.option_id = null;
				}else{
					alert("你还没有选择哦！")
				}
			},
			submitItem(){
				if(this.option_id != null){
					this.$store.dispatch('addItemNum');
					this.recordItem(this.option_id);
					this.$router.push('score')
					console.log(this.recordList)
					this.option_id = null;
				}else{
					alert("你还没有选择哦！")
				}
			}
		}
	}
</script>
<style lang='less'>
.top_tips{
	position: absolute;
	top: 0.0rem;
	right: 2rem;
	font-size: 0.597333rem;
	height: 8.533333rem;
	width: 3.413333rem;
	background: url("../assets/image/WechatIMG2.png") no-repeat;
	-webkit-background-size: 100% 100%;
	background-size: 100% 100%;

	.num_tip {
		color: #a57c50;
		position: absolute;
		left: 0.853333rem;
		bottom: 1.28rem;
		text-align: center;
		font-family: "黑体";
		font-weight: 600;
	}
}

.home_logo{
	background: url("../assets/image/1-2.png") no-repeat;
	-webkit-background-size: contain;
	background-size: contain;
	
}

.container_style{
	width: 12.8rem;
	height: 14.506667rem;
	position: absolute;
	left: 50%;
	margin-left: -6.4rem;
	top: 6.4rem;
	padding: 2.133333rem;
}
.button_style{
	display: block;
	height: 2.133333rem;
	width: 4.266667rem;
	position: absolute;
	top: 14.933333rem;
	left: 50%;
	margin-left: -2.133333rem;
}
.btn_start{
	background: url("../assets/image/1-4.png") no-repeat;
	background-size: contain;
}
.btn_next{
	background: url("../assets/image/2-2.png") no-repeat;
	background-size: contain;
}
.btn_submit{
	background: url("../assets/image/3-1.png") no-repeat;
	background-size: contain;
}
.item_top{
	font-size:0.682667rem;
	font-weight: 700;
	color: #fff;
}
.item_detail,.item_detail>li{
	font-size:0.512rem;
	color: #fff;
	line-height: 1.5;

	.option_style{
	display: inline-block;
	height: 0.597333rem;
	width: 0.597333rem;
	line-height: 0.554667rem;
	border-radius: 50%;
	border: 0.042667rem solid #fff;
	text-align: center;
	vertical-align: middle;
	}
	.option_content{
		vertical-align: middle;
	}
}
.chooseOption {
	background-color: yellow;
	color : black;
}
</style>