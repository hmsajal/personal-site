import React from 'react'

import * as Info from './info'
import styles from './bioBasicInfo.module.css'
import MyImage from '../common/myImage'


export default function BioBasicInfo(props){             
    return (                           
            <div className={styles.main} id="bioBasicInfo">                                                               
                <div className={styles.imgParaDiv}>
                    <div className={styles.myImageDiv}>
                        <MyImage imgWidth="220px"/>            
                    </div>        
                    <div className={styles.paraDiv}>                        
                        <Info.Init/>                   
                    </div>                    
                </div>    
                <Info.ShortInfo/>              
                <Info.Decl/>                 
                <div className="ui item">                                        
                    <Info.Interest heading="Favourite Topics" icon="book" item1="Philosophy" item2="Science"
                            item3="Human Nature" item4='Technology'
                    >                        
                    </Info.Interest>                                                              
                                    
                    <Info.Interest heading="Movies or Series" icon="film" item1="Fight Club"
                               item2="Pulp Fiction" item3="Interstellar" item4="Breaking Bad"
                    >                        
                        <div className="item list">Game of Thrones</div>
                    </Info.Interest>                                        
                                    
                    <Info.Interest heading="People I Envy" icon="users" item1="Rabindranath Tagore"
                            item2="Steve Jobs" item3="Christopher Nolan" item4="Bill Gates"
                    >                         
                    </Info.Interest>                                        
                </div>                                                                                                                                                                                                                                                  
            </div>                 
    )        
}