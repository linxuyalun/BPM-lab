import React from 'react'
import { connect } from 'react-redux'
import Banner from './Banner'
import MainView from './MainView'
import Loading from '../Loading'
import agent from '../../agent'

const mapStateToProps = state => ({
    profile: state.profile,
    id: state.user.id,
    inProgress: state.common.inProgress
})

const mapDispatchToProps = dispatch => ({
    onLoad: (id, username) =>
        dispatch({type: 'PROFILE_LOADED', payload: agent.Profile.get(id, username)}),
    onUnload: () =>
        dispatch({type: 'PROFILE_UNLOADED'})
})

class Profile extends React.Component {
    
    componentWillMount() {
        this.props.onLoad(this.props.id, this.props.match.params.username)
    }

    componentWillUnmount() {
        this.props.onUnload()
    }
    
    render () {
        const {profile, inProgress } = this.props
        return (
            <React.Fragment>
            {
                !inProgress &&
                <React.Fragment>
                    <Banner profile={profile}/>
                    <MainView profile={profile} />
                </React.Fragment>
            
            }
            {
                inProgress &&
                <Loading />
            }
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);