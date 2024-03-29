function parseScores(scoresString) {
   return scoresString.split(" ");
 }

function buildDistributionArray(scoresArray) {
   // TODO: Compete the function
   let distribution = [0, 0, 0, 0, 0];

  for (let i = 0; i < scoresArray.length; i++) {
    let score = parseInt(scoresArray[i]);
    if (score >= 90 && score <= 100) {
      distribution[0]++;
    } else if (score >= 80 && score <= 89) {
      distribution[1]++;
    } else if (score >= 70 && score <= 79) {
      distribution[2]++;
    } else if (score >= 60 && score <= 69) {
      distribution[3]++;
    } else if (score >= 0 && score <= 59) {
      distribution[4]++;
    }
  }
  return distribution;
}

function setTableContent(scoresString) {
   // TODO: Compete the function
   let scoresArray = parseScores(scoresString);
   let distribution = buildDistributionArray(scoresArray);
 
   let firstRow = document.getElementById("firstRow");
   let thirdRow = document.getElementById("thirdRow");
   for (let i = 0; i < distribution.length; i++) {
     let cell = firstRow.insertCell(-1);
     cell.innerHTML = "<div class='bar" + i + "' style='height:" + (distribution[i] * 10) + "px;'></div>";
     thirdRow.insertCell(-1).innerHTML = distribution[i];
   }
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");