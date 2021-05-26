
import HomePage from '../pages/home.f7.html';
import NotFoundPage from '../pages/404.f7.html';

import CityPage from '../pages/city.f7.html';
import ResultPage from '../pages/result.f7.html';

var routes = [
{
	path: '/',
	component: HomePage,
},
{
	path: '/city/:id/',
	component: CityPage,
},
{
	path: '/result/',
	component: ResultPage,
},
{
	path: '(.*)',
	component: NotFoundPage,
},
];

export default routes;