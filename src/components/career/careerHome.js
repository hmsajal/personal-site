import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
import cx from 'classnames'

import CareerNav from './careerNav'
import CareerNavMini from './careerNavMini'
import * as CC from './careerContents'

import styles from './careerHome.module.css'


export default function CareerHome(props) {

    return (
        <HashRouter hashType="noslash">
            <div className={styles.mainDiv}>
                <Route path="/" exact>
                    <div className={styles.navDiv}>
                        <CareerNav />
                    </div>
                    <div className={cx(styles.contentDiv, styles.displaybp)}>
                        <CC.AboutMe />
                    </div>
                </Route>
                <Route path="/:slug">
                    <div className={styles.navDiv}>
                        <CareerNavMini />
                        <div className={styles.displaybp} style={{ width: '100%' }}>
                            <CareerNav />
                        </div>
                    </div>
                    <div className={styles.contentDiv}>
                        <CareerRoutes />
                    </div>
                </Route>
            </div>
        </HashRouter>
    )
}


function CareerRoutes(props) {
    return (
        <Switch>
            <Route path="/about-me" component={CC.AboutMe} />
            <Route path="/skills" component={CC.Skills} />
            <Route path="/projects" component={CC.Projects} />
            <Route path="/education" component={CC.Education} />
            <Route path="/certifications" component={CC.Certifications} />
            <Route path="/experiences" component={CC.Experiences} />
            <Route path="/others" component={CC.Others} />
        </Switch>
    )
}

