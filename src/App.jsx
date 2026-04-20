import React, { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(1);
  const [randomString, setRandomString] = useState("");
  const [copied, setCopied] = useState(false);

  const generateString = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setRandomString(result);
    setCopied(false);
  }, [length]);

  useEffect(() => {
    generateString();
  }, [generateString]);

  const handleCopy = () => {
    navigator.clipboard.writeText(randomString);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        
        {/* FLEX H1 */}
        <div style={styles.header}>
          <h1>Random String Generator</h1>
        </div>

        <input
          type="number"
          value={length}
          min="1"
          max="50"
          onChange={(e) => setLength(e.target.value)}
          style={styles.input}
        />

        <button onClick={generateString} style={styles.button}>
          Generate
        </button>

        <div style={styles.outputBox}>
          <p style={styles.result}>{randomString}</p>
          <button onClick={handleCopy} style={styles.copyBtn}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    minHeight: "100vh", 
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #fa8e76, #fcfa8d)",
    margin: 0,
    padding: 0,
  },
  
  container: {
    background: "#ffffffac",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    width: "320px",
  },

  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  },

  input: {
    padding: "10px",
    width: "80%",
    marginBottom: "10px",
    borderRadius: "8px",
    background:"#987a7a",
    border: "1px solid #ccc",
    color:"white",
  },

  button: {
    padding: "10px 20px",
    margin: "10px 0",
    border: "none",
    borderRadius: "8px",
    background: "#6a11cb",
    color: "#fff",
    cursor: "pointer",
  },

  outputBox: {
    marginTop: "15px",
    padding: "10px",
    borderRadius: "10px",
    background: "#f5f5f5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color:"black",
  },

  result: {
    fontSize: "14px",
    wordBreak: "break-all",
    marginRight: "10px",
  },

  copyBtn: {
    padding: "5px 10px",
    border: "none",
    borderRadius: "6px",
    background: "#2575fc",
    color: "#fff",
    cursor: "pointer",
    fontSize: "12px",
  },
};

export default App;