
export default {
	addItemNum({commit}){
		commit('increment',1)
	},

	recordItem({commit},opId){
		commit('pushItem',opId)
	}
}