let url = "http://localhost:3000/";

function myFirstFunction() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("javab").innerText = data[1].age;
    });
}
