import { Link } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import './About.css'

/**
 * A React component that represents the About page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {

    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5002/about')  // Adjust the URL if your backend has a different base URL
            .then(response => response.json())
            .then(data => setAboutData(data));
    }, []);

    if (!aboutData) {
        return <p>Loading...</p>;
    }

  return (
    <div>
            <h1>{aboutData.title}</h1>
            {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <img src={aboutData.imageUrl} alt="About Us" />
        </div>
  )
}

// make this component available to be imported into any other file
export default About
