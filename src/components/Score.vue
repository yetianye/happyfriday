<template>
	<div name="score" class="score">
		<div class="grade">
			<div>
				<span>{{score}}</span>
				<span>分！</span>
			</div>
			<p class="descrip">关注葡萄之家，关注葡萄之家，关注葡萄之家，</p>
		</div>
		<div>
			<div class="share" @click='isShow=true'></div>
		</div>
		<div class="qr">
			<span>关注葡萄之家，获取答案</span>
			<img src="../assets/image/4-4.png" height="212" width="212">
		</div>
		<div class="shade" @click='isShow=false' v-if='isShow==true'></div>
	</div>
	
</template>
<script type="text/javascript">
import {mapState} from 'vuex' 
	export default{
		name:'score',
		data(){
			return {
				right_ansers:[0,0,1,3,2],
				score:0,
				isShow:false
			}
		},
		computed:mapState([
			'recordList'
		]),
		methods:{
			// 获取分数
			getScore(){
				const items = this.recordList;
				for(var i =0;i<items.length;i++){
					if(items[i] == this.right_ansers[i]){
						this.score += 20 
					}
				}
			}
		},
		created(){
			this.getScore();
		}
	}
</script>
<style lang='less'>
body {
  height: 100%;
  width: 100%;
  background: url('../assets/image/4-1.jpg') no-repeat;
  background-size: 100% 100%;
}
.grade{
	height: 8.533333rem;
	width: 8.533333rem;
	background:url("../assets/image/4-2.png") no-repeat;
	-webkit-background-size: 100% 100%;
	background-size: 100% 100%;
	position: absolute;
	left: 50%;
	margin-left: -4.266667rem;
	top: 2.133333rem;
	div{
		position: absolute;
		left: 50%;
		margin-left: -1.28rem;
		top: 4.266667rem;
		span{
			color:#a51d31;
			font-weight: 700;
			font-size: 1.109333rem;
			/* 文字描边 */
			-webkit-text-stroke: .0.021333rem #313131;
		}
	}
	.descrip{
		margin: 0.426667rem;
		color:#313131;
		font-size: 0.512rem;
		position: absolute;
		bottom: 0.170667rem;
		left: 0.426667rem;
	}
}

.share{
	background: url('../assets/image/4-3.png') no-repeat;
	-webkit-background-size: 100% 100%;
	background-size: 100% 100%;
	height: 1.706667rem;
	width: 4.266667rem;
	position: absolute;
	top: 11.093333rem;
	left: 50%;
	margin-left: -1.706667rem;
}
.qr{
	width: 4.693333rem;
	position: absolute;
	top: 13.226667rem;
	left: 50%;
	margin-left: -1.92rem;
	span{
		font-size: 0.554667rem;
		color: #313131;
	}
	img{
		height: 4.266667rem;
		width: 4.266667rem;
	}
}
.shade{
	background: url("../assets/image/5-2.png") no-repeat;
	background-color: #313131;
	background-size: contain;
	/* 不包含 padding 部分 */
	background-origin:content-box;
	position: fixed;
	padding: 2.133333rem;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	opacity: .7;
}

</style>