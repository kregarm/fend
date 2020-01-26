function dismissModal() {
    const items = { ...localStorage };

    /*
    This won't work correctly in dev env if you don't have
    at least two trips stored as webpack ads it's own entry
    to localstorage. This isn't an issue with prod build.
    */
    if (Object.entries(items).length === 0 && items.constructor === Object) {
        alert("Cannot close this modal. You don't have any trips stored.")
    } else {
        for (let item in items) {
            if (item != 'loglevel:webpack-dev-server') {
                
                /*
                Passing this as an object beacuse tripswitch was designed to take the *value*
                from the selectbox in HTML
                */
                let tripId = {'value': item};
                Client.tripSwitch(tripId);
                
                //Remove modal
                let element = document.getElementById('intro-modal');
                element.parentNode.removeChild(element);
                
                //Display a dropdown with all trips stored 
                Client.displayTripsFromLocalStorage();
                break;
            }
        }
    }
}

export { dismissModal } 