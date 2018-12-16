import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextInput from "../input";
import CalendarBtn from "../calendarBtn";

export const TaskNameInput  = (props) => {
    const {
        value,
        name,
        type,
        className,
        placeholder,
        ariaDescribedBy = 'taskDataHelp',
        onChange,
        readOnly,
        label,
        errHint,
        calendarClick
    } = props;

    const labelTag = label && (<label htmlFor='taskData'>{ label}</label>);
    const hintTag = errHint && <small id={`${ name }Help`} className='form-text text-muted'>Введите название занятия на завтра.</small>;
    const handleCalendar = (typeof calendarClick === 'function') && calendarClick;

    return (
        <div className='form-group'>
            {
                labelTag
            }
            <div className='input-group'>
                {
                    handleCalendar && (<CalendarBtn onclick={handleCalendar}/>)
                }
                <TextInput
                    name={ name }
                    type={ type }
                    className={ className }
                    ariaDescribedby={`${ name }Help`}
                    placeholder={ placeholder }
                    value={ value }
                    onChange={ onChange }
                    readOnly={ readOnly }
                />
            </div>
            {
                hintTag
            }
        </div>);
};

export default React.memo(TaskNameInput);

TaskNameInput.propTypes =  {
    value: PropTypes.string, // значение инпута по умолчанию
    name: PropTypes.string, // имя компонента
    type: PropTypes.string, // тип инпута (ввод текста, пароля, мыла и пр)
    className: PropTypes.string, // классы для стилизации компонента
    placeholder: PropTypes.string, // плейсхолдер (подсказка)
    ariaDescribedBy: PropTypes.string, // значение для подсказки внизу инпута
    onChange: PropTypes.func, // функция обработчик события изменения содержимого инпута
    readOnly: PropTypes.bool, //
    label: PropTypes.string,
    errHint: PropTypes.string,
    calendarClick : PropTypes.func
};