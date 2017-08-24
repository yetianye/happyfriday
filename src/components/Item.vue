<template>
	<div>
		<componentcontainer fatherComponent = 'item'></componentcontainer>
	</div>
</template>
<script>
	import componentcontainer from './componentcontainer.vue'
	export default{
		name:'item',
		// 引入公共组件
		components:{
			componentcontainer
		}

	}

</script>