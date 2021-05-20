import { connect } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';
import avatar from '../../assets/avatar.png'

const useStyles = createUseStyles({
    logoutBtn: {
        borderStyle: 'none',
    },
    userName: {
        marginRight: 20,
    },
});

const UserMenu = ({ name, logOut }) => {
    const classes = useStyles();
    return (
        <div>
            <img src={avatar} alt="avatar" width="32"/>
            <span className={classes.userName}>Welcome, {name}</span>
            <button
                type="button"
                onClick={logOut}
                className="btn btn-primary btn-sm"
            >
                Logout
            </button>
        </div>
    );
};

const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
});
const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(authOperations.logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);