import React, { useState } from 'react';
import '../App.css';

// 체크박스
function CheckboxGroup() {
  // 체크박스 상태를 객체로 관리
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  // 체크박스 상태를 업데이트하는 함수
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };
  return (
    <div>
      <input type="checkbox" name="option1" checked={checkboxes.option1} onChange={handleChange} />
      <label style={{ marginRight: '8px' }}>선택1</label>
      <input type="checkbox" name="option2" checked={checkboxes.option2} onChange={handleChange} />
      <label style={{ marginRight: '8px' }}>선택2</label>
      <input type="checkbox" name="option3" checked={checkboxes.option3} onChange={handleChange} />
      <label style={{ marginRight: '8px' }}>선택3</label>
      <input type="checkbox" name="option4" checked={checkboxes.option4} onChange={handleChange} />
      <label style={{ marginRight: '8px' }}>선택4</label>
    </div>
  );
}
export { CheckboxGroup };

function CheckboxGroup2({ options, selectedValues, onChange }) {
  // options: [{ label: "옵션1", value: "option1" }, ...]
  // selectedValues: ["option1", ...]
  // onChange: (newSelectedValues) => {}

  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option.value} style={{ marginRight: "12px" }}>
          <input
            type="checkbox"
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export { CheckboxGroup2 };


// 라디오버튼
function Multiple1RadioGroups({ groups, values, onChange }) {
  return (
    <div>
      {groups.map((group) => (
        <div key={group.name} className='radiostyle'>
          <h4>{group.title}</h4>
          {group.options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name={group.name}
                value={option}
                checked={values[group.name] === option}
                onChange={() => onChange(group.name, option)}
                className="radiobox"
              />
              {option}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}

export { Multiple1RadioGroups };

// 샐렉트
function MultipleSelects({ selectsConfig }) {
  // selectsConfig 예시: { label: string, options: string[], selectName: string }[]
  const [selectedValues, setSelectedValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedValues({
      ...selectedValues,
      [name]: value,
    });
  };

  return (
    <div>
      {selectsConfig.map((config) => (
        <SelectField
          key={config.selectName}
          label={config.label}
          options={config.options}
          selectName={config.selectName}
          onChange={handleChange}
          value={selectedValues[config.selectName] || ""}
        />
      ))}
    </div>
  );
}

export { MultipleSelects };

//
function SelectField({ label, options, selectName, onChange, value }) {
  return (
    <label>
      {label}
      <select name={selectName} value={value} onChange={onChange}>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}

export { SelectField };
