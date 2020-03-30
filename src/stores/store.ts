import _ from 'lodash';
import * as remx from 'remx';

interface State {
  loading: boolean;
  devices: Device[];
}

const initialState: State = {
  loading: false,
  devices: []
};

const getDefaultState = () => _.cloneDeep(initialState);

const state = remx.state(getDefaultState());

const setters = remx.setters({
  setLoading: (isLoading: boolean): void => {
    state.loading = isLoading;
  },
  setDevices: (devices: Device[]): void => {
    state.devices = devices;
  }
});

const getters = remx.getters({
  isLoading: (): boolean => state.loading,
  getDevices: (): Device[] => state.devices,
  getDeviceNames: (): string[] => _.map(getters.getDevices(), 'name')
});

export const store = {...setters, ...getters, initialState};
