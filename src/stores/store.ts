import _ from 'lodash';
import * as remx from 'remx';

interface State {
  loading: boolean;
}

const initialState: State = {
  loading: false
};

const getDefaultState = () => _.cloneDeep(initialState);

let state = remx.state(getDefaultState());

const setters = remx.setters({
  setLoading: (isLoading: boolean) => {
    state.loading = isLoading;
  }
});

const getters = remx.getters({
  isLoading: () => state.loading
});

export {setters, getters, initialState};
