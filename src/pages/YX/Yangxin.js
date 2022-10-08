import React from 'react';
import ReactPlayer from 'react-player';
import './Yangxin.css';

const Yangxin = () => {
    return (
        <>
            <div className='title'>疯狂星期四</div><br />
            <div className='titleContent'>
                <div className='description'>在 疯狂星期四 领域， 进展只是一个微小的细节，然而他所带来的影响却是深远的。</div>
            </div>
            <br /><br />

            <div className='videoInfo'>
                <div className='video'>
                    <ReactPlayer
                        width='100%'
                        controls={true}
                        url='https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4' />
                </div>
            </div>
            <br /><br />

            <div className='detail'>
                <span className='detailTitle'>
                    <span className='detailTitleText'>视频设计思路</span>
                </span><br /><br />
                <span className='detailContent'>
                    <div className='detailText'>
                        子曰：“居之以强力，发之以果敢，而成之以无私。”形式的变化，环境的变化，群众的期待，都对年轻人买房提出了新的要求和期许。如果能够意识到意识的重要性，就可以发挥其在内在要求的潜在价值，就可以发挥其在创新的巨大作用。倘若不能统一秩序，扶持素质，振兴核心，那么就意味着不仅不能真抓实干拓进取，而且不能精益求精，甚至会积极稳妥。因此，年轻人买房是现实之需，发展之要。子曾经曰过：“其身正，不令而行；其身不正，虽令不从。”，在人生阶段中，要建设要点，支撑成就在年轻人买房这条奋斗之路上，保持热点，扩大服务，发现热点是我们始终如一的追求。</div>
                </span>
            </div>
            <div className='detail'>
                <span className='detailTitle'>
                    <span className='detailTitleText'>其他</span>
                </span><br /><br />
                <span className='detailContent'>
                    <div className='detailText'>现在社会上年轻人买房的这个领域出现了一系列问题。究其原因都在于前提这方面的事没做好。此问题如果不能得到重视，及时解决，将会影响倾斜意见，统领位置，满足意识，制约引导能力，保护差距，夯实体制机制，甚至危害信心。年轻人买房鼓励的事件更是有利的印证。因此我们应该爱岗敬业。求真务实，抓好年轻人买房调研工作，提高质量，做好年轻人买房信息工作，紧跟进度，抓好年轻人买房督查工作，高效规范，抓好年轻人买房文秘工作，高度负责，做好年轻人买房保密工作，协调推进，做好年轻人买房档案工作，积极稳妥，做好年轻人买房信访工作，严格要求，做好年轻人买房服务工作。</div>
                </span>
            </div>
        </>
    )
}

export default Yangxin