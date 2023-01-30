import { useEffect, useState } from 'react'

const Maps = () => {
    const [map, setMap] = useState();

    const loadMaps = () => {
        fetch('https://valorant-api.com/v1/maps')
            .then((response) => response.json())
            .then((json) => console.log(() => {
                for (let map in json.data) {
                    console.log(json.data.displayName)
                }
            }
        ))};

    useEffect(() => {loadMaps()});

    return (
        <div>Maps</div>
    )

}

export default Maps;