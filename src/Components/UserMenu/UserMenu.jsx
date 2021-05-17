import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { authOperations } from '../../redux/auth';

const UserMenu = ({ name, logOut }) => (
    <div>
        <span>Вы вошли как {name}</span>
        <button type="button" onClick={logOut}>
            Выйти
        </button>
    </div>
);

const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
});
const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(authOperations.logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
