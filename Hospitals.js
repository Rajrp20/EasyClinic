import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Select from '@material-ui/core/Select';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';






const Hospitals = () => {
    const paperStyle = { padding: '30px 20px', width: 800, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    // const marginTop = { marginTop: 5 }
    return (
        <Grid>


            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Hospital Form</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>


                    
                    <Grid align='left'>
                    
                    
                    <TextField 
                    style={{
                      width:"500px"
                      }}
                    
                    variant="outlined"  label="Name"  placeholder="Enter Hospital name" required />
                    
                     
                    <br />
                    <br />
                    <TextField
                    
                    style={{
                      width:'500px'
                      }}
                    
                    multiline
                    rows={3}
                     label='Address' variant="outlined" placeholder="Enter your Address" required/>
                    <br />
                    <br />
                    </Grid>

                    <Grid align='left'>
                    <TextField
                    
                    style={{
                      width:'500px'
                      }}
                    label='GST No.' variant="outlined" placeholder="Enter your GST Number" required/>
                    <br />
                    <br />
                    </Grid>

                    <Grid align='left'>
                   
                    <br />
                    <br />
                    <TextField
                    
                    style={{
                      width:'500px'
                      }}
                    
                    multiline
                    rows={3}
                     label='Disclaimer' variant="outlined" placeholder="Enter your Disclaimer" required/>
                    <br />
                    <br />

                    <TextField
                    
                    style={{
                      width:'500px'
                      }}
                    
                    multiline
                    rows={3}
                     label='Terms And Conditions' variant="outlined" placeholder="Enter your Terms And Conditions" required/>
                    <br />
                    <br />
                    
                    
                    <Button
                    variant="contained"
                    component="label"
                    >
                    Upload File
                    <input
                    type="file"
                    hidden
                    />
                </Button> 
                    </Grid>

                    
                    <Grid align='left'>
                    <FormControl variant="outlined" >
                     
                    <Button type='submit' variant='contained' color='primary'>Submit</Button>


                          </FormControl>
                          </Grid>
                            </form>
                    </Paper>
                </Grid> 
                    
    )
}

export default Hospitals;