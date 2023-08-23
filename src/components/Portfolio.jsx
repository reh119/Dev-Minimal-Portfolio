import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./portfolioItem";

// components have to be capital 
function Portfolio() {
    return (
        <div className = 'flex flex-col md:flex-row items-center justify-center'> 
            <div className ='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {portfolio.map(project => (
                <PortfolioItem
                    imageUrl={project.imageUrl}
                    stack={project.stack}
                    title={project.title} // iterate all projects
                    link={project.link}
                    />
            ))}
            </div>
        </div>
    )
   
}
export default Portfolio;

//