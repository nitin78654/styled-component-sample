import React from 'react';
import { Container, Grid, Typography, Select, MenuItem, InputLabel, FormControl, AppBar, Toolbar } from '@material-ui/core'
import { createStyles, makeStyles, withStyles } from '@material-ui/styles';
import styled from 'styled-components';
import ValueField from '../../components/textfield'
import ButtonField from '../../components/button';
import Radio from '../../components/radio'
import Background43 from '../../../src/assets/Image43/Image43.png'
import Background3 from '../../../src/assets/image3.png'
import DoMore from '../../../src/assets/DoMore/do-more.png'
import AboutUs from '../../../src/assets/Image52/Image52.png'
import * as $ from 'jquery';
import { calc } from '../../utils/calc';


const styles = (theme) => {
    return ({
        container: {
            [theme.breakpoints.down('sm')]: {
                padding: '0 20px !important'
            }
        },
        logo: {
            height: calc(54),
            position: 'absolute',
            width: calc(187),
            top: calc(68),
            left: calc(101)
        },
        label: {
            fontSize: calc(24),
            textTransform: 'initial',
            fontWeight: '300'
        },
        label31: {
            fontSize: calc(31),
            textTransform: 'initial',
            fontWeight: '300'
        },
        formContainer: {
            display: 'flex',
            backgroundColor: '#fff',
            height: '100vh',
            flexDirection: 'row',
            alignItems: 'center', justifyContent: 'center',
            [theme.breakpoints.down('sm')]: {
                height: '70vh',
            }
            // backgroundImage: `url(${Background3})`
        },
        LeftHeroSection: {
            [theme.breakpoints.down('sm')]: {
                padding: '0 20px !important'
            }
        },
        RightHeroSection: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        AboutUsSection: {
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column !important',
                height: '150vh !important'
            }
        },
        AboutUsLeft: {

            [theme.breakpoints.down('lg')]: {
                // width: '150.7rem !important',
                // // width: '90vw',
                // backgroundSize: 'cover !important'
            },
            [theme.breakpoints.down('sm')]: {
                // width: '90vw',
                backgroundSize: 'cover !important'
            }
        },
        AboutUsDetail: {
            position: 'relative',
            left: calc(-22),
            padding: '0px !important',
            [theme.breakpoints.down('sm')]: {
                // padding: '0 20px !important'
            }
        },
        formControl: { width: '100%' },
        titleWrapper: {
            height: 'auto',
            width: '100%',
            backgroundColor: 'transparent',
            position: 'absolute',
            left: calc(134),
            top: calc(376)
        },
        raleway: {
            fontFamily: 'poppins',
            fontWeight: '300'
        },
        h3: {
            fontFamily: 'Gilory',
            textAlign: '', color: '#818cad',
            fontWeight: '700',
            fontSize: calc(86),
            [theme.breakpoints.down('xs')]: {
                fontSize: '55px'
            }
        },
        h4: {
            fontFamily: 'Gilory',
            fontSize: '30px',
            textAlign: '',
            color: '#04195b',
            fontWeight: 700,
            fontSize: calc(89),
            [theme.breakpoints.down('xs')]: {
                fontSize: '8.6rem'
            }
        },
        subtitle1: {
            fontSize: calc(2),
            fontWeight: '300'
        },
        lightColor: {
            color: '#707070'
        },

        cssOutlinedInput: {
            "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline": {
                borderColor: "#fff", //default   
                fontWeight: 300
            },
            "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
                borderColor: "#fff" //hovered
            },
            "&$cssFocused $notchedOutline": {
                borderColor: "#fff" //focused
            }
        },
        notchedOutline: {},
        cssFocused: {},
        error: {},
        disabled: {}
    })
};

const Home = (props) => {
    const { classes } = props


    React.useEffect(() => {

        setTimeout(() => {
            $('html').css('fontSize', '6.5px')

        }, 200)
        return () => {
            $('html').css('fontSize', '')
        };
    })
    return (<React.Fragment>
        <_Container className={classes.container}>
            <FormContainer>
                <AppBar
                    style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                    position="static"
                >
                    <Toolbar
                        style={{ backgroundColor: 'transparent', display: 'flex', height: 100 }}
                    >
                        <div style={{
                            flex: 1, display: 'flex'
                        }}>
                            <img
                                className={classes.logo}
                                src={require('../../assets/URAgentLogo.png')} />
                        </div>
                        <div style={{ flex: 8, display: 'flex', justifyContent: 'flex-end' }}>
                            <ButtonField
                                color="transparent"
                                style={{
                                    width: calc(187),
                                    height: calc(66),
                                    position: 'absolute',
                                    top: calc(50),
                                    right: calc(286),
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                    color: '#000'
                                }}
                                label={classes.label}
                                onClick={() => window.location.href = '/#/login'}
                            >
                                Sign in
                        </ButtonField>
                            <ButtonField
                                style={{
                                    width: calc(187),
                                    height: calc(66),
                                    position: 'absolute',
                                    top: calc(50),
                                    right: calc(68),

                                }}
                                label={classes.label}
                                onClick={() => window.location.href = '/#/signup'}
                            >
                                Sign up
                        </ButtonField>
                        </div>
                    </Toolbar>
                </AppBar>
                <Grid container
                    className={classes.formContainer}
                >
                    <Grid item >
                        {/* <Header>
                            <img src={require('../../assets/URAgentLogo.png')} />
                        </Header> */}

                    </Grid>
                    <LeftHeroSection className={classes.LeftHeroSection}>
                        <Grid
                            item
                        >
                            <div className={classes.titleWrapper}>
                                <Typography

                                    className={
                                        classes.raleway, classes.h3}
                                    variant="h3" gutterBottom={true}>
                                    YourAgent
                            </Typography>
                                <Typography className={
                                    classes.raleway,
                                    classes.h4
                                }
                                    style={{ marginTop: -10 }}
                                    variant="h4" >
                                    Welcome to your
                            </Typography>
                                <Typography className={
                                    classes.raleway,
                                    classes.h4
                                }
                                    style={{ marginTop: -10 }}
                                    variant="h4" >
                                    creative community
                            </Typography>
                                <Typography className={
                                    classes.raleway,
                                    classes.subtitle1
                                }
                                    style={{ marginTop: 0 }}
                                    variant="subtitle1" >
                                    Don’t miss out & sign up today
                            </Typography>
                            </div>
                        </Grid>
                        {/* Form Section */}

                        <Grid item>
                            {/* <FormControl className={styles.formControl, styles.titleWrapper}>
                            <InputLabel className={{
                                root: styles.cssOutlinedInput,
                                focused: styles.cssFocused,
                                notchedOutline: styles.notchedOutline,
                            }} id="demo-simple-select-label">Location</InputLabel>
                            <Select label="Location">
                                <MenuItem value={10}>
                                    Location
                            </MenuItem>
                            </Select>
                        </FormControl> */}
                        </Grid>
                        <Grid item style={{ marginTop: '3.6rem', marginLeft: '13.4rem' }}>
                            <ButtonField
                                style={{
                                    position: 'absolute',
                                    top: calc(758),
                                    left: calc(134),
                                    width: calc(281),
                                    height: calc(82),

                                }}
                                label={classes.label31}
                                onClick={() => window.location.href = '/#/signup'}>
                                Sign up
                        </ButtonField>
                        </Grid>
                    </LeftHeroSection>
                    <RightHeroSection className={classes.RightHeroSection}>



                    </RightHeroSection>

                </Grid>

                <AboutUsSection className={classes.AboutUsSection}>
                    <AboutUsLeft className={classes.AboutUsLeft}>
                        {/* <ImgAboutUs
                            src={AboutUs}
                        /> */}
                    </AboutUsLeft>
                    <AboutUsRight>

                        <AboutUsDetail className={classes.AboutUsDetail}>
                            <Typography className={
                                classes.raleway,
                                classes.subtitle1
                            }
                                style={{ marginTop: 10, fontWeight: 400, color: '#382C4D', fontSize: calc(30) }}
                                variant="subtitle1" >
                                About us
                            </Typography>
                            <Typography
                                style={{
                                    marginTop: 25,
                                    fontSize: calc(46),
                                    fontWeight: 300,
                                    width: calc(515),
                                    color: '#382C4D'
                                }}
                                variant="body2" >
                                Bringing together creative companies & individuals to CREATE
                            </Typography>

                            <Typography className={
                                classes.raleway,
                                classes.subtitle1
                            }
                                style={{
                                    marginTop: 20,
                                    width: calc(575), color: '#382C4D', opacity: 0.9,
                                    fontSize: calc(25)
                                }}
                                variant="subtitle1" >
                                YourAgent is your creative community and discovery platform with creative companies, individuals,
                                jobs and profiles.
                                Let’s find each other and create bigger and better together!
                            </Typography>
                        </AboutUsDetail>
                    </AboutUsRight>
                </AboutUsSection>
            </FormContainer>

        </_Container>
    </React.Fragment>);
}

export default withStyles(styles)(Home);

const _Container = styled.div`
    display: flex;
    flex:1;
    height:fit-content;
    background-color:#fff;
    /* padding:0 70px; */
`
const FormContainer = styled.div`
    flex:1;
   
    /* padding-left: 80px; */
  
`

const HeroSection = styled.div``


const LeftHeroSection = styled.div`
    /* flex:1.55; */
    display:flex;
    flex-direction:column;
    /* padding-left:50px; */
`

const RightHeroSection = styled.div`
    /* flex:1.45; */
    display:flex;
    background-image :  url(${DoMore});
    background-repeat: no-repeat;
    background-position: inherit;
    background-size: cover;
    height: ${calc(771)};
    width:${calc(1157)};
    position:absolute;
    left:${calc(1029)};
    top:${calc(225)};
`
const Header = styled.div`
    height: 100px;
    /* background-color: bisque; */
    width:100%;
    margin-top:20px;
`

const ImgContainer = styled.div`
    /* flex:2.6; */
    background-image: url(${Background43});
    background-repeat:no-repeat;
    /* background-position:center; */
    background-size:cover;
   
`
const AboutUsSection = styled.div`
    /* margin-top:25px; */
    height:100vh;
    display:flex;
    align-items:center;
`

const AboutUsLeft = styled.div`
    background-image : url(${AboutUs});
    background-repeat:no-repeat;
    /* background-position:center; */
    background-size:contain;
    /* height:450px; */
    /* flex:5.5; */
    display:flex;
    align-items:center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: ${calc(1397)};
    height: ${calc(741)};
    position: absolute;
    left: ${calc(-345)};
    top:${calc(1308)}
`

const ImgAboutUs = styled.img`
    width:100%;
    object-fit:fill
`

const AboutUsRight = styled.div`
    /* flex:4.5; */
    display:flex;
    flex-direction:column;
`

const AboutUsDetail = styled.div`
    padding:0 80px;
    display:flex;
    flex-direction:column;
    color:#382C4D;position:absolute;
    left:${calc(1213)};
    top:${calc(1419)}
`
