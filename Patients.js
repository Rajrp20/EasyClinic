import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';






const Patientsform = () => {
    const paperStyle = { padding: '30px 20px', width: 800, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>


            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Patient Details</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>


                    
                    <Grid align='left'>
                    <TextField

                    style={{
                      marginRight:'10px',
                      width:"100px"
                      }}
                    label='Mr./Mrs.' variant="outlined" placeholder="Mr./Mrs." required/>
                    
                    
                    <TextField 

                    style={{
                      width:"450px"
                      }}
                    variant="outlined"  label="Name"  placeholder="Enter your name" required />
                    </Grid>


                    <br />

                    <Grid align='left'>
                    <TextField 
                    
                    type="number"
                    style={{
                      marginRight:'20px'
                      }}
                    label='Phone' variant="outlined" placeholder="Enter your Phone Number" required/>
                    </Grid>
                    <br />
                    <Grid align='left'>
                    <TextField  

                    type="email"
                    style={{
                      marginRight:'20px'
                      }}
                       label='Email' variant="outlined" placeholder="Enter your Email" required/>
                    
                    <br />
                    </Grid>


                    <Grid align='left'>
                    <FormControl component="fieldset" style={marginTop}>
                    
                    <FormLabel component="legend" required>Gender</FormLabel>

                    <RadioGroup aria-label="gender" name="gender"  style={{ display: 'initial' }}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>

                    </FormControl>
                    </Grid>
                    <br />


                    
                    
                    <Grid align='left'>
                    <TextField
                    
                    style={{
                      width:'500px'
                      }}
                    
                    multiline
                    rows={3}
                     label='Address' variant="outlined" placeholder="Enter your Address" required/>
                    
                    </Grid>
                    <br />
                    <Grid align='left'>
                    <TextField
                     
                    type="number"
                    
                    style={{
                      width:'500px'
                      }} fullWidth label='Age' variant="outlined" placeholder="Enter your age" />
                    </Grid>

                    <br />
                    
                    <Grid align='left'>
                    <FormControl variant="outlined" >
                      <InputLabel
                        style={{
                            width:'500px'
                            }}
                        htmlFor="outlined-age-native-simple"
                      >
                        Blood Group
                      </InputLabel>
                      <Select
                      style={{
                        width:'200px'
                        }}
                        native
                        
                        input={
                          <OutlinedInput
                            name="Role"
                            id="outlined-age-native-simple"
                          />
                        }
                      >
                        <option value="" />
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                           
                      </Select>


                      
                      </FormControl>
                      </Grid>
                      <br />
                      <br />
                      <Grid align='center'>
                        <Button type='submit' variant='contained' color='primary'>Submit Details</Button>
                      </Grid>
                            </form>
                    </Paper>
                </Grid> 
                    
    )
}

export default Patientsform;