import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

const mockfetch = 
configure({ adapter: new Adapter() });

global.localStorage = localStorageMock;
