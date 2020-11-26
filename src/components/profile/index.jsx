import React from 'react'

import './profile.style.css'

import Bio from './bio'

import Skills from './skills'

import SocialLinks from './socialLinks'

class Profile extends React.Component{

    //user data for card profile
    userOne = {
        name : 'Md Tazri',
        title : 'I am a student and I learn web developer.One day i become web developer.',
        skills : {
            skillOne : 'Html',
            skillTwo : 'JavaScript',
            skillThree : 'Css',
            skillFour : 'Bootstrap'
        }
    }

    render(){
        // console.log('This Props -',this.props);
        return (
            <div className='container'>

                {/* bio*/}
                {/* <div className="bio">
                    <h3>Md Tazri</h3>
                    <p>I am a student and I learn web developer.One day i become wev developer</p>
                </div> */}
                {/* end bio */}

                {/* skills */}
                {/* <div className="Skills">
                    <h3>Skills : </h3>
                    <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                    </ul>
                </div> */}
                {/* end skills */}

                {/* social link */}
                {/* <div className="SocialLinks">
                    <h3>Social Links : </h3>
                    <ul>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">LinkIn</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Whats App</a></li>
                    </ul>
                </div> */}
                {/* end social link */}

                {/* bio */}
                <Bio name={this.userOne.name} title={this.userOne.title}/>
                {/* end bio */}

                {/* skills */}
                <Skills skillA={this.userOne.skills.skillOne}
                        skillB={this.userOne.skills.skillTwo}
                        skillC={this.userOne.skills.skillThree}
                        skillD={this.userOne.skills.skillFour}
                />
                {/* end skills */}

                {/* social links */}
                <SocialLinks/>
                {/* end social links */}


            </div>
        )
    }
}

export default Profile;