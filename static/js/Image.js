var images = {
    GDP:
        "Images/GDP_vs_VaccinationRate.PNG", 
    HDI:
        "Images/HDI_vs_VaccinationRate.PNG",
    HDI_Rank:
        "Images/HDIRank_vs_VaccinationRate.PNG",
    Life_Expectancy: 
        "Images/LifeExpectancy_vs_VaccinationRate.PNG",
    Population: 
        "Images/Population_vs_VaccinationRate.PNG",
    Initial_Analysis: 
        "Images/data_preprocess_pairplot_gdp_vaccination_hdi.png"
};

var changeImage = function() {
    const value = this.options[this.selectedIndex].value;
    var imageURL = images[value];
    document.getElementById("image").src = imageURL;
};

var imageList = document.getElementById("imageList");
imageList.addEventListener("change", changeImage, false);

document.getElementById("image").src = images["default"];

