import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import EvaluationDialog from './EvaluationDialog';
import { Tooltip } from '@mui/material';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import BackupIcon from '@mui/icons-material/Backup';



//Object()
// const members =Object.keys(window.assessment.members)
// members.forEach(member => {window.eval_members[member] = null})

function EvaluateMembers({ membersAssessment, disabled = false }) {

    console.log(membersAssessment)
    const members = Object.keys(membersAssessment)
    console.log(members)
    const memberGroupEvalutation = <>{
        members.map((m, i) => {
            return <EvaluateMember member={m} key={i} />
        })
    }</>;

    return (
        <EvaluationDialog >
            <FormControl disabled={disabled}>
                {memberGroupEvalutation}
            </FormControl>
        </EvaluationDialog>

    );
}

export default function EvalutationControl({ membersAssessment }) {

    console.log(membersAssessment)
    const [hasSubmit, setHasSubmit] = React.useState(false)

    const handleSubmit = () => {
        window.assessment.submit = true
        setHasSubmit(true)
    }
    return <>
        <ButtonSubmit onClick={handleSubmit} />
        <ButtonSave />
        <EvaluateMembers membersAssessment={membersAssessment} disabled={hasSubmit} />
    </>
}

function EvaluateMember({ member }) {

    const memberRadioGroup = <MemberRadioGroup member={member} />

    return <>
        <FormLabel id={member}>{member}</FormLabel>
        {memberRadioGroup}
    </>
}

function MemberRadioGroup({ member }) {

    const [grade, setGrade] = React.useState(window.assessment.members[member]);

    const handleChange = (e, v) => {
        window.assessment.members[member] = v
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

function ButtonSave() {
    return <>
        <Tooltip title="儲存">
            <Button color="inherit" onClick={() => { update_record_assessment() }} ><SaveIcon /></Button>
        </Tooltip>

    </>
}

function ButtonSubmit({ onClick }) {
    return <>
        <Tooltip title="送出成績">
            <Button color="inherit" onClick={onClick}><BackupIcon /></Button>
        </Tooltip>

    </>
}