import React, { useState } from "react";
import '../App.css';
import { InputNormal, DynamicForm } from '../components/All_Form';
import { CheckboxGroup2, Multiple1RadioGroups, MultipleSelects } from '../components/CheckboxGroup';
import { Link } from "react-router-dom";

function Form() {

    const [textareaValue, setTextareaValue] = useState("");
    //텍스트아레아
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ textareaValue });
    }

    // 체크박스 값
    const [checkedItems, setCheckedItems] = useState(["option1"]);

    const options = [
        {
            label: "옵션 1",
            value: "option1"
        }, {
            label: "옵션 2",
            value: "option2"
        }, {
            label: "옵션 3",
            value: "option3"
        }, {
            label: "옵션 4",
            value: "option4"
        }
    ];

    //라디오버튼 값
    const [userInputs, setUserInputs] = useState({ gender: "", role: "" });
    const radioGroupsConfig = [
        {
            title: "타이틀",
            name: "네임",
            options: ["male", "female", "여자", "남자"]
        }
    ];

    // 샐렉트 값
    const selectsConfig = [
        {
            label: "카테고리",
            options: [
                "선택하세요", "신비복숭아", "초당옥수수"
            ],
            selectName: "category"
        }, {
            label: "서브카테고리",
            options: [
                "골라주세요.", "신비복숭아1", "신비복숭아2"
            ],
            selectName: "subcategory"
        }
    ];

    // src/pages/Form.js
    return (
        <form onSubmit={handleSubmit}>
            <div
                className="basic_box"
                style={{
                    background: '#dddddd'
                }}>
                <h1>폼태그 상세 입니다</h1>
                <div className='tb_wrap'>
                    <table>
                        <colgroup>
                            <col width="30%" />
                            <col width="auto" />
                        </colgroup>
                        <tbody>
                            {/* 1. input[type="text"] / textarea */}
                            <tr>
                                <th rowSpan={6}>텍스트인풋-한줄&문장</th>
                                <td>
                                    <label
                                        style={{
                                            marginRight: '8px',
                                            width: '60px',
                                            display: 'block',
                                            float: 'left'
                                        }}>아이디:</label>
                                    <InputNormal placeholder="여기에 입력하세요" />

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        style={{
                                            marginRight: '8px',
                                            width: '60px',
                                            display: 'block',
                                            float: 'left'
                                        }}>전화번호:</label>
                                    <InputNormal disabled="disabled" value="디스어블" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        style={{
                                            marginRight: '8px',
                                            width: '60px',
                                            display: 'block',
                                            float: 'left'
                                        }}>비밀번호:</label>
                                    <InputNormal type="password" placeholder="비밀번호를 입력하세요" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        style={{
                                            marginRight: '8px',
                                            width: '60px',
                                            display: 'block',
                                            float: 'left'
                                        }}>주소:</label>
                                    <InputNormal
                                        style={{
                                            height: '40px'
                                        }} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        style={{
                                            marginRight: '8px',
                                            width: '60px',
                                            display: 'block',
                                            float: 'left'
                                        }}>주소:</label>
                                    <InputNormal readOnly={true} value="리드온니" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        style={{
                                            marginRight: '8px',
                                            width: '60px',
                                            display: 'block',
                                            float: 'left'
                                        }}>내용입력:</label>
                                    <textarea
                                        value={textareaValue}
                                        onChange={(e) => setTextareaValue(e.target.value)}
                                        rows={5}
                                        style={{
                                            width: '96%'
                                        }} />
                                </td>
                            </tr>
                            <tr>
                                <th>인풋 동적 생성</th>
                                <td><DynamicForm /></td>
                            </tr>
                            {/* 2. checkbox */}
                            <tr>
                                <th rowSpan={2}>체크박스&라디오버튼</th>
                                <td>
                                    <CheckboxGroup2
                                        options={options}
                                        selectedValues={checkedItems}
                                        onChange={setCheckedItems} /> {/* <div>선택된 값: {checkedItems.join(", ")}</div> */}
                                </td>
                            </tr>
                            <tr>
                                {/* 3. radio */}
                                <td>
                                    <Multiple1RadioGroups
                                        groups={radioGroupsConfig}
                                        values={userInputs}
                                        onChange={(name, value) => setUserInputs({
                                            ...userInputs,
                                            [name]: value
                                        })} />
                                </td>
                            </tr>
                            <tr>
                                <th>셀랙트</th>
                                {/* 4. select */}
                                <td>
                                    <MultipleSelects selectsConfig={selectsConfig} />
                                </td>
                            </tr>
                            <tr>
                                <th>버튼</th>
                                {/* 5. button */}
                                <td>
                                    <Link to="https://www.nate.com/" target="_blank" className="btn_basic">상세보기</Link>
                                    <Link to="../../App" className="btn_red">이전페이지</Link>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* tb_wrap END */}
            </div>
            {/* basic_box END */}
        </form >
    );
}

export default Form;