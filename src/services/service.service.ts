import SyntheticDataService from "./syntheticData.service";

class ServiceService {
	public async getProducts(){
		return SyntheticDataService.loadSyntheticJSON('products');
	}
}

export default new ServiceService();
