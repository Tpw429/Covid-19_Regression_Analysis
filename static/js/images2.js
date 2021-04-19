var images2 = {
    Database:
        "Images/QuickDBD_vaccination.PNG", 
    Machine_learning_flow:
        "Images/Linear_Regression.PNG",
    Pairplot:
        "Images/data_preprocess_pairplot_gdp_vaccination_hdi.png",
    
    
};

var changeImage = function() {
    const value = this.options[this.selectedIndex].value;
    var imageURL = images2[value];
    document.getElementById("image").src = imageURL;
};

var imageList = document.getElementById("imageList");
imageList.addEventListener("change", changeImage, false);

document.getElementById("image").src = images2["default"];

