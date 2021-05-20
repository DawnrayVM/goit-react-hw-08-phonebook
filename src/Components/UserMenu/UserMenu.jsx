import { connect } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';

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
            <span className={classes.userName}>Добро пожаловать, {name}</span>
            <button
                type="button"
                onClick={logOut}
                className="btn btn-primary btn-sm"
            >
                Выйти
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
