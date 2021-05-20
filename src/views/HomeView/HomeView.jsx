import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        padding: '0 15px',
        alignItems: 'center',
        display: 'flex',
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
                Добро пожаловать в приложение "Телефонная книга". Для того чтоб
                воспользоваться возможностями пройдите регистрацию и
                залогиньтесь.
            </h1>
        </section>
    );
};

export default HomeView;
