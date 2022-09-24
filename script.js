/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});
var photo;

// Describe this function...
function add() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  photo.push(photo[0]);
  let element_img_cat2 = document.getElementById('img_cat');
  element_img_cat2.setAttribute("src", photo.shift());
}


photo = ['https://i.insider.com/55a67a65371d2215008b690d?width=1136&format=jpeg', 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Neighbours_Siamese.jpg/640px-Neighbours_Siamese.jpg', 'data:image/jpeg;base64,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', 'https://www.wbs.ac.uk/sites/wbs2012/assets/File/cat%20for%20suzy%20tobias%20story.jpg'];
add();


document.getElementById('next').addEventListener('click', (event) => {
  add();

});

document.getElementById('previous').addEventListener('click', (event) => {
  photo.unshift(photo.slice(-1)[0]);
  let element_img_cat = document.getElementById('img_cat');
  element_img_cat.setAttribute("src", photo.pop());

});
const console = document.getElementById("tests");
prettify.toHTML(run(), console);
