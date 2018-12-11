import React from 'react'
import { connect } from 'react-redux'
import Banner from './Banner'
import MainView from './MainView'
import Loading from '../Loading'
import agent from '../../agent'

const mapStateToProps = state => ({
    profile: state.profile,
    id: state.user.id,
})

const mapDispatchToProps = dispatch => ({
    onLoad: (id, username) =>
        dispatch({type: 'PROFILE_LOADED', payload: agent.Profile.get(id, username)}),
    onUnload: () =>
        dispatch({type: 'PROFILE_UNLOAD'})
})

class Profile extends React.Component {
    
    componentWillMount() {
        this.props.onLoad(this.props.id, this.props.match.params.username)
    }

    componentWillUnmount() {
        this.props.onUnload()
    }
    
    render () {
        const { profile } = this.props
        return (
            <React.Fragment>
            {
                profile.username &&
                <React.Fragment>
                    <Banner profile={profile}/>
                    <MainView profile={profile} />
                </React.Fragment>
            
            }
            {
                !profile.username &&
                <Loading />
            }
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);