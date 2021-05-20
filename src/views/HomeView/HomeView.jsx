import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        padding: '0 15px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: 250,
        '@media (min-width: 575.98px)': {
            padding: '0 calc(50vw - 270px)',
        },
        '@media (min-width: 767.98px)': {
            padding: '0 calc(50vw - 360px)',
        },
        '@media (min-width: 991.98px)': {
            padding: '0 calc(50vw - 480px)',
        },
        '@media (min-width: 1199.98px)': {
            padding: '0 calc(50vw - 590px)',
        },
    },
    title: { fontSize: 20, textAlign: 'center' },
});

const HomeView = () => {
    const classes = useStyles();
    return (
        <section className={classes.container}>
            <h1 className={classes.title}>
            Welcome to the Phonebook app. In order to take advantage of the opportunities, please register and/or login.
            </h1>
        </section>
    );
};

export default HomeView;
