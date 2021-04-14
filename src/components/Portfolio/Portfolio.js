import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import '../Home/style.css';

function Portfolio(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="portfolio-header">Portfolio</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <ProjectCard 
                    title={"Night Out"}
                    imagesrc={`${process.env.PUBLIC_URL}/assets/images/NightOut.png`}
                    description={"For the undecided couple, group of friends, or family members that don't know what to do on their Night Out. This web-based application lets users search for Breweries and Events by city. Not satifsfied with your results? Simply hit the search button again, as each search is randomized!"}
                    githubLink={"https://github.com/jwhendershott/NightOut.git"}
                    deployedLink={"https://jwhendershott.github.io/NightOut"}
                    />
                </div>
                <div className="col-sm-6">
                    <ProjectCard 
                    title={"Resu-Make"}
                    imagesrc={`${process.env.PUBLIC_URL}/assets/images/Resu-Make.png`}
                    description={"Want an easy way to create a resume and easily access it on the web? That's where Resu-Make comes in! This application guides you in making a resume and allows for you to download it as a PDF after completion. You don't even have to be logged in to view your resume. Simply type in /resume/@youremail@example.com onto the url and you'll be directed to it!"}
                    githubLink={"https://github.com/UT-final-project/group1-final-project"}
                    deployedLink={"https://resumake-pro.herokuapp.com/"}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <ProjectCard 
                    title={"Note Taker"}
                    imagesrc={`${process.env.PUBLIC_URL}/assets/images/NoteTaker.png`}
                    description={"An application that lets you take down notes with a Title and Body. Clicking on the floppy disk on the upper-right saves your note. Notes can be viewed again by clicking on them on the left-hand side of the screen."}
                    githubLink={"https://github.com/charliecan2/NoteTaker.git"}
                    deployedLink={"https://note-taker-express-cc.herokuapp.com/"}
                    />
                </div>
                <div className="col-sm-6">
                    <ProjectCard 
                    title={"Weather Board"}
                    imagesrc={`${process.env.PUBLIC_URL}/assets/images/WeatherBoard.png`}
                    description={"This Weather Board application lets you see the current Weather in any city you'd like. It even gives you a 5-day forecast to see what the upcoming week will be like! Don't see a city you're nearby? No worries. You can search for a new city in the search bar and your desired city will then show up in the city selection."}
                    githubLink={"https://github.com/charliecan2/WeatherDashboard.git"}
                    deployedLink={"https://charliecan2.github.io/WeatherDashboard/"}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <ProjectCard 
                    title={"Employee Directory"}
                    imagesrc={`${process.env.PUBLIC_URL}/assets/images/EmployeeDirectory.png`}
                    description={"A react application that allows employers/managers to look up their employees. Users can sort their employees by their first/last name in alphabetical order and can even look up a specific employee by typing thier first/last name onto the search bar."}
                    githubLink={"https://github.com/charliecan2/employee-directory"}
                    deployedLink={"https://charliecan2.github.io/employee-directory/"}
                    />
                </div>
                <div className="col-sm-6">
                    <ProjectCard 
                    title={"Workout Log"}
                    imagesrc={`${process.env.PUBLIC_URL}/assets/images/WorkoutTracker.png`}
                    description={"This Workout Tracker allows users to log their exercises and review what their workout session looked like. Total weight lifted is displayed on a bar chart and the total workout duration is shown as well. The user's different workouts are also displayed and divided in a pie chart."}
                    githubLink={"https://github.com/charliecan2/WorkoutLog"}
                    deployedLink={"https://workout-log-app.herokuapp.com/"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Portfolio