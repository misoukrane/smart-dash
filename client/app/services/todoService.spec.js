import serviceModule from './services';
import todoService from './todoService';

describe('todoService', () => {
  let service;

  beforeEach(window.module(serviceModule.name));
  beforeEach(inject((todoService) => {
    service = todoService;
  }));

  describe('service', () => {
    it('initially empty list', () => {
      expect(service.list('all')).to.be.empty;
    });

    it('Add one active element', () => {
      service.add('first todo');
      expect(service.listUndone()).to.eql([{name: 'first todo', done: false}]);
      expect(service.list('active')).to.eql([{name: 'first todo', done: false}]);
      expect(service.list('all')).to.eql([{name: 'first todo', done: false}]);
      expect(service.list('completed')).to.eql([]);
    });

    it('Add one completed element', () => {
      service.add('completed todo', 'completed');
      expect(service.listDone()).to.eql([{name: 'completed todo', done: true}]);
      expect(service.list('completed')).to.eql([{name: 'completed todo', done: true}]);
      expect(service.list('all')).to.eql([{name: 'completed todo', done: true}]);
      expect(service.list('active')).to.eql([]);
    });
  });
});
