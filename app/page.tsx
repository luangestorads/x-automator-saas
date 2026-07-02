"use client";

export default function Home() {

  async function sendTask() {
    const type = (document.getElementById("type") as HTMLInputElement).value;
    const payload = (document.getElementById("payload") as HTMLTextAreaElement).value;

    await fetch("http://localhost:8000/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, payload })
    });

    alert("Task enviada com sucesso!");
  }

  return (
    <div style={{
      background: "#0a0f1a",
      color: "white",
      minHeight: "100vh",
      padding: 40,
      fontFamily: "Arial"
    }}>
      <h1>⚡ X Automator SaaS</h1>

      <div style={{ marginTop: 20 }}>
        <input id="type" placeholder="tipo da task" />
      </div>

      <br />

      <textarea id="payload" placeholder="payload JSON" />

      <br /><br />

      <button onClick={sendTask}>
        Enviar Task
      </button>
    </div>
  );
}