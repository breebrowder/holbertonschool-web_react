import { List, Map } from 'immutable';

function concatElements(page1, page2) {
    const p1 = List(page1);
    const p2 = List(page2);
    const pList = p1.concat(p2);
    return (pList);
}

function mergeElements(page1, page2) {
    const p1 = Map(page1);
    const p2 = Map(page2);
    const pList = p1.merge(p2);
    return (pList);
}

module.exports = { concatElements, mergeElements };
