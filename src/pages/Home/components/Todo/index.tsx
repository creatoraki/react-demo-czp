import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import './index.css';
import checkedIcon from '../../../../assets/images/checked.png'
import uncheckedIcon from '../../../../assets/images/unchecked.png'

interface TodoProps {
    id: string;
    checked?: boolean;
    text?: string;
    isEditing?: boolean;
    onEnter?: (inputValue: string) => void;
    onClick?: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ id, checked = false, text = '', isEditing = false, onEnter = () => { }, onClick = () => { } }) => {
    const [inputValue, setInputValue] = useState<string>(text);

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter' ||event.code === 'NumpadEnter' ) {
            onEnter(inputValue);
            setInputValue('')
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        onClick(id);
    };

    return (
        <div className={isEditing?"todo-item":"todo-item border-line" }onClick={handleClick}>
            <img
                src={checked ? checkedIcon : uncheckedIcon}
                alt={checked ? 'Checked Icon' : 'Unchecked Icon'}
                className='check'
            />
            {isEditing ? (
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="输入文字后按回车创建新的待办事项"
                    autoFocus
                />
            ) : (
                <span className={checked ? 'strikethrough' : ''}>{text}</span>
            )}

        </div>
    );
};

export default Todo;
