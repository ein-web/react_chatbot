import React, { useState } from "react";

function InputNormal({ type = "text", value, placeholder, style, readOnly, disabled }) {

  const [inputs, setInputs] = useState({ input1: "", input2: "" });
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs, // 기존 상태 복사
      [name]: value, // 변경된 값만 덮어씌움
    });
  };
  return (
    <div>
      <input type={type} name="input1" value={value} onChange={onChange} className="w250" placeholder={placeholder}
        style={style} readOnly={readOnly} disabled={disabled} />
    </div>

  )
}
export { InputNormal };

// 인풋 동적 생성
function DynamicForm() {
  const [fields, setFields] = useState([{ id: 0, value: "" }]);

  const handleAddField = () => {
    setFields([...fields, { id: fields.length, value: "" }]);
  };

  const handleRemoveField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleChange = (id, e) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, value: e.target.value } : field
      )
    );
  };

  return (
    <div>
      {fields.map((field) => (
        <div key={field.id}>
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleChange(field.id, e)}
          />
          <button onClick={() => handleRemoveField(field.id)}>삭제</button>
        </div>
      ))}
      <button onClick={handleAddField}>추가</button>
    </div>
  );
}
export { DynamicForm };

