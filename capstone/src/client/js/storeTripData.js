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
            let todoId = uuid();
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
    Client.displayTodos();
}

function editTodoItem() {
    //get id for todo
    //get state - is it on of off? -> can I use value/checked anything like it?

    // Loop thru all trips
    // Loop thru all tasks
    // Find and update task
    // Redraw all tasks
}

export{ storeLocationData, storeImages, storeMapImage, storeToDoItem }