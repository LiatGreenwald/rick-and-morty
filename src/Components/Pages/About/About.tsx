import "./About.css";

function About(): JSX.Element {
    const start = 1973;
    const end = new Date().getFullYear();
    return (
        <div className="About">
			 <p>
        This site shows a list of characters from Rick And Morty series retrieved from:<br/>
        https://rickandmortyapi.com/api/character
      </p>
      <p>
        The list is presented as a table or by cards with search & filter functionality, both by 
        status and by species 
      </p>
      <p>
        The site was created using React.ts as a single page application
      </p>  
      <p>
       All right to Liat Greenwald &copy;{start}-{end} :)
      </p>    

        </div>
    );
}

export default About;
