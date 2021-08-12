import React from 'react';
import {FaBars} from 'react-icons/fa';
import {BsFilm} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';

import ListImem from './ListItem';

const icons = [<FaBars />, <BsFilm />, <BiSearch />];

const Navigation = props => {
    return (
        <ul className="flex">
            {
                icons.map(icon => (
                    <ListImem icon={icon} />
                ))
            }
        </ul>
    )
}

export default Navigation;