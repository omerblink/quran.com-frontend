import React, { Component, PropTypes } from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const style = require('./style.scss');

// To save API calls.
export const slugs = [
  {
    reciter: {
      slug: 'abdulbaset',
      id: 1
    },
    name: {
      english: 'AbdulBaset AbdulSamad (Mujawwad)',
      arabic: 'عبد الباسط عبد الصمد (مجود)'
    },
    style: {
      slug: 'mujawwad',
      id: 1
    },
    id: 1
  },
  {
    reciter: {
      slug: 'abdulbaset',
      id: 1
    },
    name: {
      english: 'AbdulBaset AbdulSamad (Murattal)',
      arabic: 'عبد الباسط عبد الصمد (مرتل)'
    },
    style: {
      slug: 'murattal',
      id: 2
    },
    id: 2
  },
  {
    reciter: {
      slug: 'sudais',
      id: 2
    },
    name: {
      english: 'Abdur-Rahman as-Sudais',
      arabic: 'عبدالرحمن السديس'
    },
    style: {
      slug: null,
      id: null
    },
    id: 3
  },
  {
    reciter: {
      slug: 'shatri',
      id: 3
    },
    name: {
      english: 'Abu Bakr al-Shatri',
      arabic: 'أبو بكر الشاطرى'
    },
    style: {
      slug: null,
      id: null
    },
    id: 4
  },
  {
    reciter: {
      slug: 'rifai',
      id: 4
    },
    name: {
      english: 'Hani ar-Rifai',
      arabic: 'هاني الرفاعي'
    },
    style: {
      slug: null,
      id: null
    },
    id: 5
  },
  {
    reciter: {
      slug: 'alafasy',
      id: 6
    },
    name: {
      english: 'Mishari Rashid al-`Afasy',
      arabic: 'مشاري راشد العفاسي'
    },
    style: {
      slug: null,
      id: null
    },
    id: 8
  },
  {
    reciter: {
      slug: 'minshawi',
      id: 7
    },
    name: {
      english: 'Mohamed Siddiq al-Minshawi (Mujawwad)',
      arabic: 'محمد صديق المنشاوي (مجود)'
    },
    style: {
      slug: 'mujawwad',
      id: 1
    },
    id: 9
  },
  {
    reciter: {
      slug: 'minshawi',
      id: 7
    },
    name: {
      english: 'Mohamed Siddiq al-Minshawi (Murattal)',
      arabic: 'محمد صديق المنشاوي (مرتل)'
    },
    style: {
      slug: 'murattal',
      id: 2
    },
    id: 10
  },
  {
    reciter: {
      slug: 'altablawi',
      id: 9
    },
    name: {
      english: 'Mohamed al-Tablawi',
      arabic: 'محمد الطبلاوي'
    },
    style: {
      slug: null,
      id: null
    },
    id: 12
  },
  {
    reciter: {
      slug: 'alhusary',
      id: 5
    },
    name: {
      english: 'Mahmoud Khalil Al-Husary',
      arabic: 'محمود خليل الحصري'
    },
    style: {
      slug: null,
      id: null
    },
    id: 7
  },
  {
    reciter: {
      slug: 'muallim', // i'm just making up values for slug, i dont think we need this at all
      id: 5
    },
    name: {
      english: 'Mahmoud Khalil Al-Husary (Muallim)',
      arabic: 'محمود خليل الحصري'
    },
    style: {
      slug: 'muallim',
      id: 3
    },
    id: 13
  },
  {
    reciter: {
      slug: 'shuraym',
      id: 8
    },
    name: {
      english: 'Sa`ud ash-Shuraym',
      arabic: 'سعود الشريم'
    },
    style: {
      slug: null,
      id: null
    },
    id: 11
  }
];

export default class ReciterDropdown extends Component {
  static propTypes = {
    onOptionChange: PropTypes.func,
    audio: PropTypes.number,
    className: PropTypes.string
  };

  renderMenu() {
    const { audio, onOptionChange } = this.props;

    return slugs.map(slug => (
      <MenuItem
        key={slug.name.english}
        active={slug.id === audio}
        onClick={() => onOptionChange({ audio: slug.id })}
      >
        {slug.name.english}
      </MenuItem>
    ));
  }

  render() {
    const { className, audio } = this.props;

    return (
      <ButtonToolbar>
        <DropdownButton
          block
          id="reciter-dropdown"
          className={`${className} ${style.dropdown}`}
          title={slugs.find(slug => slug.id === audio).name.english}
        >
          {this.renderMenu()}
        </DropdownButton>
      </ButtonToolbar>
    );
  }
}
