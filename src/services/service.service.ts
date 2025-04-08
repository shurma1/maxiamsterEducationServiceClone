import SyntheticDataService from "./syntheticData.service";

class ServiceService {
	public async getProducts(){
		return SyntheticDataService.loadSyntheticJSON('products');
	}
	
	public async getCPULoad() {
		const min = 60;
		const max = 100;
		
		const random = Math.random();
		
		if(random < 0.05) return 0;
		
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	public async getCities() {
		return SyntheticDataService.loadSyntheticJSON('city');
	}
}

export default new ServiceService();
