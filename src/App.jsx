import React, { useState, useRef } from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import parsear from "../source";

function App() {
  const [fileContent, setFileContent] = useState(""); 
  const [outputContent, setOutputContent] = useState(""); 
  const fileInputRef = useRef(null);

  const estiloTextarea = {
    fontSize: '17px',
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleTextareaChange = (event) => {
    setFileContent(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault(); 
      const { selectionStart, selectionEnd } = event.target;
      const newValue = 
          fileContent.substring(0, selectionStart) + 
          '    ' + 
          fileContent.substring(selectionEnd);

      setFileContent(newValue);
      
      setTimeout(() => {
          event.target.selectionStart = event.target.selectionEnd = selectionStart + 4;
      }, 0);
    }
  };

  const ejecutarParser = () => {
    try {
      const resultado = parsear(fileContent);
      setOutputContent(resultado); 
    } catch (error) {
      setOutputContent(`Error: ${error.message}`); 
    }
  };

  return (
    <div className="form-principal">
      <div className="text-center">
        <form className="card card-body">
          <div className="row mb-4">
            <div className="col">
              <h4>Entrad</h4>
              <textarea
                name="entrada"
                rows="18"
                cols="60"
                style={estiloTextarea}
                value={fileContent}
                onChange={handleTextareaChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="col">
              <h4>Salida</h4>
              <textarea
                name="salida"
                rows="18"
                cols="60"
                style={{ ...estiloTextarea }}
                value={outputContent}
                readOnly
              />
            </div>
          </div>
          <div className="input-group mb-3">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <button
              type="button"
              className="w-20 btn btn-success"
              onClick={ejecutarParser} 
            >
              Analizar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
