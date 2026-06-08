
// charts PART //
//Data Source: https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9

//global variables
let data, info, output;

async function initCharts(){
  let link = "pool.json"; //https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=200";
  info = await fetch(link);
  data = await info.json();
  console.log(data);
}

function violationsByInspections(){
  //Create and initialize variables to keep a count of complaints by agency.
  let v0 = 0, v1 = 0, v2 = 0, v3 = 0, v4 = 0, v5 = 0, v6 = 0, o = 0;

  //Task 1: Traverse the data and increment the appropriate tally variable using the agency of the complaint. Use the tally variable "other" to capture all the other agencies.
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
  }else o++;
}
  //Task 2: Construct the chart data using the full agency name. (Hint: Go to the data source)//
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
  

  //Task 3: Retrieve the chart type from the user via the drop down menu
  let chartType = document.getElementById("chartType").value;

  //Task 4: Display the chart of the breakdown of complaints by agency.
  displayChart(chartData, "chart", chartType);
}

//Function that accepts the data, an id to the div to display the chart, and the type of chart
function displayChart( data, chart_id, chart_type ){
  c3.generate({
    bindto: `#${chart_id}`, // id of the div to display chart
    data: {
      columns: data, // data must be an array of arrays
      type: chart_type // type of chart (pie/line/bar)
    }
  });
}