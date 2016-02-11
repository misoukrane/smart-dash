class TodoController {
  constructor(todoService) {
    'ngInject';
    this.todoService = todoService;
    this.filter = 'active';
    this.editing = false;
    this.itemToUpdate = null;
    this.itemName = '';
  }

  addItem() {
    this.todoService.add(this.itemName, this.filter);
    this.clearForm();
  }

  toggle(todoItem) {
    this.todoService.toggle(todoItem);
  }

  edit(todoItem) {
    this.editing = true;
    this.itemToUpdate = todoItem;
    console.log(todoItem);
    this.itemName = this.itemToUpdate.name;
  }

  updateItem() {
    this.todoService.update(this.itemToUpdate, this.itemName);
    this.editing = false;
    this.itemToUpdate = null;
    this.clearForm();
  }

  submit() {
    if (this.editing) {
      this.updateItem();
    } else {
      this.addItem();
    }
  }

  clearForm() {
    this.itemName = '';
    this.todoForm.$setPristine();
    this.todoForm.$setUntouched();
  }
}

export default TodoController;
