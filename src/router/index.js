<<<<<<< Updated upstream
import { createWebHistory, createRouter } from "vue-router";
import Home from "@/App.vue"
=======
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/Home.vue"
>>>>>>> Stashed changes
import Map from "@/components/Map.vue"

const routes = [
	{
		name: "map",
		path: "/map",
		component: Map
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;