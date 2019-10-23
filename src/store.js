import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const months = [
	{ name:'jan', value:0},
	{ name:'feb', value:0},
	{ name:'march', value:0},
	{ name:'april', value:0},
	{ name:'may', value:0},
	{ name:'june', value:0},
	{ name:'july', value:0},
	{ name:'august', value:0},
	{ name:'sept', value:0},
	{ name:'oct', value:0},
	{ name:'nov', value:0},
	{ name:'dec', value:0},
];

export const store = new Vuex.Store({    
  
	// State is more like Data properties of components.
	state:{
	   members:[
		   { id: 1, name:"Hardik", balance:300, months },
		   { id: 2, name:"John", balance:350, months },
	   ]
	},
  
	getters:{
		getMembers(state){
            return state.members;
		},
	},
  
	// change/mutate the states.
	mutations:{
		debitAmountMutation(state,payload){
			const objIndex = state.members.findIndex(obj => obj.id === payload.currentUserId);
			const updatedObj = { ...state.members[objIndex]};
			updatedObj.balance -= payload.inputValue; 
			Vue.set(state.members,objIndex,updatedObj);
		}
	},
  
	// will be used to perform the mutations.
	actions:{
	   debitAmountAction(context,payload){
			if(payload.inputValue != 0){
				context.commit("debitAmountMutation",payload)
				// console.log(payload);
			}
	   }
	}
  });