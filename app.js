
const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})

const cars = [
	car('Ford', 'Focus', 'Aster Auto', 2000, '87750391076', 'images/focus.jpg'),
	car('Ford', 'Mondeo', 'Aster Auto', 2005, '87750391010', 'images/mondeo.png'),	
	car('Nissan', 'Juke', 'Niyara', 2011, '87750391000', 'images/juke.png'),	
]

new Vue({
	el: '#app', 
	data:{
		cars: cars,
		car: cars[0],
		selectedCarIndex:0,
		phoneV: false
	},
	methods: {
		selectCar: function(index) {
			this.car = cars[index]
			this.selectedCarIndex = index
		}
	}
})

