import React from 'react';
import './Avatar.css';

function Avatar(avatar){

    const name = avatar.name;
    const image = avatar.image;
    const quote = avatar.quote;
    const imgClass = "avatar";
    const quoteClass = "quote";
    const nameClass = "name";
    const globalClass = "global";

    const testQuote = () => quote ? " Your clothes. Give them to me, now." : "Nice night for a walk, eh?";

    
    return(
        <div className={globalClass}>
            <img className={imgClass} src={image} />
            <div>
                <div className={nameClass}>
                    {name}
                </div>
                <blockquote className={quoteClass}>
                    {testQuote}
                </blockquote>
            </div>
        </div>

    )
}

export default Avatar;