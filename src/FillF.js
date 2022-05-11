import "./App1.css";
import { useState } from "react";

function App() {
  const [userId, setUserId] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [msg,setMsg]=useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
          userId: userId,
          id: id,
          title: title,
          body: body,
        }),
      });
    
      let resJson = await res.json();
      if (res.status === 200) {
        setUserId("");
        setId("");
        setTitle("");
        setBody("");
        setMsg("Filled the form successfully");
      } else {
        setMsg("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userId}
          placeholder="UserId"
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="number"
          value={id}
          placeholder="Id"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={body}
          placeholder="Body"
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Create</button>

        <div className="message">{msg ? <p>{msg}</p> : null}</div>
      </form>
    </div>
  );
}

export default App;
