import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';






const Signup = () => {
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
                    <h2 style={headerStyle}>Sign Up</h2>
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

                    type="text"
                    fullWidth
                    style={{
                      width:"450px"
                      }}
                    
                    variant="outlined"  label="Name"  placeholder="Enter your name" required />
                    </Grid>
                     {/* //multiline 
                    // maxRows={4}
                    // id="outlined-multiline-flexible" */}
                    
                   
                    <br />
                    

                    {/* <TextField id="outlined-basic" halfWidth label='Name' placeholder="Enter your name" required/> */}
                    <Grid align='left'
                    xs={6} sm={10}>
                    <TextField 
                    
                    type="email"
                    style={{
                      marginRight:'20px'
                      }}
                    label='Primary Email' variant="outlined" placeholder="Enter your email" required/>
                    

                    
                    <TextField 
                    type="email"
                    style={{
                      marginRight:'20px'
                      }}
                       label='Secondary Email' variant="outlined" placeholder="Enter your email" required/>
                   </Grid>
                    <br />
                    <br />

                    
                    {/* style ={{width: '80%'}} */}
                    <Grid xs={6} sm={12} align='left'>
                    <TextField 
                    type="number" 
                    style={{
                      marginRight:'20px'
                      }}
                       label='Primary Phone' variant="outlined" placeholder="Enter your Phone" required/>
                    

                    
                    <TextField 
                    type="number"
                    style={{
                      marginRight:'20px'
                      }}
                        label='Secondary Phone' variant="outlined" placeholder="Enter your Phone" required/>
                   </Grid>
                    {/* <TextField fullWidth label='Phone Number' variant="outlined" placeholder="Enter your phone number" />
                    <br />
                    <br />
                    <TextField fullWidth label='Secondary Phone Number' variant="outlined" placeholder="Enter your phone number" />
                    <br />
                    <br /> */}
                    <br />
                    <br />
                    <Grid align='left' xs={6} sm={10}>
                    <TextField
                    type="number"
                    style={{
                      width:'500px'
                      }}

                      
                        label="Age"
                        id="outlined-size-small"
                        size="small"
                        variant="outlined"
                       
                    />
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

                    <br />
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
                     label='Degree' variant="outlined" placeholder="Enter your Degree" required/>
                    <br />
                    <br />
                    </Grid>

                    {/* <Grid align='left'>
                    <TextField 
                    style={{
                      width:'500px'
                      }}
                    fullWidth label='Address' variant="outlined" placeholder="Enter your Address" required/>
                    <br />
                    <br />
                    </Grid> */}


                    <Grid align='left'>
                    <TextField
                    type="number"
                    style={{
                      width:'500px'
                      }}

                    label='Aadhaar No.' variant="outlined" placeholder="Enter your Aadhaar Number" required/>
                    <br />
                    <br />
                    </Grid>

                    <Grid align='left'>
                    <TextField
                    
                    style={{
                      width:'500px'
                      }}
                    label='PAN No.' variant="outlined" placeholder="Enter your PAN Number" required/>
                    <br />
                    <br />
                    </Grid>

                    <Grid align='left'>
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

                    {/* <TextField fullWidth label='Age' variant="outlined" placeholder="Enter your age" /> */}
                    


                    <Grid align='left'>
                    <FormControl variant="outlined" >
                      <InputLabel
                        
                        htmlFor="outlined-age-native-simple"
                      >
                        Role
                      </InputLabel>
                      <Select
                        native
                        
                        input={
                          <OutlinedInput
                            name="Role"
                            id="outlined-age-native-simple"
                          />
                        }
                      >
                        <option value="" />
                        <option>Doctor</option>
                        <option>Receptionist</option>
                        
                      </Select>
                      
                      <FormControlLabel
                                    control={<Checkbox name="checkedA" />}
                                    label="Is Active"
                                />
                      {/* <FormControl component="fieldset" style={marginTop}>

                                <FormLabel component="legend" required>Gender</FormLabel>

                                <RadioGroup aria-label="gender" name="gender"  style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                                </FormControl> */}
                                <br />
                                <TextField  type="password" inputProps={{minlength:8}} label='Password' variant="outlined" placeholder="Enter your password" required/>
                                <br />
                                
                          </FormControl>
                          </Grid>

                          <Grid align='center'>
                          <Button type='submit' variant='contained' color='primary'>Sign up</Button>


                          </Grid>
                            </form>
                    </Paper>
                </Grid> 
                    
    )
}

export default Signup;