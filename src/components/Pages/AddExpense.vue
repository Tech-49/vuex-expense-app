<template>
	<div>
		<h1>Add Expense</h1>
		<br>
		<table class="table">
			<thead class="thead-dark">
				<tr>
				<th scope="col"></th>
				<th scope="col">Balance</th>
				<th scope="col">Jan</th>
				<th scope="col">Feb</th>
				<th scope="col">Mar</th>
				<th scope="col">April</th>
				<th scope="col">May</th>
				<th scope="col">June</th>
				<th scope="col">July</th>
				<th scope="col">Aug</th>
				<th scope="col">Sept</th>
				<th scope="col">Oct</th>
				<th scope="col">Nov</th>
				<th scope="col">Dec</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user,index) in getMembers" :key="user.id">
					<td> {{ user.name }} </td>
					<td> ${{ user.balance }} - {{ index }} </td>
					<td v-for="month in user.months" :key="month.name">
						<input type="text" @blur="debitAmountAction({ inputValue:$event.target.value, currentUserId:user.id})" class="form-control" :value="month.value" v-once>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    computed:{
        ...mapGetters([
			'getMembers'
		])
	},
	methods: {
		...mapActions([
			'debitAmountAction'
		])
	},
}
</script>

<style>

</style>