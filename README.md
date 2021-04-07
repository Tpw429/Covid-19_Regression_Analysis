# Final Project Overview

Covid-19 is a global pandemic which has rocked our society to its core. It has caused massive fatality, increased unemployment across the nation, and shutdown travel in many parts of the world. We have decided that as a team we will be analyzing Covid-19 data because of its relevance in everyday life around us. It has affected our health, our jobs, and our way of life. Over the next few weeks, our team will be focused on recognizing and analyzing trends due to covid-19. The team members of this project include: Akshaya Kamble, Ray Hunt, Thomas Watson, and Tyler Engalla. Throughout the project we will be collaborting and working with one another to divide and conquer the full affects of this pandemic.

During this catastrope, we saw new daily confirmed patients into hospitals soaring as high as 18,000 new patients per day. Shortly after Covid-19 vaccinations became public, we began to see the number of covid confirmed patients fall significantly. The figure below shows the trend described. 

![Covid-19_DailyCases.PNG](Resources/Covid-19_DailyCases.PNG)

In the figure above, we see that the newly confirmed Covid-19 patients tend to slowly increase with time up until January of 2021. In Feburary of 2021, we see a remarkable change in the shift of newly confirmed covid-19 patients per day. The case count begins to decrease rapdily with time, up until a support line is reached. This support line is very difficult to go below, because of factors such as available vaccinations, limited medical and economical resources available, and social distancing regulations changing. Although this is not a value we tabulated, it is important because it helps us understand the general health outline for Covid-19 during the past few months.

## Getting Started
In the first week of the project, we had to make decisions on which technologies would be used to help us analyze Covid-19 data. 

- For the final project we have selected Supervised Machine learning, and decided that we will use a Linear Regression Model to help us analyze data from Covid Vaccinations and GDP of all countries. This model will help predict distributions of the vaccines in each country. As we have continuous data we will identify the relation between data and make predictions. A diagram of our linear regression thought process has been included below.

![Linear_Regression.PNG](Resources/Linear_Regression.PNG)

For the Linear Regression model we have imported a new Folder into our main Repository called Machine_Learning_1. This Linear Regression model takes in data from our provisional database and outputs labels for input data. This model lays a strong foundation for how we will move forward in the coming weeks.

- Using quickdatabasedesigns.com we created a conceptual design for our mockup database that includes two tables. The first is the master_country table that stores the following columns iso_code (primary key), country_name, population, gdp. The second table will store the vaccination data by country. The results of our conceptual diagram is shown below.

![QuickDBD_vaccination.PNG](Resources/QuickDBD_vaccination.PNG)

Several other questions we considered were as follows:
- Which tools are the best fit for our project?
- What tool will be used for each section?

1) Data Cleaning and Analysis -
Jupyter Notebook and the Pandas library will be used to clean the data and perform an exploratory analysis. Further analysis will be completed using Python.

2) Database Storage -
Postgres is the database we intend to use, and we will integrate Flask to display the data.

3) Machine Learning -
SciKitLearn is the ML library we'll be using to create a linear regression. We'll train our algorithm with a histocal dataset on Covid Vaccinations and GDP of all countries.

4) Dashboard -
In addition to using a Flask template, we will also integrate JavaScript, HTML, and CSS with the Plotly visualization library to build an interactive webpage. In addition, we may include the D3 library to visualize our data geographically.

## The Plan Ahead

In our project, we will be analyzing if a country's GDP affects the rate at which vaccinations are being adminsitered and when we expect each country to achieve full vaccination. 

We will be collecting data from Kaggle around vaccination rates and combining that with GDP data gathered to apply to our linear regression model to answer questions such as how GDP affects vaccination rates and when we expect full vaccination or immunity within a country.

## Communication Protocols

During this project, we will be using several forms of communication to make sure information is being administered to everyone.

1. Slack - Sharing files and seeking team approvals
2. Class breakout rooms - Discussing if the segment rubrics are met and checking progress for each member.
3. Direct messaging with one another to make sure we are on the same page.
4. Github merges into the main file, whilst always saving backups of the original
5. Seeking team members approval on changes to main file

## Project outline
A flow chart to represent the project working
![](https://github.com/Tpw429/Covid-19_Regression_Analysis/blob/main/Database_Integration/project_outline.PNG)

## Data Source and Description

The data used in this project are included in the links below:

1. CDC Link: https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?name_desc=false
2. Kaggle Data: https://www.kaggle.com/gpreda/covid-world-vaccination-progress
3. World Bank Data: https://data.worldbank.org/indicator/NY.GDP.MKTP.CD
4. Our World In Data: https://github.com/owid/covid-19-data/tree/master/public/data
5. UNDP data for hdi : http://hdr.undp.org/en/data

These datasets include information about GDP, vaccations given, total vaccinations, vaccinations per day, country administered, date, and much more. These five data sources have been chosen based off accuracy, their input type, and completeness. Descriptions of our files are included below.

1. country_gdp - This file from world bank has GDP for all countries starting from year 1960 to 2019, Since we are using covid-19 data for the project we will use gdp from the year 2019.

2. country_vaccinations - This file from kaggle has vaccination data for all countries along with dates,As the vaccinations are still 
in progress some countries have advanced towards some small percent of population considered fully vaccinated while some countries no not have any data.

3. world_population - This file from world bank has populations for all countries from year 1960 to 2019. As per project requirements we have used data only for the year 2019.This data is added to the gdp data file

4. human_dev_index - This file from UNITED NATIONS DEVELOPMENT PROGRAMME has human development index(HDI) for all countries along with Human Development Type which are required for the project

5. Infection_Data - This file from github repository has updated data from Our World in Data.This file has data about the infections rates,deaths, new case,hospitalization rate, testing dates for different countries.We have filtered the dataset as per project requirements and included data like total cases and total deaths. 

## Questions we Hope to Answer

Given our strict timeline on this Covid-19 analysis, we would like to analyze how certain attributes such as age, Gross Domestic Product (GDP), Human Development Index (HDI), and population directly impact the spread of Covid-19. If time allows, we would also be interesting in creating a model to help us predict the spread of Covid-19 in the future. In addition, by the end of the project our visuals should be extremely user friendly and portray an effective message.

## Description of Data Exploration Phase
1. Importing data from websites in csv and excel formats
2. Cleaning data in Jupyter notebook using the following methods:

	a. Checking Data Types <br/>
	b. Replace NaN by 0 <br/>
	c. Removing Nan <br/>
	d. Outlier detection with help of scatter plot <br/>
	e. Editing column names by removing spaces <br/>
	f. Changing column names to match the SQL schema <br/>
	g. Filter required columns as some tables contain irrelevant data for project <br/>

3. Making Database connection to Postgres and sending the cleaned Data Frames from Jupyter notebook to Postgres
4. Joining tables in postgres to create master data files
5. Making database connection to Postgres to import the joined tables in Jupyter notebook as new DataFrame.
6. Using the Data Frame for machine learning 

## Description of the Analysis Phase
As data cleaning is the primary requirement for getting a perfect machine learning model we have incorporated the following methods for cleaning data in the individual files.For the project our main focus was to obtain data for GDP,HDI,population and people fully vaccinated for each country so that we can find relations between the data we have.Before sending the data to machine learning the data was cleaned, sent to postgres for storing and joining data as required.The data will help us determine the relation between HDI vs Total cases per million, HDI vs Population,GDP per Capita vs Total Cases per Million,Population Density vs Total Cases per Million,Median Age vs Total Deaths,Aged 70 or older vs Total Deaths,GDP vs Vaccination Rates,HDI vs Vaccincation Rates.
In some columns the null values are droped because we require data for the respective countries and in some columns the null values were replaced by 0 as the model will not work with null values and 0 can be usefull in some cases.The column names were changed in some files to match the exact column name in other files as these are required for joining data in postgres.The required columns are kept and some unwanted were deleted,Outliers were determeined by plotting scatter plots and chaging the axis range accordingly.

The below file have details about the tranformations done individually.

1. country_gdp
This file is downloaded from the worldbank.The NaN are replaced by 0, the column names are changed to match the schema in SQL, deleting columns and keeping only required columns.Saving the file country_master.csv to Cleaned Data folder.

2. country_vaccinations
This file is downloaded from kaggle. Dropping the NaN data as we need countries with available data only,changing names of columns to match schema in SQL,deleting columns and keeping only required columns,Saving the file vaccination_table.csv to Cleaned Data folder.

3. world_population
This file is downloaded from world bank.The only required data of population from 2019 is saved into country_master.csv using vlookup. 

4. human_dev_index
This file is downloaded from UNITED NATIONS DEVELOPMENT PROGRAMME.Changing names of columns to match schema in SQL, droping rows with null values.Saving the file human_dev_index.csv to Cleaned Data folder.

5. Infection_Data
This file from github repository has updated data from Our World in Data.Filtered data with date,changing names of columns to match schema in SQL,dropping null values.Checking outliers using scatter plot.Saving the file as Infection_Clean.csv to Cleaned Data folder 

## Machine Learning Model

We chose to perform Regression Analysis so that we can see how Vaccination Rates are either positively or negatively correlated with things like GDP, HDI, and Population. This would allow us to easily visualize this relationship and also give us an idea of how strongly they’re having an impact on Vaccinations within different countries. 

For our Regression Analysis, there wasn’t a need to split the data for training and testing sets. However, we did split the data into our independent and dependent variables to see how one features affects or how correlated it is with the other. 
Vaccination Rates was chosen as our dependent feature or data set, and GDP, HDI, and Population were chosen as our main independent features to see how they each affected Vaccination Rates. 

For the Vaccination Data, we started by joining this Vaccination table with the GDP table on “country_name”. There were multiple months of dates, but we only needed one to perform the regression analysis. So we filtered to get the date that gave us the most countries tied to it with the least amount of null values across the features. Then we wanted to select the feature that gave us an idea at the rate countries were getting vaccinated, so we took “total_vaccination_per_hundred” and regressed it against other features such as GDP, HDI, Life Expectancy at Birth, and Population. We scaled the data, but found it wasn’t necessary for our regressions to take place or didn't add noticable optimization. 

Limitations with this model would be around outliers having a huge effect that that skews our findings. As well, we’re only comparing two variables against each other at a time. So this gives us of an idea of the relationship between the two but it’s not a complete picture of the relationship and what else might be impacting it.


## Database Integration

The following files are downloaded from the websites and cleaned in Jupyter notebook for the project. The population data for 2019 is added to the country_gdp.csv file using VLOOKUP. All these files are available in the [Resources folder][1]

1. country_gdp.csv
2. country_vaccinations.csv
3. human_dev_index.csv
4. Infection_Data
5. world_population.csv

The cleaned data files are sent from jupyter notebook using Pandas and Python libraries psycopg2 and sqlalchemy to pgadmin. All the cleaned data files are available in the [Cleaned Data folder][2]

1. country_master.csv
2. vaccination_table.csv
3. human_dev_index.csv
4. Infection_Clean.csv

The Database stores static data that is sent from Jupyter notebook. The following files are stored in the pgadmin Database as tables. 

1. country_master
2. vaccination_table
3. human_dev_index

The following tables are created by joining the data from the above files
1. gdp_vaccination_join
2. gdp_vaccination_hdi
3. country_group

These joined tables are sent to jupyter notebook using Pandas and Python libraries psycopg2 and sqlalchemy to use further for machine learning.Snapshots of Database integration are available in the [Database Integration folder][3]


## Visualizations, Storyboard, and Dashboard

Portraying results is important because it brings weight to our analysis. Images, interactive figures, Github, and Google Slides are all powerful tools which can help us share our findings to the masses. 

The first aspect of the Covid-19 analysis we were interested in reviewing was how case count stacked up against Countries GDP. We predicted that as GDP increased in countries total cases would decrease. We thought this would be the case because countries with more money would have access to better vaccines, masks, and hospital equipment. However, when we graphed it out the results showed the exact opposite! In fact, case counts per million rises substantially as GDP increases. We think these results might have been caused by countries with lower GDP not reporting cases or trading interactions substantially increase as GDP increases for a country.

![GDPvscases.PNG](Resources/GDPvscases.PNG)

This visualization gives us insight on the amount of vaccinations given to a particular country in comparison to their population. As you can see in certain countries, more shots have been administered than the total population size. Often times, lower population also correlates to a lower total country GDP. For this reason, as the slope of the line of this graph suggests, people may actually be safer in countries with a smaller population. This graph gives us insight into the graph we saw before about GDP vs. case count. Smaller and countries with a lower GDP may actually be a safer place to live!

![VaccinationvsPop](Resources/VaccinationvsPop.PNG)

One of the things we were quite interesting in exploring during this project was the relation between age and death rates. We believed the older the individual, the more likely you were to die of covid. To put this assumption to the test, we created a graph which shows how each year over 70 dramatically increases your chance of dying from covid. As you can see from the graph on the right, the slope of deaths per million people is pretty steep (around 85 more deaths per million each year over 70). 

![70orolder.PNG](Resources/70orolder.PNG)

Setting the stage for what we hope to accomplish by the end of the project, we will be setting forth a blueprint with a description of our elements of what we hope to achieve. These ideas are shown below.

In the Storyboard we plan to use the following visualizations to add value to our final project.

1) World Map - Our first chart will be an interactive map of the world with data for select countries. Based on filter selection, a tooltip will appear on hover-over to display that country’s name, population and  GDP, Health Data Index or total vaccinations rate.

2) Bubble Chart - A drop-down menu will let the user select the top 10 countries by GDP,  bottom 10 countries by GDP or all countries. When the selection is made the bubble chart will update displaying countries as bubbles. The Y axis is population, the X axis is GDP and the size of the bubble is determined by total vaccinations per hundred.

3) Heatmap -Another interesting idea we had was with heatmaps are trying to illustrate the covid hotspots throughout the world. This would be based on Covid-19 cases caught in a certain density.

4) Finally, we will use static images of ML results to demonstrate the output of our ML models.

What tools will be used to create this dashboard?
- For this project we plan to integrate several tools to create these visualizations. For the majority of the project we have been using Python to sift through our data. Therefore, it makes sense for us to create crisper images with Seaborn for a better user experience. In addition, for the world map we were thinking of using GeoJSON to make it an interactive experience with our user. These are steps we plan to integrate in the next several weeks.

Blueprint for Dashboard

- We plan to make our Dashbaord browser based.
- We will build it using D3.js with the buildcharts() function.
- Use JavaScript to populate and read a drop-down menu selection and update a bubble chart.
- Deploy our project to GitHub Pages

## [Google Slides Covid-19 Regression Analysis Presentation](https://docs.google.com/presentation/d/160j7slMeWWwnzbZd6SgaqRAt3yMQrFRDSncezrBMbZ0/edit?usp=sharing)

[1]: https://github.com/Tpw429/Covid-19_Regression_Analysis/tree/main/Resources

[2]: https://github.com/Tpw429/Covid-19_Regression_Analysis/tree/main/Cleaned%20Data

[3]: https://github.com/Tpw429/Covid-19_Regression_Analysis/tree/main/Database_Integration
