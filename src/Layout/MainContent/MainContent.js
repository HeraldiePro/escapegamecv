import React from 'react'
import Acceuil from '../../components/Acceuil/Acceuil.jsx'
import StepperContent from '../../components/Stepper/Stepper.jsx'
import { Switch, Route } from 'react-router-dom'

const MainContent = () => {
    return(
        <Switch>
            <Route exact path='/' component={Acceuil}/>
            <Route path='/enigmes' component={StepperContent}/>
        </Switch>
    )
}

export default MainContent