# TODO-LIST-WEB-APP
A simple program that let the user add tasks, delete and search for tasks. I created this when i understood the DOM in JavaScript, document.createElement() and element.remove() stuff.

# 📝 Daily Todo-List App  
*A sleek, interactive todo-list with search functionality built with HTML, Tailwind CSS, and JavaScript!*  

![Todo App Preview](https://github.com/Levisonmsachi/TODO-LIST-WEB-APP/blob/main/Screenshot%20(128).png)   

---

## ✨ Features  
✅ **Add tasks** with a clean input interface  
🔍 **Search tasks** in real-time  
❌ **Delete tasks** with one click  
📱 **Fully responsive** design (works on mobile & desktop)  
🎨 **Modern UI** powered by Tailwind CSS  

---

## 🛠️ Tech Stack  

| Frontend       | Description                          |
|----------------|--------------------------------------|
| 📜 **HTML5**   | Structure & semantics                |
| 🎨 **Tailwind CSS** | Utility-first styling framework |
| ⚡ **JavaScript**  | Dynamic functionality           |

---

## 💻 Code Highlights  

### Adding a Task  
```javascript
addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task === "") return alert("Task cannot be empty!");
  
  // Create task element
  const taskItem = document.createElement("div");
  taskItem.className = "flex justify-between items-center bg-gray-200 px-4 py-2 rounded";
  // ... (see full code for details)
});
