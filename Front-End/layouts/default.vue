<template>
	<v-app dark>
		<v-navigation-drawer
			v-model="drawer"
			:mini-variant.sync="mini"
			permanent
			app
		>
			<!--
				? This is the Title and Close Button
				! Start
		-->
			<v-list>
				<section class="d-flex flex-row-reverse">
					<div class="mx-4">
						<v-btn icon @click.stop="mini = !mini" v-show="!mini">
						<v-icon>mdi-chevron-left</v-icon></v-btn>
					</div>
					<v-list-item v-show="!mini">
						<v-list-item-content>
							<v-list-item-title class="text-h6">
								<section>Application</section>
							</v-list-item-title>
							<v-list-item-subtitle> subtext </v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</section>
				<v-divider v-show="!mini"></v-divider>
			</v-list>
			<!--
						? This is the Title and Close Button
						! End
				-->
			<v-list dense nav>
				<v-list-item v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					router
					exact>
					<v-list-item-icon class="">
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<section v-show="!mini"><ThemeMenu /></section>
		</v-navigation-drawer>
		<container id="Project" v-show="mini">
			<Nuxt/>
		</container>
	</v-app>
</template>

<script>
import ThemeMenu from '~/components/ThemeMenu.vue'
import Index from '~/pages/index.vue'
export default {
	components: { ThemeMenu, Index },
	data() {
		return {
			drawer: true,
			img: null,
			mini: true,
			items: [
				{
					icon: 'mdi-apps',
					title: 'Welcome',
					to: '/',
				},
				{
					icon: 'mdi-chart-bubble',
					title: 'Inspire',
					to: '/inspire',
				},
			]
		}
	},
	methods: {
		onClickMe: function () {
			console.log('Hello world')
		},
	},
}
</script>

<style>
::-webkit-scrollbar {
	display: none;
}
#Project{
	padding: 10px 0px 0px 76px;
}
</style>
