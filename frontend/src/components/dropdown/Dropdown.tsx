import React, {useEffect, useState} from 'react';
import style from "./Dropdown.module.scss";

type DropdownType = {
    setFilterServices: React.Dispatch<React.SetStateAction<string[]>>
    filterServices: string[]
};

const Dropdown = ({setFilterServices, filterServices}: DropdownType) => {
    const [services] = useState(["Payroll", "Treasury", "Implementation", "Bank Payments"])
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedOption, setHighlightedOption] = useState('')

    useEffect(() => {
        if (isOpen) setHighlightedOption('')
    }, [isOpen])
    const clearOptions = () => {
        setFilterServices([])
    }
    const selectOption = (option: string) => {
        if (filterServices.includes(option)) {
            setFilterServices(prevState => prevState.filter(service => service !== option))
        } else {
            setFilterServices(prevState => [...prevState, option])

        }
    }
    const isOptionSelected = (option: string) => {
        return filterServices.includes(option)
    }
    return (
        <div
            tabIndex={0}
            className={style.dropdown}
            onClick={() => setIsOpen(prev => !prev)}
            onBlur={() => setIsOpen(false)}
        >
            <span className={style.value}>{filterServices.map(service => (
                <button
                    key={service}
                    className={style.optionBadge}
                    onClick={e => {
                        e.stopPropagation()
                        selectOption(service)
                    }
                    }
                >{service}<span className={style.removeBtn}>&times;</span></button>
            ))}</span>
            <button
                className={style.clearBtn}
                onClick={e => {
                    e.stopPropagation()
                    clearOptions()
                }
                }
            >&times;</button>
            <div className={style.divider}></div>
            <div className={style.caret}></div>
            <ul className={`${style.options} ${isOpen ? style.show : ''}`}>
                {services.map(option => (
                    <li
                        key={option}
                        className={`${style.option} ${isOptionSelected(option) ? style.selected : ''} ${highlightedOption === option ? style.highlighted : ''}`}
                        onMouseEnter={() => setHighlightedOption(option)}
                        onClick={e => {
                            e.stopPropagation()
                            selectOption(option)
                        }
                        }
                    >{option}</li>
                ))}
            </ul>

        </div>
    );
};

export default Dropdown;