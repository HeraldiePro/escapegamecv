import React from 'react'
import Acceuil from '../../components/Acceuil/Acceuil'
import StepperContent from '../../components/Stepper/Stepper'
import { Switch, Route } from 'react-router-dom'

const MainContent = () => {
    return(
        <main>
            <Switch>
                <Route exact path='/' component={Acceuil}/>
                <Route path='/enigmes' component={StepperContent}/>
            </Switch>
        </main>
    )
}

export default MainContent