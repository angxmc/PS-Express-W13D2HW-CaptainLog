const React = require('react')

function Edit(){
    return(
        <div>
            <h3>Edit Log</h3>
            <form action={`/logs/${log._id}?_method=PUT`} method='POST'>
                Title:<input type='text' name='title' defaultValue={log.title} required/>

                Entry: 
                <input type='text' name='entry' defaultValue={log.entry} required/>

                <input type='submit' value="Update"/>

            </form>

        </div>
    )
}

module.exports = Edit;