import Home from  './components/Pages/Home'
import Members from  './components/Pages/Members'
import AddExpense from  './components/Pages/AddExpense'

export const appRoutes = [
	{ path: '/', component: Home },
	{ path: '/home', component: Home, name:'home_route' },
	{ path: '/members', component: Members, name:'members_route'  },
	{ path: '/add-expense', component: AddExpense, name:'add_expense_route' }
];