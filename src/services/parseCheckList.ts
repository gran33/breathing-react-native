import _ from 'lodash';


export function parse(items: object): Device[] {

  try {
    return _.map(items, (item: any): Device => {
      console.log('RANG', item);
      return {
        name: _.get(item, 'machineName'),
        image: _.get(item, 'machineImage'),
        owner: _.get(item, 'machineOwner'),
        steps: []
      };
    });
  } catch (err) {
    console.warn('RANG', 'parse', err);
  }
}
