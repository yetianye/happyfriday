<template>
	<div>
		<componentcontainer fatherComponent = 'home'></componentcontainer>
	</div>
</template>
<script>
	import componentcontainer from './componentcontainer.vue'
	export default{
		name:'home',
		// 引入公共组件
		components:{
			componentcontainer
		}

	}

</script>