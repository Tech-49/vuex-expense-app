<template>
	<div>
		<h1>Members</h1>
		<br>
		<table class="table">
			<thead class="thead-dark">
				<tr>
				<th scope="col">#</th>
				<th scope="col">Name</th>
				<th scope="col">Balance</th>
				<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in getMembers" :key="user.id">
					<td>{{ user.id }}</td>
					<td> {{ user.name }} </td>
					<td> ${{ user.balance }} </td>
					<td>
						<router-link class="btn btn-info" tag="a" :to="{name: 'add_expense_route'}"> Add Expense</router-link>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters([
			'getMembers'
		])
	}
}
</script>

<style>

</style>