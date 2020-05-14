import { connect } from 'react-redux';
import Signup from "../components/Signup"
import { addUser, getAllUsers, getUsersById } from '../redux/actions'

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllUsers: () => dispatch(getAllUsers()),
        addUser: user => dispatch(addUser(user)),
        getUsersById: user => dispatch(getUsersById(user)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)