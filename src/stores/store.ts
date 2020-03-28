import _ from 'lodash';
import * as remx from 'remx';

interface State {
  loading: boolean;
  devices: string[];
}

const initialState: State = {
  loading: false,
  devices: []
};

const getDefaultState = () => _.cloneDeep(initialState);

let state = remx.state(getDefaultState());

const setters = remx.setters({
  setLoading: (isLoading: boolean) => {
    state.loading = isLoading;
  },
  setDevices: (devices: string[]) => {
    state.devices = devices;
  }
});

const getters = remx.getters({
  isLoading: () => state.loading,
  getDevices: () => state.devices
});

export const store = {...setters, ...getters, initialState}
