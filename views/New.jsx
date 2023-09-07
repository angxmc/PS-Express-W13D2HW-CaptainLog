const React = require('react');

function New(){
    return(
        <form>
            Title: <input type='text' name='title'/>
            Entry: <textarea/>
            Ship is Broken: <input type='checkbox' name='shipIsBroken'/>
            <input type='submit'/>

        </form>
    )
}