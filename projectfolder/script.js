let data, info;

async function init(){   
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
  let violation = document.getElementById("violation_num").value;
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

// 📢 CHARTS PART 📢 //

async function initCharts(){
  let link = "pool.json"; //https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000"; //
  info = await fetch(link);
  data = await info.json();
  console.log(data); 
}

function violationsByInspections(){
  //Variables to keep count of accidents by borough
  let v0 = 0, v1 = 0, v2 = 0, v3 = 0, v4 = 0, v5 = 0, v6 = 0, o = 0;

  //Tallying the count of accidents by borough
  for(let i = 0; i < data.length; i++){
    let pool = data[i];
    if(pool.of_all_violations == "0"){
      v0++;
    }else if(pool.of_all_violations == "1"){
      v1++;
    }else if(pool.of_all_violations == "2"){
      v2++;
    }else if(pool.of_all_violations == "3"){
      v3++;
    }else if(pool.of_all_violations == "4"){
      v4++;
    }else if(pool.of_all_violations == "5"){
      v5++;
    }else if(pool.of_all_violations == "6"){
      v6++;
    } else{
o++;
} 
   }

  //Creating data for chart (as array of arrays) with 1st position of array being label
  let chartData = [
    ["0",v0],
    ["1",v1],
    ["2", v2],
    ["3", v3],
    ["4", v4],
    ["5", v5],
    ["6", v6],
    ["Other", o]
  ];

  //Retrieving chart type from user's selection of drop-down
  let chartType = get("chartType").value;  
  
  //Generate and display chart
  displayChart(chartData,"chart",chartType)
}


// MAP PART //
let data, mapObj;

function displayMap(){
  //Retrieve the latitude & longitude from the user via text inputs and pass it to the showMap() function to generate the map and display it.
  let lati = get("lati").value;
  let long = get("long").value;

  showMap(lat,lon);
  
}