function storeLocationData(lat, lng) {

    const items = { ...localStorage };

    for (let item in items) {
        if (item === window.id) {
            let trip = JSON.parse(localStorage.getItem(item));
            trip.lat = lat;
            trip.lng = lng;
            localStorage.setItem(item, JSON.stringify(trip));
        };
    };
};

function storeImages(images) {

    const items = { ...localStorage };

    for (let item in items) {
        if (item === window.id) {
            let trip = JSON.parse(localStorage.getItem(item));
            for (let image of images) {
                trip.images.push(image);
            }
            localStorage.setItem(item, JSON.stringify(trip));
        };
    };
}

function storeMapImage(img) {

    const items = { ...localStorage };

    for (let item in items) {
        if (item === window.id) {
            let trip = JSON.parse(localStorage.getItem(item));
            trip.mapImage = img;
            localStorage.setItem(item, JSON.stringify(trip));
        };
    };
};

function storeToDoItem() {

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
            };
            trip.todos.push(todo);
            localStorage.setItem(item, JSON.stringify(trip));
        };
    };
    task.value = '';
    Client.displayTodos();
};

function toggleTodo(id) {

    const todoId = id;
    const items = { ...localStorage };

    for (let item in items) {
        //loop and find correct trip
        if (item === window.id) {
            let trip = JSON.parse(localStorage.getItem(item));
            if (trip.todos) {
                //loop and find correct todo
                for (let todo of trip.todos) {
                    if (todo.id === todoId) {
                        // If previously set to true, now set to false and vice-versa
                        if (todo.done === true) {
                            todo.done = false;
                        } else {
                            todo.done = true;
                        };
                        localStorage.setItem(item, JSON.stringify(trip));
                    };
                };
            };
        };
        Client.displayTodos();
    };
};

export { storeLocationData, storeImages, storeMapImage, storeToDoItem, toggleTodo }