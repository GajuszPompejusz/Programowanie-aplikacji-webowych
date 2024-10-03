(function () {
  //TODO
  const ex1_button = document.getElementById("ex1_button");
  const ex1_content = document.getElementById("ex1_content");

  ex1_button.onclick = function () {
    ex1_content.innerHTML = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  };

  const ex2_text = document.getElementById("ex2_text");
  const ex2_content = document.getElementById("ex2_content");

  ex2_text.oninput = function () {
    const text = ex2_text.value;
    ex2_content.innerText = "";
    if (text.length != 9) {
      ex2_content.innerText += "Długość musi być równa 9\n";
    }

    if (text.match(new RegExp("[a-zA-Z]"))) {
      ex2_content.innerText += "Numer nie może zawierać liter\n";
    }

    if (text.match(new RegExp("\\W"))) {
      ex2_content.innerText += "Numer nie może zawierać znaków specjalnych\n";
    }

    if (ex2_content.innerText == "") {
      ex2_content.innerText += "Numer jest poprawny";
    }
  };

  const ex3_one = document.getElementById("ex3_one");
  const ex3_two = document.getElementById("ex3_two");
  const ex3_element = document.getElementById("ex3_element");

  ex3_element.ondragend = function (e) {
    over.appendChild(this);
  };

  var over = null;
  ex3_one.ondragover = function (e) {
    over = this;
  };
  ex3_two.ondragover = function (e) {
    over = this;
  };
})();
