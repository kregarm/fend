function storeLocationData (lat, lng) {
    const items = { ...localStorage };
    for (let item in items) {
        if (item === window.id) {
            let trip = JSON.parse(localStorage.getItem(item));
            trip.lat = lat; 
            trip.lng = lng;
            localStorage.setItem(item, JSON.stringify(trip));
        };
    };
}

function storeImages (images) {
    const items = { ...localStorage };
    for (let item in items) {
        if (item === window.id) {
            let trip = JSON.parse(localStorage.getItem(item));
            for (let image of images) {
                trip.images.push(image)
            }
            localStorage.setItem(item, JSON.stringify(trip));
        };
    };
}

function storeMapImage (img) {
    const items = { ...localStorage };
    for (let item in items) {
        if (item === window.id) {
            let trip = JSON.parse(localStorage.getItem(item));
            trip.mapImage = img;
            localStorage.setItem(item, JSON.stringify(trip));
        };
    };
}

function storeToDoItem(){
    const task = document.getElementById('todo-input');
    const items = { ...localStorage };
    for (let item in items) {
        if (item === window.id) {
            let todoId = uuidv1();
            let trip = JSON.parse(localStorage.getItem(item));
            let todo = {
                'id': todoId,
                'task': task.value,
                'done': false
            }
            trip.todos.push(todo);
            localStorage.setItem(item, JSON.stringify(trip));
        };
    };
    task.value = '';
    // Call displayTodos function
}

export{ storeLocationData, storeImages, storeMapImage, storeToDoItem }