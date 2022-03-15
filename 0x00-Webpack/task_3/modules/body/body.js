const $ = require("jquery");
const _ = require("lodash");
import './body.css'

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here</button>');
$('body').append('<p id="count"></p>');


let count = 0;

function updateCounter() {
  count++;
  $("#count").text(`${count} clicks on the button`);
}

const $button = $("<button>Click here</button>").on("click",
  _.debounce(updateCounter, 500, {
    leading: true,
    trailing: false,
  })
);
