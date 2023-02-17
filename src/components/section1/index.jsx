import React, {useRef, useEffect} from 'react'

// style
import {Body} from './style'

function Index({setVisible}) {
    const refrence = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(refrence.current);
    }, []);

    return (
        <Body>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus ligula, vulputate nec auctor et, euismod et quam.</p>
            <p ref={refrence}>Morbi porttitor pellentesque ante, non tincidunt tortor placerat eu. Quisque eu erat interdum, ultricies augue cursus, tempor justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet bibendum turpis. Donec sit amet ante sodales, mattis massa ut, consequat orci. Maecenas ut felis vel nunc maximus placerat quis sollicitudin magna. Proin in mi a ligula porta imperdiet vitae et purus.</p>
        </Body>
    )
}

export default Index