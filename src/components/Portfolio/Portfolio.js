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
                <div className="col-md-6">
                    <ProjectCard 
                    title={"Night Out"}
                    imagesrc={"https://raw.githubusercontent.com/charliecan2/charliecan2.github.io/main/images/screenshots/NightOut.png"}
                    description={"For the undecided couple, group of friends, or family members that don't know what to do on their Night Out. This web-based application lets users search for Breweries and Events by city. Not satifsfied with your results? Simply hit the search button again, as each search is randomized!"}
                    githubLink={"https://github.com/jwhendershott/NightOut.git"}
                    deployedLink={"https://jwhendershott.github.io/NightOut"}
                    />
                </div>
                <div className="col-md-6">
                    <ProjectCard 
                    title={"Movie Blog"}
                    imagesrc={"https://raw.githubusercontent.com/charliecan2/charliecan2.github.io/main/images/screenshots/MovieBlog.png"}
                    description={"The one stop website for Movie/TV Show enthusiasts. Movie Blog lets you search for where your favorite movies or shows are currently streaming. You can also write a mini-review by leaving a comment on the comments section of whatever movie you searched."}
                    githubLink={"https://github.com/dcastelline/Movie-Blog.git"}
                    deployedLink={"https://basic-movie-blog.herokuapp.com/"}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <ProjectCard 
                    title={"Note Taker"}
                    imagesrc={"https://raw.githubusercontent.com/charliecan2/charliecan2.github.io/main/images/screenshots/NoteTaker.png"}
                    description={"An application that lets you take down notes with a Title and Body. Clicking on the floppy disk on the upper-right saves your note. Notes can be viewed again by clicking on them on the left-hand side of the screen."}
                    githubLink={"https://github.com/charliecan2/NoteTaker.git"}
                    deployedLink={"https://note-taker-express-cc.herokuapp.com/"}
                    />
                </div>
                <div className="col-md-6">
                    <ProjectCard 
                    title={"Weather Board"}
                    imagesrc={"https://raw.githubusercontent.com/charliecan2/charliecan2.github.io/main/images/screenshots/WeatherBoard.png"}
                    description={"This Weather Board application lets you see the current Weather in any city you'd like. It even gives you a 5-day forecast to see what the upcoming week will be like! Don't see a city you're nearby? No worries. You can search for a new city in the search bar and your desired city will then show up in the city selection."}
                    githubLink={"https://github.com/charliecan2/WeatherDashboard.git"}
                    deployedLink={"https://charliecan2.github.io/WeatherDashboard/"}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <ProjectCard 
                    title={"Employee Directory"}
                    imagesrc={"https://raw.githubusercontent.com/charliecan2/charliecan2.github.io/main/images/screenshots/EmployeeDirecotory.png"}
                    description={"A react application that allows employers/managers to look up their employees. Users can sort their employees by their first/last name in alphabetical order and can even look up a specific employee by typing thier first/last name onto the search bar."}
                    githubLink={"https://github.com/charliecan2/employee-directory"}
                    deployedLink={"https://charliecan2.github.io/employee-directory/"}
                    />
                </div>
                <div className="col-md-6">
                    <ProjectCard 
                    title={"Workout Log"}
                    imagesrc={"https://raw.githubusercontent.com/charliecan2/charliecan2.github.io/main/images/screenshots/WorkoutTracker.png"}
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