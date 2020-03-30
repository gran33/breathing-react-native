import Http from './http';
import * as Parser from './parseCheckList';


class CheckList {

  _data: Device[] | undefined;

  get data(): Device[] | undefined {
    return this._data;
  }

  set data(d: Device[] | undefined) {
    this._data = d;
  }

  getCheckList = async (): Promise<void> => {
    const checklist = await Http.getCheckList();
    const parsedCheckList = Parser.parse(checklist);
    this.data = parsedCheckList;
  }
}

export default new CheckList();
