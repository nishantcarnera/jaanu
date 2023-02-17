import React, {useState} from 'react'

//img
import picture1 from '../../assets/picture1-1X.jpg'
import picture2 from '../../assets/picture2-1X.jpg'

// style
import {Banner, Text} from './style'

function Index() {

    const [image, setImage] = useState(picture1)

    return (
        <Banner>
            <div>
                <img src={image} alt="" /> 
                <Text onClick={() => setImage(picture1)}>View Picture 1</Text>
                <Text onClick={() => setImage(picture2)}>View Picture 2</Text>
            </div>
        </Banner>
    )
}

export default Index
