let armbalance = document.getElementById("armbalance");
let balancing = document.getElementById("balancing");
let standing = document.getElementById("standing");
let seated = document.getElementById("seated");
let core = document.getElementById("core");
let forwardbend = document.getElementById("forwardbend");
let twistingyoga = document.getElementById("twistingyoga");
let hipopening = document.getElementById("hipopening");
let backbend = document.getElementById("backbend");
function display() {
  let url = "../base/yogas.json";
  let response = fetch(url);
  response
    .then((e) => {
      return e.json();
    })
    .then((data) => {
      console.log(data);
      armbalance.innerHTML = data.armbalance.map((element)=>{
        return `<div class="card m-3 mx-auto" style="width: 18rem;">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-title text-center"><b>${element.name}</b></p>
        </div>
      </div>`;
      });
      balancing.innerHTML = data.balancing.map((element)=>{
        return `<div class="card m-3 mx-auto" style="width: 18rem;">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-title text-center"><b>${element.name}</b></p>
        </div>
      </div>`;
      });
      standing.innerHTML = data.standing.map((element)=>{
        return `<div class="card m-3 mx-auto" style="width: 18rem;">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-title text-center"><b>${element.name}</b></p>
        </div>
      </div>`;
      });
      seated.innerHTML = data.seated.map((element)=>{
        return `<div class="card m-3 mx-auto" style="width: 18rem;">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-title text-center"><b>${element.name}</b></p>
        </div>
      </div>`;
      });
      core.innerHTML = data.core.map((element)=>{
        return `<div class="card m-3 mx-auto" style="width: 18rem;">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-title text-center"><b>${element.name}</b></p>
        </div>
      </div>`;
      });
      forwardbend.innerHTML = data.forwardbend.map((element)=>{
        return `<div class="card m-3 mx-auto" style="width: 18rem;">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-title text-center"><b>${element.name}</b></p>
        </div>
      </div>`;
      });
      twistingyoga.innerHTML = data.twistingyoga.map((element)=>{
        return `<div class="card m-3 mx-auto" style="width: 18rem;">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-title text-center"><b>${element.name}</b></p>
        </div>
      </div>`;
      });
      hipopening.innerHTML = data.hipopening.map((element)=>{
        return `<div class="card m-3 mx-auto" style="width: 18rem;">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-title text-center"><b>${element.name}</b></p>
        </div>
      </div>`;
      });
      backbend.innerHTML = data.backbend.map((element)=>{
        return `<div class="card m-3 mx-auto" style="width: 18rem;">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-title text-center"><b>${element.name}</b></p>
        </div>
      </div>`;
      });
    });
}
display();
