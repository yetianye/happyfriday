import App from '../App.vue'
import Home from '../components/Home.vue'
import Item from '../components/Item.vue'
import Score from '../components/Score.vue'


export default [{
	path:'/',
	component:App,
	children:[
		{
			path:'',
			component:Home
		},
		{
			path:'item',
			component:Item
		},
		{
			path:'score',
			component:Score
		}
		
	]
}]