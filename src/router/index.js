import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/Home.vue"
import Map from "@/components/Map.vue"

const routes = [
	{
		name: "Home",
		path: "/",
		component: Home
	},
	{
		name: "Map",
		path: "/map",
		component: Map
	},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;