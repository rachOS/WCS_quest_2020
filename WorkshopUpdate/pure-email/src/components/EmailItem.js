import React from 'react'

function EmailItem(props){
    return (

        <div>
            <div class="email-item email-item-selected pure-g">
                <div class="pure-u">
                    <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" class="email-avatar" src="img/common/tilo-avatar.png"/>
                </div>
                <div class="pure-u-3-4">
                    <h5 class="email-name">Tilo Mitra</h5>
                    <h4 class="email-subject">Hello from Toronto</h4>
                    <p class="email-desc">
                    Hey, I just wanted to check in with you from Toronto. I got here earlier today.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EmailItem;