var maxkm_v = 3;
var maxkm_e = 2;
var maxkm_f = 1;
var evaOutput = "";

function evaluateTransport(i_km, means_name) {
  var means = {
    maxkm: 0,
    name: ""
  };

  console.log(i_km + " " + means_name);

  if (means_name === "Auto (V)") {
    means.maxkm = maxkm_v;
    means.name = "Auto mit Verbrennungsmotor";
  } else if (means_name === "Auto (E)") {
    means.maxkm = maxkm_e;
    means.name = "Auto mit Elektromotor)";
  } else if (means_name === "Flugzeug") {
    means.maxkm = maxkm_f;
    means.name = "Flugzeug";
  } else {
    means.maxkm = 0;
    means.name = "undefined";
  }

  if (i_km === "") {
    alert("Bitte eine gültige KM-Zahl eingeben!");
    // } else if (!Number.isInteger(i_km)) {
    //   alert("Bitte eine Zahl eingeben!");
  } else if (!Number.isInteger(parseInt(i_km, 10))) {
    alert("Bitte eine Zahl eingeben!");
  } else {
    if (i_km < 0.9 * means.maxkm) {
      evaOutput =
        "Das Zurücklegen von " +
        i_km +
        " km mit einem " +
        means.name +
        " ist im Rahmen einer nachhaltigen Lebensweise nach den Sustainable Development Goals der UN vereinbar.";
      // alert(
      //   "Das Zurücklegen von " +
      //     i_km +
      //     " km mit dem " +
      //     means.name +
      //     " ist im Rahmen einer nachhaltigen Lebensweise nach den Sustainable Development Goals der UN vereinbar."
      // );
    } else if (i_km > means.maxkm) {
      evaOutput =
        "Das Zurücklegen von " +
        i_km +
        " km mit einem " +
        means.name +
        " ist im Rahmen einer nachhaltigen Lebensweise nach den Sustainable Development Goals der UN nicht vereinbar.";
      // alert(
      //   "Das Zurücklegen von " +
      //     i_km +
      //     " km mit dem " +
      //     means.name +              " ist im Rahmen einer nachhaltigen Lebensweise nach den Sustainable Development Goals der UN nicht vereinbar."
      // );
    } else {
      evaOutput =
        "Das Zurücklegen von " +
        i_km +
        " km mit einem " +
        means.name +
        " ist im Rahmen einer nachhaltigen Lebensweise nach den Sustainable Development Goals der UN zwar vereinbar, jedoch sollte über eine Reduzierung der Nutzung überdacht werden.";
      // alert(
      //   "Das Zurücklegen von " +
      //     i_km +
      //     " km mit dem " +
      //     means.name +
      //     " ist im Rahmen einer nachhaltigen Lebensweise nach den Sustainable Development Goals der UN zwar vereinbar, jedoch sollte über eine Reduzierung der Nutzung überdacht werden."
      // );
    }
  }
  //console.log(evaOutput);
  return evaOutput;
}

var stressOut;
function evaluateStress(pStressGrade) {
  if (pStressGrade < 0) {
    alert("Stresslevel ungültig!");
  } else if (pStressGrade < 3) {
    stressOut =
      "Ihr Lebensstil ist sehr entspannt. Nach den SDG der UN entspricht ihr Lebensstil einem gesunden Standart!";
  } else if (pStressGrade < 5) {
    stressOut =
      "Ihr Stresslevel ist nicht kritisch. Nach den SDG der UN ist der Stress in Ihrem Alltag noch immer verträglich, Sie sollten das Stresslevel jedoch halten.";
  } else if (pStressGrade < 7) {
    stressOut =
      "Ihr Stresslevel übersteigt das gesunde Maß ein wenig, reduzieren Sie Ihren Stress um Ihr Leben nach den Maßen der SDG der UN gesünder zu gestalten!";
  } else if (pStressGrade <= 10) {
    stressOut =
      "Ihr Stresslevel übersteigt die Kriterien eines gesunden Lebens nach den SDG der UN stark. Sie müssen Ihren Stress dringend reduzieren um ein gesundes Leben zu führen!";
  }

  return stressOut;
}
