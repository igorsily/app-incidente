import axios from "axios";
import { NativeModules } from 'react-native';

const { scriptURL } = NativeModules.SourceCode;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];

const Api = axios.create({
    baseURL: `http://${scriptHostname}:3335/`
})

export { Api };

