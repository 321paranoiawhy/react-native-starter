import {create} from 'zustand';
import {persist, createJSONStorage, StateStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage: StateStorage = {
  getItem: async (name: string): Promise<string> => {
    console.log(name, 'has been retrieved');
    const data = (await AsyncStorage.getItem(name)) ?? '';

    console.log('data: ', data);
    return data;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    console.log(name, 'with value', value, 'has been saved');
    await AsyncStorage.setItem(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    console.log(name, 'has been deleted');
    await AsyncStorage.removeItem(name);
  }
};

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

export interface TodoState {
  todos: Todo[];
  add: (todo: Todo) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    set => ({
      todos: [],
      add: (todo: Todo) => {
        set(state => {
          console.log('state: ', state.todos);
          return {
            ...state,
            todos: [...state.todos, todo]
          };
        });
      },
      remove: (id: string) => {
        set(state => ({
          ...state,
          todos: state.todos.filter(todo => todo.id !== id)
        }));
      },
      toggle: (id: string) => {
        set(state => ({
          ...state,
          todos: state.todos.map(todo => (todo.id === id ? {...todo, completed: !todo.completed} : todo))
        }));
      }
    }),
    {
      name: 'todo',
      storage: createJSONStorage(() => storage)
    }
  )
);
