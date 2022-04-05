import { Seq } from 'immutable';

function printBestStudents(obj) {
    const studentSeq = Seq(obj)
        .filter((x) => x.score >= 70)
        .map((x) => ({
            score: x.score,
            firstName: x.firstName.charAt(0).toUpperCase() + x.firstName.slice(1),
            lastName: x.lastName.charAt(0).toUpperCase() + x.lastName.slice(1),
        }));
    console.log(studentSeq.toObject());
}

module.exports = printBestStudents;