import React from 'react'
import { Grid, Icon, Button, Menu, } from 'semantic-ui-react'
import './navbar.css'



const Navbar = (props) => (
    <div>



        <Menu id="menu" fixed='bottom'  >
            <Grid centered container columns={3}>
                <Grid.Row  >
                    <Grid.Column id="col1" only='computer tablet' tablet={4} computer={4}>       </Grid.Column>

                    <Grid.Column id="col2" mobile={16} tablet={8} computer={8}>
                        <Button circular color="pink" icon='home' />
                        <Button circular color="pink" icon='world' />
                        <Button circular color="pink" icon='phone' />
                        <Button circular color="pink" icon='heart' />



                    </Grid.Column>

                    <Grid.Column id="col3" only='computer tablet' tablet={4} computer={4}>       </Grid.Column>
                </Grid.Row>

            </Grid>
        </Menu>

    </div>

)

export default Navbar

