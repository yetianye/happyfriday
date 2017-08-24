export default{
	increment(state,num){
		if(state.itemNum<state.itemDetail.length){
			state.itemNum+=num;
		}		
	},
	pushItem(state,opId){
		state.recordList.push(opId);
	}
}