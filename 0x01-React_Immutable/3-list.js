import { List } from 'immutable';

const getListObject = (array) => List(array);
const addElementToList = (list, element) => list.push(element);
export { getListObject, addElementToList };
