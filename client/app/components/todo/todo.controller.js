class TodoController {
  constructor() {
    this.todoItems = [
      {name: 'Item 1', done: false},
      {name: 'Item 2', done: false},
    ];
  }

  addItem() {
    this.item.done = false;
    var item = angular.copy(this.item);
    this.todoItems.push(item);

    // Clear the form.
    this.item.name = '';
    this.todoForm.$setPristine();
    this.todoForm.$setUntouched();
  }

  markDone(todoItem) {
    console.log(todoItem);
    todoItem.done = true;
  }
}

export default TodoController;
