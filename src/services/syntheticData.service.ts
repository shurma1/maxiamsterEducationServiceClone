import * as path from "node:path";
import * as fs from "node:fs";

const dataFolderPath = path.resolve(__dirname, '..', 'data');

class SyntheticDataService{
	public async loadSyntheticJSON(fileName: string){
		const dataPath = path.resolve(dataFolderPath, `${fileName}.json`);
		return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
	}
}

export default new SyntheticDataService();
