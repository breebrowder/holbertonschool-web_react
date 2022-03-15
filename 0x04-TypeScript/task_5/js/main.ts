// comments below

interface MajorCredits {
  credit: number;
  _brand: "Major";
}

interface MinorCredits {
  credit: number;
  _brand: "Minor";
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  const sum = subject1.credit + subject2.credit;
  const obj: MajorCredits = {
    credit: sum,
    _brand: "Major",
  };

  return obj;
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  const sum = subject1.credit + subject2.credit;
  const obj: MajorCredits = {
    credit: sum,
    _brand: "Minor",
  };

  return obj;
}

// Create two interfaces MajorCredits and MinorCredits in task_5/js/main.ts:

// Each interface defines a number named credits
// Add a brand property to each interface in order to identify each of them
// Create two functions named sumMajorCredits and sumMinorCredits in main.ts:

// Each function takes two arguments subject1 and subject2
// sumMajorCredits returns MajorCredits value & sumMinorCredits returns MinorCredits value
// Each function sums the credits of the two subjects