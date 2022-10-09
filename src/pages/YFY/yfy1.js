import React  from "react";
import './yfy1.css';

const Semicircle = () =>{
    //页面渲染
    return(

                <div className='backgroudDiv' >
                        <div className="title-info">
                        Concept Generation
                        </div>
                        <div className="title-content">
                            <div> We looked for answers to this question through many different channels and approaches. We consulted </div>
                            <div>our instructor and biology experts, reviewed literature, discussed within the team, collaborated with different teams, </div>
                            <div>visited hospitals, companies and schools ...... and finally, our project was born.</div>
                       
                        </div>
                        <div className="pure_bottom">
                            <div className="jump-box" id="jump-box1">  
                                <div id="jump-icon-3User"> <img src="https://static.igem.wiki/teams/4272/wiki/icon-3user.png" alt="3User" /></div>
                                <div className="jump-instance">Peer review</div>
                            </div>
                            <div className="jump-box" id="jump-box2">  
                                <div id="jump-icon-Chat"> <img src="https://static.igem.wiki/teams/4272/wiki/icon-chat.png" alt="Chat" /></div>
                                <div className="jump-instance">Brainstorming</div>
                            </div>
                            <div className="jump-box" id="jump-box3">  
                                <div id="jump-icon-Edit"> <img src="https://static.igem.wiki/teams/4272/wiki/icon-edit.png" alt="Edit" /></div>
                                <div className="jump-instance">Teacher assitance</div>
                            </div>
                            <div className="jump-box" id="jump-box4">  
                                <div id="jump-icon-Search"> <img src="https://static.igem.wiki/teams/4272/wiki/icon-search.png" alt="Search" /></div>
                                <div className="jump-instance">Literature review</div>
                            </div>
                            <div className="jump-box" id="jump-box5">  
                                <div id="jump-icon-AddUser"> <img src="https://static.igem.wiki/teams/4272/wiki/icon-adduser.png" alt="AddUser" /></div>
                                <div className="jump-instance">Collaborations</div>
                            </div>

                            <div id="center-photo2"><img id="centerPho2" src="https://static.igem.wiki/teams/4272/wiki/discussion-photo2.png" alt="中间图片2" /></div>
                            <div id="center-photo1"><img id="center1" src="https://static.igem.wiki/teams/4272/wiki/discussion-photo1.png" alt="中间图片1" /></div>
                        </div>     
                </div>

    )
}

//导出组件
export default Semicircle