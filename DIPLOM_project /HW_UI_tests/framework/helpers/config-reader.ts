import { readdirSync, readFileSync } from "fs";

type ConfigType = {
    [key: string]: boolean | string | number | ConfigType | (boolean | string | number)[];
}

export class ConfigReader {
    private configData: ConfigType;
    constructor(configName = 'selenium') {
        this.configData = JSON.parse(readFileSync('./configs/' + configName + '.json').toLocaleString());
    }
}