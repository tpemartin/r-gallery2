import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/base';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import ContinuousSlider from './Slider';


export default function RowRadioButtonsGroup() {


    const [value, setValue] = React.useState({
        gender: null,
        age: null,
        slider: null
    })

    const [age, setAge] = React.useState('');
    const [value2, setValue2] = React.useState(30);

    const handleSliderChange = (e, v) => {
      
      console.log(v)
      setValue2(v);

      let oldvalue = value
      oldvalue['slider'] = v
      setValue(oldvalue)
    };
    const handleAgeChange = (event) => {
        // console.log(event)
        // console.log(v)
        console.log(event.target.value)
        setAge(event.target.value);
        let oldvalue = value
        oldvalue['age'] = event.target.value
        setValue(oldvalue)
    };

    const handleGenderChange = (e, v) => {
        
        console.log(v)
        let oldValue = value
        oldValue['gender'] = v
        setValue(oldValue)
    }


    const handleClick = () => {
        console.log(value)
        // send value to backend
    }

    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={handleGenderChange}
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="other"
                />
            </RadioGroup>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleAgeChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value2} onChange={handleSliderChange} />
        <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />

            <Button onClick={handleClick}>Submit</Button>
        </FormControl>
    );
}

