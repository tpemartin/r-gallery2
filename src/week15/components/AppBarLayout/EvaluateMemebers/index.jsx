import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import EvaluationDialog from './EvaluationDialog';


window.eval_members = Object()
const members = ['(127)曾浚曜', '(030)楊詠翔', '(046)蔡昱丞', '(097)邵緒倫']
members.forEach(member => {window.eval_members[member] = null})

export default function EvaluateMembers({disabled=false}) {

    const memberGroupEvalutation = members.map((member, i) => {
        return <EvaluateMember member={member} key={i}/>
    });

    return (
        <EvaluationDialog >
            <FormControl disabled={disabled}>
                {memberGroupEvalutation}
            </FormControl>
        </EvaluationDialog>

    );
}


function EvaluateMember({member}) {
    
    const memberRadioGroup = <MemberRadioGroup member={member}/>

    return <>
        <FormLabel id={member}>{member}</FormLabel>
        {memberRadioGroup}
    </>
}

function MemberRadioGroup({member}) {

    const [grade, setGrade] = React.useState(window.eval_members[member]);

    const handleChange = (e, v) => {
        window.eval_members[member] = v
        setGrade(v)
    }

    const arr = Array.from({ length: 6 }, (_, index) => index);
    const rateGroup = arr.map((value, k) => {
        return <RateRadio value={value} key={k} />
    });
    return <>
        <RadioGroup
            row
            aria-labelledby={member}
            name="position"
            defaultValue="top"
            value={grade}
            onChange={handleChange}
        >
            {rateGroup}
        </RadioGroup>


    </>
}

function RateRadio({ value }) {

    return <>
        <FormControlLabel
            value={"" + value}
            control={<Radio />}
            label={"" + value}
            labelPlacement="top"
        />
    </>
}