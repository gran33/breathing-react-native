import Checklist from '../services/checklist';
import {store} from './store';

export async function getDevices(): Promise<void> {
  await Checklist.getCheckList();
  const data = Checklist.data;
  store.setDevices(data);
}

