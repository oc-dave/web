const phoneNumberInput = document.getElementById("phone");
const suggestionsContainer = document.getElementById("suggestions-container");

phoneNumberInput.addEventListener("input", () => {
  const phoneNumber = phoneNumberInput.value;
  const mtnPattern = /^(\+234|0)(803|806|810|813|814|816|903|906)/;
  const gloPattern =
    /^(\+234|0)(805|807|811|815|905|0705|0805|0807|0811|0815|0905)/;
  const airtelPattern =
    /^(\+234|0)(802|803|807|808|812|902|0701|0708|0802|0808|0812|0902)/;
  const etisalatPattern = /^(\+234|0)(809|810|818|908|0818|0908)/;

  const suggestions = [];

  if (mtnPattern.test(phoneNumber)) {
    suggestions.push({
      provider: "MTN",
      icon: "/home/oc_dave/Desktop/C17 JavaScript/WEBSITES/PHONIE/icons/mtn-icon.png"
    });
  }

  if (gloPattern.test(phoneNumber)) {
    suggestions.push({
      provider: "Glo",
      icon: "/home/oc_dave/Desktop/C17 JavaScript/WEBSITES/PHONIE/icons/etisalat-icon.png"
    });
  }

  if (airtelPattern.test(phoneNumber)) {
    suggestions.push({
      provider: "Airtel",
      icon: "/home/oc_dave/Desktop/C17 JavaScript/WEBSITES/PHONIE/icons/airtel-icon.png"
    });
  }

  if (etisalatPattern.test(phoneNumber)) {
    suggestions.push({
      provider: "Etisalat",
      icon: "/home/oc_dave/Desktop/C17 JavaScript/WEBSITES/PHONIE/icons/etisalat-icon.png"
    });
  }

  updateSuggestions(suggestions);
});

function updateSuggestions(suggestions) {
  const html = suggestions
    .map(
      (suggestion) => `
        <div class="suggestion" onclick="selectSuggestion('${suggestion.provider}')">
            <img src="${suggestion.icon}" alt="${suggestion.provider} icon">
            ${suggestion.provider}
        </div>
    `
    )
    .join("");

  suggestionsContainer.innerHTML = html;

  if (suggestions.length > 0) {
    suggestionsContainer.style.display = "block";
  } else {
    suggestionsContainer.style.display = "none";
  }
}

function selectSuggestion(provider) {
  phoneNumberInput.value = `+234${getProviderCode(provider)}`;
  suggestionsContainer.style.display = "none";
}

function getProviderCode(provider) {
  switch (provider) {
    case "MTN":
      return "803";
    case "Glo":
      return "805";
    case "Airtel":
      return "802";
    case "Etisalat":
      return "809";
    default:
      return "";
  }
}
