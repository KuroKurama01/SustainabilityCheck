var a_eva_transport = [];
var a_eva_stress = [];

function showTransportEva(evaluation) {
  const transEvaOut = document.getElementById("tranportEvaOut");
  transEvaOut.textContent = evaluation;
  a_eva_transport.push(evaluation);
  sessionStorage.setItem("Transport", JSON.stringify(a_eva_transport));
}

function showStressEva(evaluation) {
  const stressEvaOut = document.getElementById("stressEvaOut");
  stressEvaOut.textContent = evaluation;
  a_eva_stress.push(evaluation);
  sessionStorage.setItem("Stress", JSON.stringify(a_eva_stress));
}

function showTransEvaSpan() {
  const transEvaOut = document.getElementById("TransEvaOutSpan");
  a_eva_transport = JSON.parse(sessionStorage.getItem("Transport"));
  console.log(a_eva_transport);
  for (const evaluation of a_eva_transport) {
    const node = document.createElement("p");
    const textnode = document.createTextNode(evaluation);
    node.appendChild(textnode);
    transEvaOut.appendChild(node);
  }
}

function showStressEvaSpan() {
  const stressEvaOut = document.getElementById("StressEvaOutSpan");
  a_eva_stress = JSON.parse(sessionStorage.getItem("Stress"));
  console.log(a_eva_stress);
  for (const evaluation of a_eva_stress) {
    const node = document.createElement("p");
    const textnode = document.createTextNode(evaluation);
    node.appendChild(textnode);
    stressEvaOut.appendChild(node);
  }
}
