var images = {
    GDP:
        "Images/GDP_vs_VaccinationRate.png", 
    HDI:
        "Images/HDI_vs_VaccinationRate.png",
    HDI_Rank:
        "Images/HDIRank_vs_VaccinationRate.png",
    Life_Expectancy: 
        "Images/LifeExpectancy_vs_VaccinationRate.png",
    Population: 
        "Images/Population_vs_VaccinationRate.png",
    Initial_Analysis: 
        "Images/pairplot_gdp_vaccination_hdi.png",
};

var changeImage = function() {
    const value = this.options[this.selectedIndex].value;
    var imageURL = images[value];
    document.getElementById("image").src = imageURL;
};

var imageList = document.getElementById("imageList");
imageList.addEventListener("change", changeImage, false);

document.getElementById("image").src = images["default"];

