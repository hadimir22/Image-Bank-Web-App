import React from 'react'
import { Grid, Button, Menu, } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './navbar.css'



const Navbar = (props) => (

    <div>



        <Menu id="menu" fixed='bottom'  >
            <Grid centered container columns={3}>
                <Grid.Row  >
                    <Grid.Column id="col1" only='computer tablet' tablet={4} computer={4}>       </Grid.Column>

                    <Grid.Column id="col2" mobile={16} tablet={8} computer={8}>
                        <Link to='/'>  <Button circular color="black" icon='home' /> </Link>
                        <Link to='/results'> <Button circular color="black" icon='world' /> </Link>
                        <Button circular color="black" icon='phone' />
                        <Button circular color="black" icon='heart' />



                    </Grid.Column>

                    <Grid.Column id="col3" only='computer tablet' tablet={4} computer={4}>       </Grid.Column>
                </Grid.Row>

            </Grid>
        </Menu>

    </div>

)

export default Navbar

