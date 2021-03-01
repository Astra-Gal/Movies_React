import React, { Children } from 'react';

const Movie = ({ name, url, Children }) => {
    return (
        <>
            <p>{ name }</p>
            <a href={url}>{ url }</a>
        </>
    )
}
export default Movie;