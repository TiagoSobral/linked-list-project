# 📚 Linked Lists Project (The Odin Project)

This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum.  
The goal is to build a simple **Linked List** data structure in JavaScript, along with various utility methods.

## 🚀 Features

The project implements two main classes:

- **`Node`**  
  Represents an individual node in the list.  
  - `value` → stores the data.  
  - `nextNode` → points to the next node (defaults to `null`).  

- **`LinkedList`**  
  Represents the full list. Contains methods to manipulate and query the nodes.  


## 🛠️ Implemented Methods

1. **`append(value)`** → Adds a new node containing `value` to the end of the list.  
2. **`prepend(value)`** → Adds a new node containing `value` to the start of the list.  
3. **`size()`** → Returns the total number of nodes in the list.  
4. **`head()`** → Returns the first node in the list.  
5. **`tail()`** → Returns the last node in the list.  
6. **`at(index)`** → Returns the node at the given index.  
7. **`pop()`** → Removes the last element from the list.  
8. **`contains(value)`** → Returns `true` if the passed in value exists in the list, otherwise `false`.  
9. **`find(value)`** → Returns the index of the node containing `value`, or `null` if not found.  
10. **`toString()`** → Returns a string representation of the list.  
    - Example:  
      ```
      ( 10 ) -> ( 20 ) -> ( 30 ) -> null
      ```

### 🔥 Extra Credit
11. **`insertAt(value, index)`** → Inserts a new node with the provided `value` at the given `index`.  
12. **`removeAt(index)`** → Removes the node at the given `index`.  




