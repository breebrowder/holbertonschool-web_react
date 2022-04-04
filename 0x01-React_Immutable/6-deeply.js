import { Map } from 'immutable';

function mergeDeeplyElements(page1, page2) {
    const p1 = Map(page1);
    const p2 = Map(page2);
    return (p1.mergeDeep(p2));
}

module.exports = mergeDeeplyElements;
