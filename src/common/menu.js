export const menu = [
	{
		id: '1',
		icon: 'laptop',
		title: 'Dashboard',
		key: 'Dashboard',
		route: '/',
		child: [{
			title: 'Page1',
			key: 'Page1',
			route: '/page1'
		}, {
			title: 'Page2',
			key: 'Page2',
			route: '/page2'
		}]
	},
	{
		id: '2',
		bpid: '1',
		title: 'Users',
		key: 'Users',
		icon: 'user',
		route: '/user',
		child: [{
			id: '21',
			mpid: '-1',
			bpid: '2',
			title: 'User Detail',
			key: 'User Detail',
			route: '/user/:id'
		}]
	},
	{
		id: '7',
		bpid: '1',
		title: 'Posts',
		key: 'Posts',
		icon: 'shopping-cart',
		route: '/post',
		child: [{
			id: '21',
			mpid: '-1',
			bpid: '2',
			title: 'User Detail',
			key: 'User Detail',
			route: '/user/:id'
		}]
	},

	{
		id: '3',
		bpid: '1',
		title: 'Request',
		key: 'Request',
		icon: 'api',
		route: '/request',
		child: [{
			id: '21',
			mpid: '-1',
			bpid: '2',
			title: 'User Detail',
			key: 'User Detail',
			route: '/user/:id'
		}]
	},
	{
		id: '4',
		bpid: '1',
		title: 'UI Element',
		key: 'UI Element',
		icon: 'camera-o',
		child: [{
			id: '41',
			bpid: '4',
			mpid: '4',
			title: 'IconFont',
			key: 'IconFont',
			icon: 'heart-o',
			route: '/UIElement/iconfont'
		}, {
			id: '42',
			bpid: '4',
			mpid: '4',
			title: 'DataTable',
			key: 'DataTable',
			icon: 'database',
			route: '/UIElement/dataTable'
		},	{
			id: '43',
			bpid: '4',
			mpid: '4',
			title: 'DropOption',
			key: 'DropOption',
			icon: 'bars',
			route: '/UIElement/dropOption'
		}, 	{
			id: '44',
			bpid: '4',
			mpid: '4',
			title: 'Search',
			key: 'Search',
			icon: 'search',
			route: '/UIElement/search'
		}, {
			id: '45',
			bpid: '4',
			mpid: '4',
			title: 'Editor',
			key: 'Editor',
			icon: 'edit',
			route: '/UIElement/editor'
		},
		{
			id: '46',
			bpid: '4',
			mpid: '4',
			title: 'layer (Function)',
			key: 'layer (Function)',
			icon: 'credit-card',
			route: '/UIElement/layer'
		}]
	},

	{
		id: '5',
		bpid: '1',
		title: 'Recharts',
		key: 'Recharts',
		icon: 'code-o',
		child: [{
			id: '51',
			bpid: '5',
			mpid: '5',
			title: 'LineChart',
			key: 'LineChart',
			icon: 'line-chart',
			route: '/chart/lineChart'
		},
		{
			id: '52',
			bpid: '5',
			mpid: '5',
			title: 'BarChart',
			key: 'BarChart',
			icon: 'bar-chart',
			route: '/chart/barChart'
		},
		{
			id: '53',
			bpid: '5',
			mpid: '5',
			title: 'AreaChart',
			key: 'AreaChart',
			icon: 'area-chart',
			route: '/chart/areaChart'
		}]
	}
];
