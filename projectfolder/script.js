let data, info;

async function initIndex(){   
  let link = "pool.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let pool = data[i];
    build += `<div class="fitted card">
                 <h3>${pool.permit_type}</h3>
                 <p>${pool.accela}</p>
                 <hr>
                 <p>${pool.address_no}</p>
                 <p>${pool.address_st}</p>
                 <hr>
                 <p>${pool.inspection_date} </p>
                 <p>${pool.inspection_type} </p>
                 <p>${pool.of_all_violations}</p>
                 <br>
                 <p>${pool.lat}</p>
                 <p>${pool.long}</p>

              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByViolationNum(){
  let output = document.getElementById("output");
  let violation = document.getElementById("violation").value;
  let result = document.getElementById("result");

  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let pool = data[i];
    if(pool.of_all_violations == violation){
      build += `<div class="fitted card">
                 <h3>${pool.permit_type}</h3>
                 <p>${pool.accela}</p>
                 <hr>
                 <p>street # & str</p>
                 <p>${pool.address_no}</p>
                 <p>${pool.address_st}</p>
                 <hr>
                 <p>${pool.inspection_date}</p>
                 <p>${pool.inspection_type}</p>
                 <p>${pool.of_all_violations}</p>
                 <br>
                 <p>${pool.lat}</p>
                 <p>${pool.long}</p>

              </div>`    
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// filter 2 //

function filterByAccela(){
  let output = document.getElementById("output");
  let accela = document.getElementById("accela").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let pool = data[i];
    if(pool.accela == accela){
      build += `<div class="fitted card">
                 <h3>${pool.permit_type}</h3>
                 <p>${pool.accela}</p>
                 <hr>
                 <p>street # & str</p>
                 <p>${pool.address_no}</p>
                 <p>${pool.address_st}</p>
                 <hr>
                 <p>${pool.inspection_date}</p>
                 <p>${pool.inspection_type}</p>
                 <p>${pool.of_all_violations}</p>
                 <br>
                 <p>${pool.lat}</p>
                 <p>${pool.long}</p>

              </div>`    
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// filter function #3  WIP//

function filterByPermit(){
  let output = document.getElementById("output");
  let permit = document.getElementById("permit").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let pool = data[i];
    if(pool.permit_type == permit){
      build += `<div class="fitted card">
                 <h3>${pool.permit_type}</h3>
                 <p>${pool.accela}</p>
                 <hr>
                 <p>street # & str</p>
                 <p>${pool.address_no}</p>
                 <p>${pool.address_st}</p>
                 <hr>
                 <p>${pool.inspection_date}</p>
                 <p>${pool.inspection_type}</p>
                 <p>${pool.of_all_violations}</p>
                 <br>
                 <p>${pool.lat}</p>
                 <p>${pool.long}</p>

              </div>`    
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
// charts PART //