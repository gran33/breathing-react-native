import {fetchDevices} from '../services/devices';
import {store} from './store';

export async function getDevices(): Promise<void> {
  store.setDevices(await fetchDevices());
}

